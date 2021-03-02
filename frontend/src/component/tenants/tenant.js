import React, { Component } from 'react'
import haspermission from '../../routes/checkpermission';
import TenantCreate from '../tenants/tenant-create';
import {Table, Modal, Button, Form, Card, Row, Col} from 'react-bootstrap';
import { Btn, InputField, CommonModal } from "../../globalStyle";
import * as tenantsApi from "../../services/organization_tenants";
import {toast} from "react-toastify";
import {Table as AntTable, Space, Tooltip} from "antd";
import * as organizationapi from "../../services/organization_tenants";
import {getColumnSearchProps} from "../../layouts/tablefilter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {DashBoardPage} from "../../assets/css/dashboardStyle";
import DeletePopup from "../Delete-Modal/delete-popup";

export default class Tenant extends Component {

    constructor(props) {
        super(props);
        let org_id = localStorage.getItem('_property_matters_360_user')
        org_id = JSON.parse(org_id)
        this.state = {
            org: [],
            org_id: org_id.organization_id,
            user: JSON.parse(localStorage.getItem('_property_matters_360_user')),
            show_edit: false,
            show_add: false,
            tenant_id:'',
            email: '',
            name: '',
            phone_no: '',
            mobile_no: '',
            loading:true,
            show_delete: false,
            show_approvel:false
        };
    }

    hanldeDelete = (e) => {
        console.log("callinbg delt id",e)
        organizationapi.deleteOrganizationTenants(e).then((res) => {
            if (res.success) {
                toast.success(res.message, {position: toast.POSITION.TOP_RIGHT, autoClose: 2000})
                this.componentDidMount()
                this.setState({show_delete: false});
            }
        })
    };
    hanldeApprovel = (e) => {
        organizationapi.updateOrganizationTenants(e, {
            name: this.state.name,
            salary: this.state.email,
            status:'Approved'
        }).then((res) => {
            if (res.success) {
                toast.success(res.message, {position: toast.POSITION.TOP_RIGHT, autoClose: 2000})
                this.componentDidMount()
                this.setState({show_approvel: false});
            }
        })
    };
    componentDidMount() {
        this.getdata({limit: 5, page: 1})
    }

    getdata = (data = null) => {
        this.setState({
            loading: true
        });
        organizationapi.getOrganizationTenants(this.state.org_id, data).then((res) => {
            if (res.success) {
                this.setState({
                    org: res.tenants.data,
                    loading: false
                });
            }
        })
    }

    onChange = (pagination, filters, sorter, extra) => {
        this.getdata({
            limit: pagination.pageSize,
            page: pagination.current,
            order_by: sorter.field,
            order_type: sorter.order == 'ascend' ? 'asc' : 'desc',
            filters: filters
        })

    }

    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                ...getColumnSearchProps('name', this.state, this),
            },
            {
                title: 'Salary',
                dataIndex: 'salary',
                ...getColumnSearchProps('email', this.state, this),
            },
            {
                title: 'Status',
                dataIndex: 'status',

            },
           
            {
                title: haspermission(['grades_update', 'grades_delete']) ? 'Actions' : '',
                render: (checked, record, index, originNode) => (
                    <Space size="small">
                        <React.Fragment>
                            {haspermission(['salary_update']) && record.status=='Pending'? (
                                <Tooltip placement="topLeft" title="view">
                                    <Btn
                                        onClick={() => this.setState({show_approvel: true, tenant_id:record.id,name:record.name,email:record.salary})}
                                        size="sm" variant="pri2">
                                        <FontAwesomeIcon icon="eye"/>
                                    </Btn>
                                </Tooltip>
                            ) : ''}
                            {haspermission(['grades_update'])  ? (
                                <Tooltip placement="topLeft" title="view">
                                    <Btn
                                        onClick={() => this.setState({
                                            tenant_id:record.id,
                                            name: record.name,
                                            email: record.salary,
                                        
                                            show_edit: true
                                        })
                                        }
                                        size="sm" variant="pri2">
                                        <FontAwesomeIcon icon="edit"/>
                                    </Btn>
                                </Tooltip>
                            ) : ''}

                            {haspermission(['grades_delete']) ? (
                                <Tooltip placement="topLeft" title="Delete">
                                    <Btn
                                        onClick={() => this.setState({show_delete: true, tenant_id:record.id})}
                                        size="sm" variant="pri10">
                                        <FontAwesomeIcon
                                            icon="trash"/>
                                    </Btn>
                                </Tooltip>
                            ) : ''}
                        </React.Fragment>
                    </Space>
                ),
            }

        ];
        return (
            <Card className="commonSection">

                <Card.Header>
                    <Row className="align-items-center">
                        <Col xs="6">
                            <div className="py-2">
                                <h3 className="mb-0">Organization Grades Details</h3>
                            </div>
                        </Col>
                        <Col xs="6" className="text-right">
                            {haspermission(['grades_create']) ? (
                                    <div className="py-2">
                                        <Btn onClick={() => this.setState({show_add: true})
                                        } variant="pri5Outline" size="md">
                                            Add new grades
                                        </Btn>
                                    </div>
                                ) :
                                ''}
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <AntTable columns={columns} dataSource={this.state.org} pagination={{
                        showSizeChanger: true,
                        total: this.state.total,
                        defaultPageSize: 5,
                        pageSizeOptions: [2, 5, 7, 10, 20]
                    }} loading={this.state.loading} onChange={this.onChange} rowKey="id"/>

                    {this.state.show_add ?
                        (
                            <TenantCreate
                                model="create"
                                data={{name: '', email: '', phone_no: '', mobile_no: '', org_id: this.state.org_id}}
                                show={this.state.show_add}
                                hide={() => {
                                    this.setState({show_add: false})
                                    this.componentDidMount()
                                }}
                            />
                        ) : ''
                    }
                    {this.state.show_edit ?
                        (
                            <TenantCreate
                                model="edit"
                                data={{
                                    name: this.state.name,
                                    email: this.state.email,
                                    phone_no: this.state.phone_no,
                                    mobile_no: this.state.mobile_no,
                                    org_id: this.state.org_id,
                                    owner_id: this.state.tenant_id
                                }}
                                show={this.state.show_edit}
                                hide={() => {
                                    this.setState({show_edit: false})
                                    this.componentDidMount()
                                }}
                            />
                        ) : ''
                    }

                </Card.Body>

                {this.state.show_delete ? (
                        <DeletePopup show={this.state.show_delete} btn="Delete" title="Are you sure you want to delete this grade?"
                                     cancel={() => this.setState({show_delete: false})} delete={() =>
                            this.hanldeDelete(
                                this.state.tenant_id
                            )}/>
                    ) :''}
                {this.state.show_approvel ? (
                    <DeletePopup show={this.state.show_approvel} btn="Save" title="Are you sure you want to Approve this change?"
                                 cancel={() => this.setState({show_approvel: false})} delete={() =>
                        this.hanldeApprovel(
                            this.state.tenant_id
                        )}/>
                ) :''}
            </Card>
        );
    }
}
