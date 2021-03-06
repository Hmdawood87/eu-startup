import React, { Component } from 'react'
import {
    Row, Col, Card
} from 'react-bootstrap';
import { Btn } from "../../globalStyle";
import haspermission from "../../routes/checkpermission";
import UserCreate from "../users/user-create";
import {toast} from "react-toastify";
import 'antd/dist/antd.css';
import {Table as AntTable, Space, Tooltip} from 'antd';
import * as organizationapi from "../../services/organization_user";
import {getColumnSearchProps} from "../../layouts/tablefilter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import DeletePopup from "../Delete-Modal/delete-popup";
import * as organizationroleapi from "../../services/organization_role"


export default class User extends Component {


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
            user_id:'',
            email: '',
            name: '',
            role_id:'',
            grade_id:'',
            loading:true,
            total: 0,
            show_delete: false,
            roles:[],
            condition_data:[]
        };
    }

    hanldeDelete = (e) => {
        organizationapi.deleteOrganizationUser(e).then((res)=>{
            if(res.success){
                toast.success(res.message,{position:toast.POSITION.TOP_RIGHT,autoClose:2000})
                this.componentDidMount()
                this.setState({show_delete: false});
            }
        })
    };

    componentDidMount() {
        this.getdata({limit: 5, page: 1,filters:{signed_user_id:this.state.user.id}})
    }

    getdata = (data = null) => {
        this.setState({
            loading:true
        });
        organizationapi.getOrganizationUsers(this.state.org_id,data).then(res => {
            if(res.success){
                console.log("values we",res);
                this.setState({org: res.users.data,loading:false,condition_data:res.users.condition_data});
            }
        });
        organizationroleapi.getOrganizationRole(this.state.org_id).then((res) => {
            if (res.success) {
                let roles=[]
                let i=0;
                for( i;i<res.roles.data.length;i++){
                    roles.push({
                       text:res.roles.data[i].name,value:res.roles.data[i].id})
                }
                this.setState({
                  roles:roles
                });
            }
        })
    }

    onChange = (pagination, filters, sorter, extra) => {
        console.log("params", filters);
        this.getdata({
            limit: pagination.pageSize,
            page: pagination.current,
            order_by: sorter.field,
            order_type: sorter.order == 'ascend' ? 'asc' : 'desc',
            filters: filters
        })

    }
    checkview=(reporting_id=null)=>{
           if(this.state.condition_data){
            console.log("on checking",this.state.condition_data)
            this.state.condition_data.map((value)=>{
                    if(value.reporting_id==reporting_id || value.id==this.state.user.id){
                        return value.name
                    } 
                })
             }else{
                return '';
             }
           
       
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
                title: haspermission(['user_update', 'user_delete']) ? 'Actions' : '',
                render: (checked, record, index, originNode) => (
                    <Space size="small">
                        <React.Fragment>
                            {haspermission(['user_update']) ? (
                                <Tooltip placement="topLeft" title="view">
                                    <Btn
                                        onClick={() => this.setState({
                                            user_id:record.id,
                                            name: record.name,
                                            email: record.email,
                                            role_id:record.role.id,
                                            grade_id:record.grade.id,
                                            show_edit: true
                                        })
                                        }
                                        size="sm" variant="pri2">
                                        <FontAwesomeIcon icon="edit"/>
                                    </Btn>
                                </Tooltip>
                            ) : ''}
                            {haspermission(['user_delete']) ? (
                                <Tooltip placement="topLeft" title="Delete">
                                    <Btn
                                        onClick={() => this.setState({show_delete: true,user_id:record.id})}
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
       if(haspermission(['user_all_view'])){
        columns.splice(columns.length-1, 0,  {
            title: 'Role',
            dataIndex: 'role',
            key: "role_id",
            filters:this.state.roles,
            // ...getColumnSearchProps('role_id',this.state,this),
            render:(record)=> record.name
        });
           columns.splice(columns.length-1, 0,  {
               title: 'Grade',
               dataIndex: 'grade',
               render:(record,index)=>{ if(index.reporting_id ==this.state.user.id){
                return record.name
                }else{
                    return null
                }} 
           });
           columns.splice(columns.length-1, 0,    {
            title: 'Salary',
            dataIndex: 'grade',

            render:(record,index)=>{ if(index.reporting_id==this.state.user.id){
                return record.salary
                }else{
                    return null
                }} 
        });
      
        columns.splice(columns.length-1, 0,    {
            title: 'Reporting Person',
            dataIndex: 'reporting_id',
            render:(record)=>{
                if(record==this.state.user.id){
                return this.state.user.name+'---'+this.state.user.role.name
                }else{
                    return null
                }
            }
        });
       }

        return (

                <Card className="commonSection">
                    <Card.Header>
                        <Row className="align-items-center">
                            <Col xs="6">
                                <div className="py-2">
                                    <h3 className="mb-0">Organization User Details</h3>
                                </div>
                            </Col>
                            <Col xs="6" className="text-right">
                                {haspermission(['user_create']) ? (
                                        <div className="py-2">
                                            <Btn  onClick={() => this.setState({show_add: true})
                                            } variant="pri5Outline" size="md">
                                                Add new User
                                            </Btn>
                                        </div>
                                    ) :
                                    ''}
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>

                        <AntTable columns={columns} dataSource={this.state.org} rowKey="id" pagination={{
                            showSizeChanger: true,
                            total: this.state.total,
                            defaultPageSize: 5,
                            pageSizeOptions: [2, 5, 7, 10, 20]
                        }}  loading={this.state.loading} onChange={this.onChange}/>

                        {this.state.show_add ?
                            (
                                <UserCreate
                                    model="create"
                                    data={{name: '', email: '',role_id:'',org_id:this.state.org_id}}
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
                                <UserCreate
                                    model="edit"
                                    data={{
                                        name: this.state.name,
                                        email: this.state.email,
                                        org_id:this.state.org_id,
                                        user_id:this.state.user_id,
                                        role_id:this.state.role_id,
                                        grade_id:this.state.grade_id
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
                        <DeletePopup show={this.state.show_delete} btn="Delete" title="Are you sure you want to delete this user?"
                                     cancel={() => this.setState({show_delete: false})} delete={() =>
                            this.hanldeDelete(
                                this.state.user_id
                            )}/>
                    ) :''}
                </Card>

        );
    }
}
