import React, {Component} from 'react';
import {Modal, Row, Col, Button, Form, Media,} from "react-bootstrap";
import Avatar from "../../component/common/avatar/Avatar";
import User from "../../assets/img/Bitmap.svg";
import ContactIconPrimary5 from "../../assets/img/Contact-Icon-primary5.svg";
import EmailIconPrimary5 from "../../assets/img/Email-Icon-primary5.svg";
import ChatIconPrimary5 from "../../assets/img/Chat-Icon-primary5.svg";
import StarRating from "../../component/common/star-rating/star-rating";
import {SearchField} from "../../assets/css/searchAreaStyle";
import {InfoHeading, InfoItem} from "../../assets/css/mediaStyle";
import {BadgeLabel, Btn, colorPrimary5, CommonModal, InputField} from "../../globalStyle";
import {AssignVendorLists, NewVendorLists} from "../../assets/css/dashboardStyle";
import * as organizationapi from "../../services/organization_owner";
import {toast} from 'react-toastify'

export default class createowner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            setValidated:false,
            org_id:this.props.data.org_id,
            email:this.props.data.email?this.props.data.email:'',
            name:this.props.data.name?this.props.data.name:'',
            phone_no:this.props.data.phone_no?this.props.data.phone_no:'',
            mobile_no:this.props.data.mobile_no?this.props.data.mobile_no:'',
            feedback: {
                name: {msg: "name missing", type: "invalid"},
                email: {msg: "email missing", type: "invalid"},
                phone_no: {msg: "phone missing", type: "invalid"},
                mobile_no: {msg: "msg missing", type: "invalid"}
            }
        }


    }

    handleChange = e => {
        // console.log("value on change ", e.target);
        this.setState({
            [e.target.name]: e.target.value
        });
        const form = e.currentTarget;
        if (form.checkValidity()==true){
            this.setState({
                setValidated:true
            });
        }
    };

    handlesubmitt=(e)=>{
        e.preventDefault();
        const form = e.currentTarget;

        console.log('validtiy',form.checkValidity());
        if (!form.checkValidity()) {
            e.preventDefault();
            this.setState({setValidated: true});
            // e.stopPropagation();
        }
        this.props.model == 'edit'
            ? organizationapi.updateOrganizationOwner(this.props.data.owner_id, {
                name: this.state.name,
                email: this.state.email,
                mobile_no: this.state.mobile_no,
                phone_no: this.state.phone_no,
            }).then((res) => {
                if (res.success) {
                    toast.success(res.message, {position: toast.POSITION.TOP_RIGHT, autoClose: 2000})
                    this.props.hide()
                }
            })
            :
            organizationapi.createOrganizationOwner({
                organization_id: this.state.org_id,
                name: this.state.name,
                email: this.state.email,
                mobile_no: this.state.mobile_no,
                phone_no: this.state.phone_no,

            }).then((res) => {
                if (res.success) {
                    toast.success(res.message, {position: toast.POSITION.TOP_RIGHT, autoClose: 2000})
                    this.props.hide()
                }
            })


    }

    render() {
        return (
            <CommonModal size="md" aria-labelledby="contained-modal-title-vcenter" centered
                         show={this.props.show} onHide={this.props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title
                        className="mx-auto">{this.props.model == 'create' ? 'Create Owner' : 'Edit Owner'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={this.state.setValidated} onSubmit={this.handlesubmitt}>
                        <Form.Row>
                            <Col xs="12">
                                <InputField>
                                    <Form.Control
                                        value={this.state.name}
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Dawood Tahir"
                                        onChange={this.handleChange}
                                    />
                                    <Form.Label>
                                        Owner Name
                                    </Form.Label>
                                    <Form.Control.Feedback type={this.state.feedback.name.type}>
                                        {this.state.feedback.name.msg}
                                    </Form.Control.Feedback>
                                </InputField>

                            </Col>
                            <Col xs="12">
                                <InputField>
                                    <Form.Control
                                        value={this.state.email}
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="abc@gmail.com"
                                        onChange={this.handleChange}
                                    />
                                    <Form.Label>
                                        Owner Email
                                    </Form.Label>
                                    <Form.Control.Feedback type={this.state.feedback.email.type}>
                                        {this.state.feedback.email.msg}
                                    </Form.Control.Feedback>
                                </InputField>
                            </Col>
                            <Col xs="12">
                                <InputField>
                                    <Form.Control
                                        value={this.state.phone_no}
                                        name="phone_no"
                                        type="text"
                                        required
                                        placeholder="0563712883"
                                        onChange={this.handleChange}
                                    />
                                    <Form.Label>
                                        Owner Phone No
                                    </Form.Label>
                                    <Form.Control.Feedback type={this.state.feedback.phone_no.type}>
                                        {this.state.feedback.phone_no.msg}
                                    </Form.Control.Feedback>
                                </InputField>
                            </Col>
                            <Col xs="12">
                                <InputField>
                                    <Form.Control
                                        value={this.state.mobile_no}
                                        name="mobile_no"
                                        type="text"
                                        required
                                        placeholder="+923417656271"
                                        onChange={this.handleChange}
                                    />
                                    <Form.Label>
                                        Owner Mobile No
                                    </Form.Label>
                                    <Form.Control.Feedback type={this.state.feedback.mobile_no.type}>
                                        {this.state.feedback.mobile_no.msg}
                                    </Form.Control.Feedback>
                                </InputField>
                            </Col>
                            <Col xs="12" className="text-center">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item">
                                        <Btn type="submit" variant="pri5RGBA"
                                            disabled={this.state.email === '' ||
                                                      this.state.name === '' ||
                                                      this.state.mobile_no === '' ||
                                                      this.state.phone_no === ''}
                                            >
                                            {this.props.model == 'create' ? 'Save' : 'Update'}
                                        </Btn>
                                    </li>
                                    <li className="list-inline-item">
                                        <Btn onClick={this.props.hide}
                                         variant="pri7RGBA">
                                            Cancel
                                        </Btn>
                                    </li>
                                </ul>
                            </Col>
                        </Form.Row>
                    </Form>
                </Modal.Body>
            </CommonModal>
        )
    }
}

