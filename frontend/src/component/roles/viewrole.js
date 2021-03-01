import React, {Component} from "react";
import {DashBoardPage} from "../../assets/css/dashboardStyle";
import {Row, Col, Card, Form} from "react-bootstrap";
import * as organizationapi from "../../services/organization_role"
import {Btn} from "../../globalStyle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import haspermission from "../../routes/checkpermission"
import {toast} from 'react-toastify'
import {Input, Space, Tooltip} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import {AntTable} from "../../assets/css/TableStyle";
import {getColumnSearchProps} from '../../layouts/tablefilter'
import DeletePopup from "../Delete-Modal/delete-popup"

export default class viewrole extends Component {

    constructor(props) {
        super(props);
        let org_id = localStorage.getItem('_property_matters_360_user')
        org_id = JSON.parse(org_id)
        this.state = {
            org: [],
            org_id: org_id.organization_id,
            user: JSON.parse(localStorage.getItem('_property_matters_360_user')),
            loading: true,
            searchText: [],
            searchedColumn: '',
            total: 0,
            input: '',
            show_delete: false,
            selected_id:''

        };
    }

    hanldeDelete = (e) => {
        organizationapi.deleteOrganizationRole(e).then((res) => {
            if (res.success) {
                toast.success(res.message, {position: toast.POSITION.TOP_RIGHT, autoClose: 2000})
                this.setState({show_delete: false})
                this.componentDidMount()
            }
        })
    };

    componentDidMount() {
        this.getdata({limit: 5, page: 1})
    }

    getdata = (data = null) => {
        this.setState({
            loading: true,
        });
        organizationapi.getOrganizationRole(this.state.org_id, data).then((res) => {
            if (res.success) {
                this.setState({
                    org: res.roles.data,
                    loading: false,
                    total: res.roles.total,
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
                title: 'Description',
                dataIndex: 'description',
                sorter: (a, b) => a.description.length - b.description.length,
                ...getColumnSearchProps('description', this.state, this),


            },
            {
                title: haspermission(['role_update', 'role_delete']) ? 'Actions' : '',
                render: (checked, record, index, originNode) => (
                    <Space size="small">
                        <React.Fragment>
                            {haspermission(['role_update']) ? (
                                <Tooltip placement="topLeft" title="view">
                                    <Btn
                                        onClick={() =>
                                            this.props.history.push(
                                                {
                                                    pathname:
                                                        "/roles/create",
                                                    state: {
                                                        org_name:
                                                        this.state.user.organization.name,
                                                        role_id:
                                                        record.id,
                                                        role_name:
                                                        record.name,
                                                        role_description:
                                                        record.description,
                                                        permissions:
                                                        record.role_permissions,
                                                        org_id:
                                                        record.organization_id,
                                                    },
                                                }
                                            )
                                        }
                                        size="sm" variant="pri2">
                                        <FontAwesomeIcon icon="edit"/>
                                    </Btn>
                                </Tooltip>
                            ) : ''}
                            {haspermission(['role_delete']) ? (
                                <Tooltip placement="topLeft" title="Delete">
                                    <Btn
                                        onClick={() => this.setState({show_delete: true,selected_id:record.id})}
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
                                    <h3 className="mb-0">Organization Roles Details</h3>
                                </div>

                            </Col>
                            <Col xs="6" className="text-right">
                                {haspermission(['role_create']) ? (
                                        <div className="py-2">
                                            <Btn onClick={() =>
                                                this.props.history.push({
                                                    pathname: "/roles/create",
                                                    state: {
                                                        org_name:
                                                        this.state.user.organization.name,
                                                    },
                                                })
                                            } variant="pri5Outline" size="md">
                                                Add new role
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
                        }} loading={this.state.loading} onChange={this.onChange}/>
                    </Card.Body>
                </Card>
                {
                    this.state.show_delete ? (
                        <DeletePopup show={this.state.show_delete} title="Are you sure you want to delete this role."
                                     cancel={() => this.setState({show_delete: false})} delete={() =>
                            this.hanldeDelete(
                                this.state.selected_id
                            )}/>
                    ) :''}

            </DashBoardPage>
        );
    }
}
