import React,{useState,useEffect} from 'react';
import {Card, Col, Form, Modal, Row} from "react-bootstrap";
import {Btn, CommonModal, InputField, TextArea} from "../../globalStyle";
import * as tenantApi from  "../../services/organization_tenants";
import * as ownerApi from  "../../services/organization_owner";
import * as propertyApi from  "../../services/organization_property";
import {getColumnSearchProps} from "../../layouts/tablefilter";
import haspermission from "../../routes/checkpermission";
import {Space, Tooltip} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {AntTable} from "../../assets/css/TableStyle";
import * as organizationApi from "../../services/organization_property";
import {Button, ProgressBar, InputGroup, FormControl} from "react-bootstrap";
const PropertyOwnerTenants = (props) => {
    const [searcheddata,setsearcheddata]=useState([])
    const [searchedvalue,setsearchvalue]=useState('')
    const [progress, setProgress]=useState(0);
    const [showdropdown,setdropdown]=useState(false)
    const [selectedid,setselectedid]=useState()
    const [selectedFile,setselectedFile]=useState()
    const user=JSON.parse(localStorage.getItem('_property_matters_360_user'))

    const search=()=>{
        console.log("calling search")
        props.modal=='owner'?
            ownerApi.getOrganizationOwner(user.organization_id,{limit: 100,
                page: 1,filters:{name:[searchedvalue]}}).then(res => {
                if(res.success){
                    setsearcheddata(res.owners.data);
                    setdropdown(true)
                    console.log("searcheddata",searcheddata)
                }
            }): tenantApi.getOrganizationTenants(user.organization_id,{filters:{name:[searchedvalue]}}).then(res => {
                if(res.success){
                    setsearcheddata(res.tenants.data)
                    setdropdown(true)
                    console.log("searcheddata",searcheddata)

                }
            })
    }
    // const submitttenentuser=(id)=>{
    //     // console.log("value of selected id",selectedid)
    //
    // }
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            // ...getColumnSearchProps('name',this.state,this),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            // ...getColumnSearchProps('email',this.state,this),
        },
        {
            title: 'Phone No',
            dataIndex: 'phone_no',
            // ...getColumnSearchProps('phone_no',this.state,this),
        },
        {
            title: 'Mobile No',
            dataIndex: 'mobile_no',
            // ...getColumnSearchProps('mobile_no',this.state,this),
        },
        {
            title: 'Actions',
            render: (checked, record, index, originNode) => (
                <Space size="small">
                    <Btn   variant="pri5RGBA" onClick={()=>setselectedid(record.id)}>
                        {props.modal=='owner'?'Add Owner':'Add Tenant'}
                    </Btn>
                </Space>
            ),
        }

    ];
   const onFileChange = event => {
        // Update the state
       setselectedFile(event.target.files[0])
        // this.setState({ set: event.target.files[0] });
    };

    // On file upload (click the upload button)
   const  onFileUpload = () => {
        // Create an object of formData
        const formData = new FormData();

        // Update the formData object


        // Details of the uploaded file
       formData.append(
           "file",
           selectedFile,
           selectedFile.name
       );
       formData.append(
           "property_id",
           props.property_id,
       );
        // Request made to the backend api
        // Send formData object
       let data={}
       if(props.modal=='owner'){

           formData.append(
               "owner_id",
               selectedid,
           );
           // data={:,property_id:props.property_id,formData:formData}
       }
       if(props.modal=='tenant'){

           formData.append(
               "tenant_id",
               selectedid,
           );
           // data={,formData:formData}
       }
       propertyApi.updateOrganizationPropertyTenantOwner(formData, (event)=>{
          setProgress(Math.round((100 * event.loaded) / event.total));
       })
       .then(res => {
           if(res.success){
               props.hide()
           }
       });
    };

    // File content to be displayed after
    // file upload is complete
   const fileData = () => {
        if (selectedFile) {

            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {selectedFile.name}</p>
                    <p>File Type: {selectedFile.type}</p>
                    <p>
                        Last Modified:{" "}
                        {selectedFile.lastModifiedDate.toDateString()}
                    </p>
                    
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Please choose your file.</h4>
                </div>
            );
        }
    };
    return (
        <>
            <CommonModal size="lg" aria-labelledby="contained-modal-title-vcenter" centered
                         show={props.show} onHide={props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title className="mx-auto">{props.modal=='owner'?'Update Owner':'Update Tenant'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedid?( <div>
                        <h3>
                            {props.modal=='owner'?'Upload ownership file':'Upload agreement file'}
                        </h3>
                        {selectedFile &&
                            <ProgressBar
                                striped
                                animated
                                variant="success"
                                now={progress}
                                label={`${progress}%`}
                            />
                        }
                        <br />
                        <div>
                            {/* <input type="file" onChange={onFileChange} /> */}
                            <Form>
                                <Form.File
                                    style={{width: "30%"}}
                                    label={selectedFile? selectedFile.name:"Choose your file"}
                                    onChange={onFileChange}
                                    custom
                                />
                            </Form>
                            <br />
                            <Button disabled={!selectedFile} onClick={onFileUpload}>
                                Upload!
                            </Button>
                        </div>
                        {fileData()}
                    </div>):(
                        <Form noValidate validated="TRUE">

                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label={props.modal=='owner'?'Enter Owner Name':'Enter Tenant Name'}
                                    aria-describedby="basic-addon2"
                                    value={searchedvalue}
                                    name={props.modal=='owner'?'owner':'tenant'}
                                    type="text"
                                    required
                                    placeholder="Super Admin"
                                    onChange={(e)=> setsearchvalue(e.target.value)}
                                />
                                <InputGroup.Append>
                                    <Btn variant="pri5" onClick={search}>
                                        <FontAwesomeIcon icon="search" />
                                    </Btn>
                                </InputGroup.Append>
                            </InputGroup>

                            {searcheddata.length>0?(<>
                                <AntTable columns={columns} dataSource={searcheddata} pagination={{
                                    showSizeChanger: true,
                                    defaultPageSize: 5,
                                    pageSizeOptions: [2, 5, 7, 10, 20]
                                }}   />
                                {/*<InputField className="select">*/}
                                {/*    <Form.Control as="select" name={props.modal=='owner'?'owner':'tenant'}onChange={(event)=>{console.log("calling on change")*/}
                                {/*        setselectedid(event.target.value)}}>*/}
                                {/*        {searcheddata.map(item => ( <option key={item.id} value={item.id} >{item.name}</option> ))}*/}
                                {/*    </Form.Control>*/}
                                {/*    <Form.Label>{props.modal=='owner'?'Select Owner Name':'Select Tenant Name'}</Form.Label>*/}
                                {/*    <Form.Control.Feedback type="invalid">{props.modal=='owner'?'Select Owner Name':'Select Tenant Name'}</Form.Control.Feedback>*/}

                                {/*</InputField>*/}
                                {/*<Btn   variant="pri5RGBA" onClick={submitt}>*/}
                                {/*    {props.modal=='owner'?'Update Owner':'Update Tenant'}*/}
                                {/*</Btn>*/}
                            </>):(<>
                                <Btn  variant="pri5Outline" size="md">
                                    {props.modal=='owner'?'Add new Owner':'Add new Tenant'}
                                </Btn>
                            </>)}


                        </Form>
                    )}
                </Modal.Body>
            </CommonModal>
        </>
    );
};

export default PropertyOwnerTenants;
