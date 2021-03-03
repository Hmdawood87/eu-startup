import React, { Component } from 'react'
import { Modal, Form } from 'react-bootstrap';
import { Btn, InputField, CommonModal } from "../../globalStyle";
import {toast} from "react-toastify";
import 'antd/dist/antd.css';
import * as userApi from "../../services/organization_user";
import * as organizationapi from "../../services/organization_role";
import * as organizationgradeapi from "../../services/organization_tenants";


export default class UserCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            setValidated:false,
            org_id:this.props.data.org_id,
            user_id:this.props.data.user_id,
            email:this.props.data.email?this.props.data.email:'',
            name:this.props.data.name?this.props.data.name:'',
            role_id:this.props.data.role_id?this.props.data.role_id:'',
            grade_id:this.props.data.grade_id?this.props.data.grade_id:'',
            roles:[],
            grades:[],
            reporting_role_id:this.props.data.reporting_role_id?this.props.data.reporting_role_id:'',
            reporting_id:this.props.data.reporting_id?this.props.data.reporting_id:'',
            users:[],
            feedback: {
                name: { type: 'invalid', msg: 'name missing.' },
                email: { type: 'invalid', msg: 'email missing' },
                role: { type: 'invalid', msg: 'role missing'},
                grade: { type: 'invalid', msg: 'grade missing'},
                user: { type: 'invalid', msg: 'User missing'}
            }
        }


    }


    componentDidMount(){
        organizationapi.getOrganizationRole(this.state.org_id).then(res => {
            console.log(res)
            if(res.success){
                console.log(res.roles);
                this.setState({roles : res.roles.data})
            }
        });
        organizationgradeapi.getOrganizationTenants(this.state.org_id,{filters:{status:'P'}}).then(res => {
            console.log(res)
            if(res.success){
                this.setState({grades : res.tenants.data})
            }
        });
    }

    handleChange = e => {
        // console.log("value on change ",e.target.value)
        this.setState({[e.target.name]: e.target.value})
        if(e.target.name=='reporting_role_id'){
            this.getusers(e.target.value)
        }
    }
    getusers(id){

        userApi.getOrganizationUsers(this.state.org_id,{filters:{role_id:id}}).then(res => {
            console.log(res)
            if(res.success){
                this.setState({users : res.users.data})
            }
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();

        const form = e.currentTarget;

        console.log("validity",form.checkValidity());

        if (form.checkValidity()) {

            if(this.props.model=='edit'){

                userApi.updateOrganizationUser(this.state.user_id, {
                    name: this.state.name,
                    role_id:this.state.role_id,
                    grade_id:this.state.grade_id,
                    reporting_id:this.state.reporting_id
                })
                .then(res => {
                    console.log(res);
                    if(res.success){
                        toast.success(res.message,{position:toast.POSITION.TOP_RIGHT,autoClose:2000})
                    }
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(this.props.hide());

            }else{

                userApi.createOrganizationUser({
                    name : this.state.name,
                    email : this.state.email,
                    organization_id : this.state.org_id,
                    grade_id:this.state.grade_id,
                    role_id: this.state.role_id,
                    reporting_id:this.state.reporting_id
                })
                .then(res => {
                    if(res.status){
                        toast.success(res.message,{position:toast.POSITION.TOP_RIGHT,autoClose:2000})
                    }
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(this.props.hide());
            }

        } else {
            this.setState({ setValidated: true  });
        }


    }

    render() {
        return (
            <CommonModal size="md" aria-labelledby="contained-modal-title-vcenter" centered
                         show={this.props.show} onHide={this.props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title className="mx-auto">
                        {this.props.model=='create'?'Create User':'Edit User'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={this.state.setValidated} onSubmit={this.handleSubmit} >

                        <InputField >
                            <Form.Control value={this.state.name} name="name" type="text" required
                                            placeholder="soeraji" onChange={this.handleChange}/>
                            <Form.Label>User name</Form.Label>
                            <Form.Control.Feedback type={this.state.feedback.name.type}>
                                {this.state.feedback.name.msg}
                            </Form.Control.Feedback>
                        </InputField>
                        <InputField >
                            <Form.Control value={this.state.email}
                                name="email"
                                type="email"
                                required
                                placeholder="soeraji@tech.com"
                                onChange={this.handleChange}
                                          />
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control.Feedback type={this.state.feedback.email.type}>
                                {this.state.feedback.email.msg}
                            </Form.Control.Feedback>
                        </InputField>
                        {/*{this.state.role_id &&*/}
                            <InputField className="select">
                                <Form.Control as="select" name="role_id"
                                    value={this.state.role_id}
                                    onChange={this.handleChange}

                                              required>

                                    <option key="0" value="0">Select Any One</option>
                                    {this.state.roles.map(role => ( <option key={role.id} value={role.id}>{role.name}</option> ))}
                                </Form.Control>
                                <Form.Label>User Role</Form.Label>
                                <Form.Control.Feedback type={this.state.feedback.role.type}>
                                    {this.state.feedback.role.msg}
                                </Form.Control.Feedback>
                            </InputField>
                        <InputField className="select">
                            <Form.Control as="select" name="reporting_role_id"
                                          value={this.state.reporting_role_id}
                                          onChange={this.handleChange}

                                          required>
                                <option key="0" value="0">Select Any One</option>
                                {this.state.roles.map(role => ( <option key={role.id} value={role.id}>{role.name}</option> ))}
                            </Form.Control>
                            <Form.Label>Reporting Role</Form.Label>
                            <Form.Control.Feedback type={this.state.feedback.role.type}>
                                {this.state.feedback.role.msg}
                            </Form.Control.Feedback>
                        </InputField>
                        <InputField className="select">
                            <Form.Control as="select" name="reporting_id"
                                          value={this.state.reporting_id}
                                          onChange={this.handleChange}
                                          required>
                                <option key="0" value="0">Select Any One</option>
                                {this.state.users.map(role => ( <option key={role.id} value={role.id}>{role.name}</option> ))}
                            </Form.Control>
                            <Form.Label>User</Form.Label>
                            <Form.Control.Feedback type={this.state.feedback.grade.type}>
                                {this.state.feedback.grade.msg}
                            </Form.Control.Feedback>
                        </InputField>
                        <InputField className="select">
                            <Form.Control as="select" name="grade_id"
                                          value={this.state.grade_id}
                                          onChange={this.handleChange}
                                          required>
                                <option key="0" value="0">Select Any One</option>
                                {this.state.grades.map(role => ( <option key={role.id} value={role.id}>{role.name}</option> ))}
                            </Form.Control>
                            <Form.Label>Grade</Form.Label>
                            <Form.Control.Feedback type={this.state.feedback.grade.type}>
                                {this.state.feedback.grade.msg}
                            </Form.Control.Feedback>
                        </InputField>
                        {/*}*/}
                       <div className="text-center">
                           <Btn type="submit" variant="pri5RGBA"
                                disabled={this.state.email === '' || this.state.name === '' || this.state.role_id === ''|| this.state.reporting_id === '' || this.state.grade_id === ''}
                           >
                               {this.props.model=='create'?'Save':'Update'}
                           </Btn>
                       </div>
                    </Form>
                </Modal.Body>
            </CommonModal>
        )
    }
}
