import React, {Component} from "react";
import {DashBoardPage} from "../../assets/css/dashboardStyle";
import {Card, Row, Col} from "react-bootstrap";
import * as organizationapi from "../../services/organization_owner"
import {Btn} from "../../globalStyle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import haspermission from "../../routes/checkpermission"
import Createowner from './createowner'
import {toast} from 'react-toastify'
import {getColumnSearchProps} from "../../layouts/tablefilter";
import {Space, Tooltip} from "antd";
import {AntTable} from "../../assets/css/TableStyle";
import DeletePopup from "../Delete-Modal/delete-popup";

export default class viewrole extends Component {
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
            owner_id:'',
            email: '',
            name: '',
            phone_no: '',
            mobile_no: '',
            loading:true,
            show_delete: false
        };
    }

    hanldeDelete = (e) => {
     organizationapi.deleteOrganizationOwner(e).then((res)=>{
          if(res.success){
              toast.success(res.message,{position:toast.POSITION.TOP_RIGHT,autoClose:2000})
              this.componentDidMount()
              this.setState({ show_delete: false })
       }
 })
    };

    componentDidMount() {
        this.getdata({limit: 5, page: 1})
    }

    getdata = (data = null) => {
         this.setState({
                    loading:true
                });
        organizationapi.getOrganizationOwner(this.state.org_id,data).then((res) => {
            if (res.success) {
                this.setState({
                    org: res.owners.data,
                    loading:false
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
                ...getColumnSearchProps('name',this.state,this),
            },
            {
                title: 'Email',
                dataIndex: 'email',
                ...getColumnSearchProps('email',this.state,this),
            },
            {
                title: 'Phone No',
                dataIndex: 'phone_no',
                ...getColumnSearchProps('phone_no',this.state,this),
            },
            {
                title: 'Mobile No',
                dataIndex: 'mobile_no',
                ...getColumnSearchProps('mobile_no',this.state,this),
            },
            {
                title: haspermission(['owner_update', 'owner_delete']) ? 'Actions' : '',
                render: (checked, record, index, originNode) => (
                    <Space size="small">
                        <React.Fragment>
                            {haspermission(['owner_update']) ? (
                                <Tooltip placement="topLeft" title="view">
                                    <Btn
                                        onClick={() => this.setState({
                                            owner_id:record.id,
                                            name: record.name,
                                            email: record.email,
                                            mobile_no: record.mobile_no,
                                            phone_no: record.phone_no,
                                            show_edit: true
                                        })
                                        }
                                        size="sm" variant="pri2">
                                        <FontAwesomeIcon icon="edit"/>
                                    </Btn>
                                </Tooltip>
                            ) : ''}
                            {haspermission(['owner_delete']) ? (
                                <Tooltip placement="topLeft" title="Delete">
                                    <Btn
                                        onClick={() => this.setState({show_delete: true, owner_id:record.id})}
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
            <DashBoardPage>
                <Card className="commonSection">
                        <Card.Header>
                            <Row className="align-items-center">
                                <Col xs="6">
                                    <div className="py-2">
                                        <h3 className="mb-0">Organization Owner Details</h3>
                                    </div>
                                </Col>
                                <Col xs="6" className="text-right">
                                    {haspermission(['owner_create']) ? (
                                            <div className="py-2">
                                                <Btn  onClick={() => this.setState({show_add: true})
                                                } variant="pri5Outline" size="md">
                                                    Add new owner
                                                </Btn>
                                            </div>
                                        ) :
                                        ''}
                                </Col>
                            </Row>
                        </Card.Header>
                    <Card.Body>
                        <AntTable rowKey="id" columns={columns} dataSource={this.state.org} pagination={{
                            showSizeChanger: true,
                            total: this.state.total,
                            defaultPageSize: 5,
                            pageSizeOptions: [2, 5, 7, 10, 20]
                        }}  loading={this.state.loading} onChange={this.onChange}/>

                        {this.state.show_add ?
                            (
                                <Createowner
                                    model="create"
                                    data={{name: '', email: '', phone_no: '', mobile_no: '',org_id:this.state.org_id}}
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
                                <Createowner
                                    model="edit"
                                    data={{
                                        name: this.state.name,
                                        email: this.state.email,
                                        phone_no: this.state.phone_no,
                                        mobile_no: this.state.mobile_no,
                                        org_id:this.state.org_id,
                                        owner_id:this.state.owner_id
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
                </Card>

                {
                    this.state.show_delete ? (
                        <DeletePopup show={this.state.show_delete} title="Are you sure you want to delete this owner."
                                     cancel={() => this.setState({show_delete: false})} delete={() =>
                            this.hanldeDelete(
                                this.state.owner_id
                            )}/>
                    ) :''}
            </DashBoardPage>

        );
    }
}
