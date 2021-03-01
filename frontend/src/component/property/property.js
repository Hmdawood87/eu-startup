import React, { Component } from 'react'
import {Table, Modal, Button, Form, Card, Row, Col} from 'react-bootstrap';
import { Btn, InputField, CommonModal } from "../../globalStyle";
import haspermission from '../../routes/checkpermission';
import * as propertyApi from  "../../services/organization_property";
import PropertyCreate from "../property/property-create";
import {toast} from "react-toastify";
import 'antd/dist/antd.css';
import {Table as AntTable, Space, Tooltip} from "antd";
import {getColumnSearchProps} from "../../layouts/tablefilter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {DashBoardPage} from "../../assets/css/dashboardStyle";
import UserCreate from "../users/user-create";
import DeletePopup from "../Delete-Modal/delete-popup";

export default class Property extends Component {


    constructor(props) {
        super(props);
        this.state = {
            org: [],
            user: JSON.parse(localStorage.getItem('_property_matters_360_user')),
            show_edit: false,
            show_add: false,
            propertyid:'',
            address: '',
            state_id: '',
            city_id: '',
            country_id:'',
            tenant_id: 1,
            owner_id: 1,
            loading:true,
            total: 0,
            show_delete: false
        };
    }

    hanldeDelete = (e) => {
        propertyApi.deleteOrganizationProperty(e).then((res)=>{
            if(res.success){
                toast.success(res.message,{position:toast.POSITION.TOP_RIGHT,autoClose:2000})
                this.componentDidMount()
                this.setState({show_delete: false})
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
        propertyApi.getOrganizationProperties(this.state.user.organization_id,data).then(res => {
            if(res.success){

                this.setState({org: res.properties.data,loading:false,total:res.properties.total});
            }
        });
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
                title: 'Address',
                dataIndex: 'address',
                ...getColumnSearchProps('address',this.state,this),
            },
            {
                title: 'Country',
                dataIndex: 'country',
                key:'country_name',
                ...getColumnSearchProps('country',this.state,this),
                render:(record)=>{
                    return record.name
                }
            },
            {
                title: 'State',
                dataIndex: 'state',
                key:'state_name',
                // filters: [
                //     { text: 'Super Admin', value: 'super admin' },
                //     { text: 'Admin', value: 'admin' },
                // ],
                ...getColumnSearchProps('state',this.state,this),
                render:(record)=>{
                    console.log("value of record",record)
                    return record.name
                }
            },
            {
                title: 'City',
                dataIndex: 'city',
                key:'city_name',
                // filters: [
                //     { text: 'Super Admin', value: 'super admin' },
                //     { text: 'Admin', value: 'admin' },
                // ],
                ...getColumnSearchProps('city',this.state,this),
                render:(record)=>{
                    console.log("value of record",record)
                    return record.name
                }
            },

            {
                title: haspermission(['property_update', 'property_delete']) ? 'Actions' : '',
                render: (checked, record, index, originNode) => (
                    <Space size="small">
                        <React.Fragment>
                            {haspermission(['property_details']) ? (
                                <Tooltip placement="topLeft" title="view">
                                    <Btn size="sm" variant="pri"  onClick={() =>

                                        this.props.history.push(
                                    {
                                        pathname:
                                        "/property/details",
                                        state: {
                                       property_id:record.id,
                                            address: record.address
                                    },
                                    }
                                        )
                                    }>
                                        <FontAwesomeIcon icon="eye"/>
                                    </Btn>
                                </Tooltip>

                            ) : ''}
                            {haspermission(['property_update']) ? (
                                <Tooltip placement="topLeft" title="view">
                                    <Btn
                                        onClick={() => this.props.history.push({
                                            pathname: '/property/create',
                                            state: {
                                                propertyid: record.id,
                                                address: record.address,
                                                state_id: record.state_id,
                                                country_id: record.country_id,
                                                city_id: record.city_id,
                                                tenant_id: record.tenant_id,
                                                owner_id: record.owner_id,
                                                org_id: this.state.user.organization_id,
                                                model: 'edit'
                                            }
                                        })}
                                        size="sm" variant="pri2">
                                        <FontAwesomeIcon icon="edit"/>
                                    </Btn>
                                </Tooltip>
                            ) : ''}
                            {haspermission(['property_delete']) ? (
                                <Tooltip placement="topLeft" title="Delete">
                                    <Btn
                                        onClick={() => this.setState({show_delete: true, property_id:record.id})}
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
                                    <h3 className="mb-0">Organization Properties Details</h3>
                                </div>

                            </Col>
                            <Col xs="6" className="text-right">
                                {haspermission(['property_create']) ? (
                                        <div className="py-2">
                                            <Btn
                                            onClick={() => this.props.history.push({
                                                pathname: '/property/create',
                                                state: {
                                                    propertyid: '',
                                                    address: '',
                                                    state_id:'',
                                                    country_id:'',
                                                    city_id:'',
                                                    tenant_id:1,
                                                    owner_id:1,
                                                    org_id:this.state.user.organization_id,
                                                    model: 'create'
                                                }
                                            })}
                                            variant="pri5Outline" size="md">
                                                Add new Property
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


                    </Card.Body>
                </Card>

                {
                    this.state.show_delete ? (
                        <DeletePopup show={this.state.show_delete} title="Are you sure you want to delete this property?"
                                     cancel={() => this.setState({show_delete: false})} delete={() =>
                            this.hanldeDelete(
                                this.state.property_id
                            )}/>
                    ) :''}

            </DashBoardPage>

        );
    }
}
