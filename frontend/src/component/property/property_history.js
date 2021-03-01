import React, { Component } from 'react'
import {Table, Modal, Button, Form, Card, Row, Col} from 'react-bootstrap';
import { Btn, InputField, CommonModal } from "../../globalStyle";
import haspermission from '../../routes/checkpermission';
import * as propertyApi from  "../../services/organization_property";
import {toast} from "react-toastify";
import {Table as AntTable, Tag, Space, Tooltip} from "antd";
import {getColumnSearchProps} from "../../layouts/tablefilter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {DashBoardPage} from "../../assets/css/dashboardStyle";
import Moment from 'react-moment';
export default class Property extends Component {


    constructor(props) {
        super(props);
        this.state = {
            org: [],
            user: JSON.parse(localStorage.getItem('_property_matters_360_user')),
            loading:true,
            total: 0,
        };
    }


    componentDidMount() {
        this.getdata({limit: 5, page: 1})
    }

    getdata = (data = null) => {
        this.setState({
            loading:true
        });
        console.log("props in history",this.props)
        propertyApi.getOrganizationPropertyHistory(this.props.location.state.id,this.props.location.state.key,data).then(res => {
            if(res.success){
                this.setState({org: res.data,loading:false});
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
                title: 'Tenant Name',
                dataIndex: 'tenant',
                sorter:true,
                render:(record)=>{
                    return record.name
                }
            },
            {
                title: 'Owner Name',
                dataIndex: 'owner',
                sorter:true,
                render:(record)=>{
                    return record.name
                }
            },
            {
                title: 'Created At',
                dataIndex: 'created_at',
                render:(record)=>{
                    return (<Moment>{record}</Moment>)
                }
            },
            {
                title: 'Updated At',
                dataIndex: 'updated_at',
                render:(record)=>{
                    return (<Moment>{record}</Moment>)
                }
            }

            ];
        const column = [
            {
                title: 'Property Address',
                dataIndex: 'property',
                sorter:true,
                render:(record)=>{
                    return record.address
                }
            },
            {
                title:this.props.location.state.key=='owner'?'Tenant Name':'Owner Name' ,
                dataIndex: this.props.location.state.key=='owner'?'tenant':'owner',
                sorter:true,
                render:(record)=>{
                    return record.name
                }
            },
            {
                title: 'Created At',
                dataIndex: 'created_at',
                render:(record)=>{
                    return (<Moment>{record}</Moment>)
                }
            },
            {
                title: 'Updated At',
                dataIndex: 'updated_at',
                render:(record)=>{
                    return (<Moment>{record}</Moment>)
                }
            }

        ];
        return (
            <DashBoardPage>
                <Card className="commonSection">

                    <Card.Header>
                        <Row className="align-items-center">
                            <Col xs="6">
                                <div className="py-2">
                                    <h3 className="mb-0">Organization Property History</h3>
                                </div>

                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>

                        <AntTable columns={this.props.location.state.key=='property'?columns:column} dataSource={this.state.org} pagination={{
                            showSizeChanger: true,
                            total: this.state.total,
                            defaultPageSize: 5,
                            pageSizeOptions: [2, 5, 7, 10, 20]
                        }}  loading={this.state.loading} onChange={this.onChange}title={() => (<h4>{this.props.location.state.header}</h4>)}/>


                    </Card.Body>
                </Card>


            </DashBoardPage>

        );
    }
}