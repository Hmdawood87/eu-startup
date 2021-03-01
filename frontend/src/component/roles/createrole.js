import React, {Component, useContext} from "react";
import {Card, Form, Row, Col, Accordion, Button} from "react-bootstrap";
import AccordionContext from 'react-bootstrap/AccordionContext';
import {useAccordionToggle} from 'react-bootstrap/AccordionToggle';
import * as organizationapi from "../../services/organization_role"
import {
    Btn,
    InputField, Listing,
    TextArea
} from "../../globalStyle";
import {
    withRouter
} from "react-router-dom";
import {toast} from "react-toastify";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Bg from "../../assets/img/bg-pattern.jpg";

class createrole extends Component {
    constructor(props) {
        super(props);
        console.log("location", this.props.location.state)
        this.state = {
            org_name: this.props.location.state.org_name,
            org_id: this.props.location.state.org_id,
            role_name: this.props.location.state
                .role_name
                ? this.props.location.state.role_name
                : "",
            role_description: this.props.location.state
                .role_description
                ? this.props.location.state.role_description
                : "",
            form_data: [],
            permissions: this.props.location.state
                .permissions
                ? this.props.location.state.permissions
                : [],
            role_id: this.props.location.state.role_id,
            org_edit: this.props.location.state.role_id
                ? true
                : false,
            activeAccordion: null,
            feedback: {
                role_name: {type: "invalid", msg: "role name missing"}
            },
            setValidated: false


        };
    }

    handleSubmit = (e) => {
        // e.preventDefault()
        // const form = e.currentTarget;
        // console.log(form)
        if (this.state.role_name === '') {
            this.setState({setValidated: true});
        }

        this.state.org_edit
            ? organizationapi.updateOrganizationRole(this.state.role_id, {
                permissions: this.state
                    .permissions,
                name: this.state.role_name,
                description: this.state.role_description
            }).then((res) => {
                if (res.success) {
                    toast.success(res.message, {position: toast.POSITION.TOP_RIGHT, autoClose: 2000})
                    this.props.history.push("/roles");
                }
            })
            :
            organizationapi.createOrganizationRole({
                organization_id: 1,
                permissions: this.state.permissions,
                name: this.state.role_name,
                description: this.state.role_description

            }).then((res) => {
                if (res.success) {
                    toast.success(res.message, {position: toast.POSITION.TOP_RIGHT, autoClose: 2000})
                    this.props.history.push("/roles");
                }
            })
    }
    checkPermission = id => {
        if (
            this.state.permissions.indexOf(id) !== -1
        ) {
            return true;
        } else {
            return false;
        }
    };
    handleChange = (id, e) => {
        let array = [...this.state.permissions]; // make a separate copy of the array
        console.log("array index ", array);

        var index = array.indexOf(id);
        if (
            index !== -1 &&
            e.target.checked == false
        ) {
            array.splice(index, 1);
            this.setState({permissions: array});
        }
        if (index == -1 && e.target.checked == true) {
            this.setState(prevState => ({
                permissions: [
                    ...prevState.permissions,
                    id
                ]
            }));
        }
    };
    //
    // toggleAccording = id => {
    //     if (eventKey === id) {
    //         this.setState({
    //             activeAccordion: true
    //         }, () => {
    //         });
    //     }
    // }


    AccordionToggle({children, eventKey, callback}) {
        const currentEventKey = useContext(AccordionContext);

        const decoratedOnClick = useAccordionToggle(
            eventKey,
            () => callback && callback(eventKey),
        );

        const isCurrentEventKey = currentEventKey === eventKey;

        return (
            <Accordion.Toggle
                as={Card.Header}
                className={isCurrentEventKey ? 'h4 accordion active' : 'h4 accordion'}
                onClick={decoratedOnClick}>
                <Btn className="icon" variant="priRGBA" size="sm">
                    <FontAwesomeIcon icon={isCurrentEventKey ? 'minus' : 'plus'}/>
                </Btn>
                {children}
            </Accordion.Toggle>
        );
    }

    componentDidMount() {
        // console.log("state on mount", this.state);
        organizationapi.getAllPermissions().then((res) => {
            if (res.data.success) {
                const data = res.data.data;
                this.form = data;
                let group_name = [];
                let count = 1;
                let sub_count = 1;
                data.map((fileds, index) => {
                    if (group_name.length > 0) {
                        // console.log("outer loop outer if",fileds.group_name);
                        if (
                            group_name[count - 1].name.toLowerCase() ===
                            fileds.group_name.toLowerCase()
                        ) {

                            if (
                                group_name[
                                count - 1
                                    ].sub_group_name[sub_count - 1].name.toLowerCase() ===
                                fileds.sub_group_name.toLowerCase()
                            ) {
                                group_name[
                                count - 1
                                    ].sub_group_name[
                                sub_count - 1
                                    ].values.push({
                                    id: fileds.id,
                                    key: fileds.key,
                                    description: fileds.name,
                                    value: this.checkPermission(
                                        fileds.id
                                    )
                                });
                            } else {
                                group_name[
                                count - 1
                                    ].sub_group_name.push({
                                    name: fileds.sub_group_name,
                                    values: [
                                        {
                                            description: fileds.name,
                                            id: fileds.id,
                                            key: fileds.key,
                                            value: this.checkPermission(
                                                fileds.id
                                            )
                                        }
                                    ]
                                });
                                sub_count = sub_count + 1
                            }
                            // });
                        } else {
                            group_name.push({
                                name: fileds.group_name,
                                sub_group_name: [
                                    {
                                        name: fileds.sub_group_name,
                                        values: [
                                            {
                                                description: fileds.name,
                                                id: fileds.id,
                                                key: fileds.key,
                                                value: this.checkPermission(
                                                    fileds.id
                                                )
                                            }
                                        ]
                                    }
                                ]
                            });
                            count = count + 1;
                            sub_count = 1
                        }
                    } else {
                        group_name.push({
                            name: fileds.group_name,
                            sub_group_name: [
                                {
                                    name: fileds.sub_group_name,
                                    values: [
                                        {
                                            description: fileds.name,
                                            id: fileds.id,
                                            key: fileds.key,
                                            value: this.checkPermission(
                                                fileds.id
                                            )
                                        }
                                    ]
                                }
                            ]
                        });
                    }
                });
                this.setState({
                    form_data: group_name
                });
            }

        })

    }


    render() {
        return (
            <>
                <Card className="commonSection mb-3 with-bg" style={{background: `#ffffff url(${Bg}) no-repeat`}}>
                    <div className="layer"/>
                    <div className="withBg-content">
                        <Card.Header>
                            <Row className="align-items-center">
                                <Col size="12">
                                    <div className="py-2">
                                        <h3 className="mb-0 text-capitalize">{this.state.org_name}</h3>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md="8" lg="6" xl="5">
                                    <Form noValidate validated={this.state.setValidated}>
                                        <InputField>
                                            <Form.Control
                                                value={this.state.role_name}
                                                name="org_name"
                                                type="text"
                                                required
                                                placeholder="Super Admin"
                                                onChange={event =>
                                                    this.setState({
                                                        role_name:
                                                        event.target.value
                                                    })
                                                }
                                            />
                                            <Form.Label>
                                                Enter Role Name
                                            </Form.Label>
                                            <Form.Control.Feedback
                                                type={this.state.feedback.role_name.type}>{this.state.feedback.role_name.msg}</Form.Control.Feedback>
                                        </InputField>
                                        <TextArea>
                                            <Form.Control
                                                value={this.state.role_description}
                                                name="org_description"
                                                as="textarea"
                                                placeholder="Super Admin can create all task"
                                                onChange={event =>
                                                    this.setState({
                                                        role_description:
                                                        event.target.value
                                                    })
                                                }
                                            />
                                            <Form.Label>
                                                Enter Role Details
                                            </Form.Label>
                                        </TextArea>

                                    </Form>
                                </Col>
                            </Row>
                        </Card.Body>
                    </div>
                </Card>
                <Card className="commonSection">
                    <Card.Header>
                        <Row className="align-items-center">
                            <Col size="12">
                                <div className="py-2">
                                    <h3 className="mb-0">Roles Managements</h3>
                                </div>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Accordion defaultActiveKey="0">
                            {this.state.form_data.map(
                                (fields, index) => (
                                    <Card className="mb-2" key={index}>
                                        <this.AccordionToggle eventKey={index}
                                                              activeKey={index}>{fields.name}</this.AccordionToggle>
                                        <Accordion.Collapse eventKey={index}>
                                            <Card.Body>
                                                <Form.Row>
                                                    {fields.sub_group_name.map(
                                                        (
                                                            sub_fields,
                                                            index
                                                        ) => (
                                                            <Col xs="12" md="6" lg="4" className="mb-3" key={index}>
                                                                <Card className="commonSection">
                                                                    <Card.Header>
                                                                        {sub_fields.name}
                                                                    </Card.Header>
                                                                    <Card.Body>
                                                                        <Listing>
                                                                            {sub_fields.values.map(
                                                                                (
                                                                                    values,
                                                                                    index
                                                                                ) => (
                                                                                    <li key={index}>
                                                                                        <label
                                                                                            className="control control--checkbox bigCheck"
                                                                                            htmlFor={`${values.id}`}>
                                                                                            {values.description}
                                                                                            <input
                                                                                                type="checkbox"
                                                                                                name="roleChecks"
                                                                                                id={`${values.id}`}
                                                                                                defaultChecked={
                                                                                                    values.value
                                                                                                }
                                                                                                onChange={event =>
                                                                                                    this.handleChange(values.id, event)}
                                                                                            />
                                                                                            <div
                                                                                                className="control__indicator"/>
                                                                                        </label>
                                                                                    </li>
                                                                                )
                                                                            )}
                                                                        </Listing>
                                                                    </Card.Body>
                                                                </Card>
                                                            </Col>
                                                        )
                                                    )}
                                                </Form.Row>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                )
                            )}
                        </Accordion>
                        <div className="text-right mt-4">
                            <Btn
                                variant="pri"
                                onClick={this.handleSubmit}
                                disabled={this.state.role_name !== '' ? false : true}
                            >
                                {!this.state.org_edit
                                    ? "Save"
                                    : "Update"}
                            </Btn>
                        </div>
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default withRouter(createrole);
