import React, {Component} from 'react';
import PropertyProfileUser from "../common/User-Card/Property-profile-user"
import {Card, Form, Row, Col, Accordion,Image} from "react-bootstrap";
import PropertyDetails from "../common/User-Card/Property-details"
import * as propertyApi from "../../services/organization_property";
import {toast} from "react-toastify";
import PropertyOwnerTenants from './update_owner_tenant'
import Createowner from "../owner/createowner";
import DeletePopup from "../Delete-Modal/delete-popup";



class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[],
            edit:{owner:false,tenant:false},
            show_delete:false
        }
    }
    getdata(id){
        propertyApi.getOrganizationPropertyDetails(id).then((res)=>{
            if(res.success){
                this.setState({data:res.data})

            }
        })
   }


    componentDidMount() {
        this.getdata(this.props.location.state.property_id)
    }
    hanldeDelete(id){
        console.log("delete id",id)

       propertyApi.updateOrganizationPropertyTenantOwner({property_id:this.state.data.id,key:'remove',tenant_id:id}).then(res => {
           if(res.success){
               this.setState({show_delete: false})
               this.componentDidMount()
           }
       })
   }


    render() {
        return (
            <>
                <div className="mb-3">
                    <Row className="align-items-center">
                        <Col xs={6}>
                            <PropertyDetails
                                title="Property Details"
                                name={this.state.data.address}
                                email='hmdawood49@gmail.com'
                                details="View Property Tenants And Owner History"
                                viewhistory={()=>this.props.history.push(
                                    {
                                        pathname:
                                            "/property/history",
                                        state: {
                                            id:this.props.location.state.property_id,
                                            key:'property',
                                            header:this.state.data.address
                                        },
                                    }
                                )}
                            />
                        </Col>
                        <Col xs={6}>
                            <Image src="D:\property-matters-360\backend\public\property_docs/images/9/" rounded />
                        </Col>
                    </Row>
                </div>
                <div className="mb-3">
                    <Row className="align-items-center">
                        <Col xs={6}>
                            {this.state.data.owner_id?(  <PropertyProfileUser
                                showmodal={() => this.setState({edit: {tenant: true}})}
                                removemodal={()=>this.setState({show_delete:true})}
                                tenant_id={this.state.data.tenant_id}
                                title="Active Tenant"
                                name={this.state.data.tenant ? this.state.data.tenant.name : ''}
                                email={this.state.data.tenant ? this.state.data.tenant.email : ''}
                                details={"View Property Owner History"}
                                contact={this.state.data.tenant ? this.state.data.tenant.mobile_no : ''}
                                viewhistory={()=>this.props.history.push(
                                    {
                                        pathname:
                                            "/property/history",
                                        state: {
                                            id:this.state.data.tenant_id,
                                            key:'tenant',
                                            header:this.state.data.tenant.name

                                        },
                                    }
                                )}/>):''}

                        </Col>
                        <Col xs={6}>
                            <PropertyProfileUser
                                showmodal={() => this.setState({edit: {owner: true}})}
                                owner_id={this.state.data.owner_id} title="Active Owner"
                                name={this.state.data.owner ? this.state.data.owner.name : ''}
                                email={this.state.data.owner ? this.state.data.owner.email : ''}
                                details={"View Property Owner History"}
                                contact={this.state.data.owner ? this.state.data.owner.mobile_no : ''}
                                viewhistory={()=>this.props.history.push(
                                    {
                                        pathname:
                                            "/property/history",
                                        state: {
                                            id:this.state.data.owner_id,
                                            key:'owner',
                                            header:this.state.data.owner.name

                                        },
                                    }
                                )}/>
                        </Col>
                    </Row>
                </div>
                {this.state.edit.owner ? (<>
                    <PropertyOwnerTenants
                        show="true"
                        modal="owner"
                        property_id={this.state.data.id}
                        owner_id={this.state.data.owner_id}
                        hide={() => {this.componentDidMount()
                        this.setState({edit: {owner: false}})}}
                    /></>) : ''
                }
                {this.state.edit.tenant ? (<>
                    <PropertyOwnerTenants
                        show="true"
                        modal="tenant"
                        property_id={this.state.data.id}
                        tenant_id={this.state.data.tenant_id}
                        hide={() => {this.componentDidMount()
                            this.setState({edit: {tenant: false}})}}
                    /></>) : ''
                }
                {this.state.show_delete?(<>  <DeletePopup show={this.state.show_delete} title="Are you sure you want to remove this Tenant."
                                                     cancel={() => this.setState({show_delete: false})} delete={() =>
                    this.hanldeDelete(
                        this.state.data.tenant_id
                    )}/></>):''}

            </>
        );
    }
}



export default MyComponent;

