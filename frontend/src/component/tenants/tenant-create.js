import React, {Component} from 'react';
import {Modal, Form, Row, Col} from 'react-bootstrap';
import {Btn, InputField, CommonModal} from "../../globalStyle";
import * as organizationapi from "../../services/organization_tenants";
import {toast} from "react-toastify";

export default class TenantCreate extends Component {
    constructor(props) {
        console.log("prp are",props)
        super(props);
        this.state = {
            show: false,
            setValidated:false,
            org_id:this.props.data.org_id,
            email:this.props.data.email?this.props.data.email:'',
            name:this.props.data.name?this.props.data.name:'',
            phone_no:this.props.data.phone_no?this.props.data.phone_no:'',
            mobile_no:this.props.data.mobile_no?this.props.data.mobile_no:'',
            status:'Pending',
            feedback: {
                email: {msg: "salary missing", type: "invalid"},
                name: {msg: "name missing", type: "invalid"},
            
            }
        }


    }

    handleChange = e => {
        // console.log("value on change ", e.target);
        this.setState({
            [e.target.name]: e.target.value
        });
        // const form = e.currentTarget;
        // if (form.checkValidity() == true) {
        //     this.setState({
        //         setValidated: true
        //     });
        // }
    };

    handlesubmitt = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()) {
            e.preventDefault();
            this.setState({setValidated: true});
            // e.stopPropagation();
        }
        this.props.model == 'edit'
            ? organizationapi.updateOrganizationTenants(this.props.data.owner_id, {
                name: this.state.name,
                salary: this.state.email,
                status:this.state.status
            }).then((res) => {
                if (res.success) {
                    toast.success(res.message, {position: toast.POSITION.TOP_RIGHT, autoClose: 2000})
                    this.props.hide()
                }
            })
            :
            organizationapi.createOrganizationTenants({
                organization_id: this.state.org_id,
                name: this.state.name,
                salary: this.state.email,


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
                        className="mx-auto">{this.props.model == 'create' ? 'Create Grade' : 'Edit Grade'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={this.state.setValidated} onSubmit={this.handlesubmitt}>
                        <InputField>
                            <Form.Control
                                value={this.state.name}
                                name="name"
                                type="text"
                                required
                                placeholder="16"
                                onChange={this.handleChange}
                            />
                            <Form.Label>
                                Grade Name
                            </Form.Label>
                            <Form.Control.Feedback type={this.state.feedback.name.type} >
                                {this.state.feedback.name.msg}
                            </Form.Control.Feedback>
                        </InputField>
                        <InputField>
                            <Form.Control
                                value={this.state.email}
                                name="email"
                                type="text"
                                required
                                placeholder="1600"
                                onChange={this.handleChange}
                            />
                            <Form.Label>
                                Grade Salary
                            </Form.Label>
                            <Form.Control.Feedback type={this.state.feedback.email.type} >
                                {this.state.feedback.email.msg}
                            </Form.Control.Feedback>
                        </InputField>
                        
                     
                        <ul className="list-inline text-center mb-0">
                            <li className="list-inline-item">
                                <Btn type="submit" variant="pri5RGBA"
                                    disabled={this.state.email === '' ||
                                    this.state.name === '' }
                                >
                                    {this.props.model == 'create' ? 'Save' : 'Update'}
                                </Btn>
                            </li>
                            <li className="list-inline-item">
                                <Btn onClick={this.props.hide} variant="pri7RGBA">
                                    Cancel
                                </Btn>
                            </li>
                        </ul>
                    </Form>
                </Modal.Body>
            </CommonModal>
        )
    }
}
