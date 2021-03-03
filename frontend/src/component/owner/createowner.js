import React,{useState,useEffect} from 'react';
import {Card, Col, Form, Modal, Row} from "react-bootstrap";
import {Btn, CommonModal, InputField, TextArea} from "../../globalStyle";

import * as propertyApi from  "../../services/organization_owner";
import {getColumnSearchProps} from "../../layouts/tablefilter";
import haspermission from "../../routes/checkpermission";
import {Space, Tooltip} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {AntTable} from "../../assets/css/TableStyle";
import * as organizationApi from "../../services/organization_property";
import {Button, ProgressBar, InputGroup, FormControl} from "react-bootstrap";
const PropertyOwnerTenants = (props) => {
    // const [searcheddata,setsearcheddata]=useState([])
    // const [searchedvalue,setsearchvalue]=useState('')
    const [progress, setProgress]=useState(0);
    const [note,setnote]=useState()
    const [selectedid,setselectedid]=useState()
    const [selectedFile,setselectedFile]=useState()
    const [user,setuser]=useState(JSON.parse(localStorage.getItem('_property_matters_360_user')))
    

    // const search=()=>{
    //     console.log("calling search")
    //     props.modal=='owner'?
    //         ownerApi.getOrganizationOwner(user.organization_id,{limit: 100,
    //             page: 1,filters:{name:[searchedvalue]}}).then(res => {
    //             if(res.success){
    //                 setsearcheddata(res.owners.data);
    //                 setdropdown(true)
    //                 console.log("searcheddata",searcheddata)
    //             }
    //         }): tenantApi.getOrganizationTenants(user.organization_id,{filters:{name:[searchedvalue]}}).then(res => {
    //             if(res.success){
    //                 setsearcheddata(res.tenants.data)
    //                 setdropdown(true)
    //                 console.log("searcheddata",searcheddata)

    //             }
    //         })
    // }
    // const submitttenentuser=(id)=>{
    //     // console.log("value of selected id",selectedid)
    //
    // }
    // const columns = [
    //     {
    //         title: 'Name',
    //         dataIndex: 'name',
    //         // ...getColumnSearchProps('name',this.state,this),
    //     },
    //     {
    //         title: 'Email',
    //         dataIndex: 'email',
    //         // ...getColumnSearchProps('email',this.state,this),
    //     },
    //     {
    //         title: 'Phone No',
    //         dataIndex: 'phone_no',
    //         // ...getColumnSearchProps('phone_no',this.state,this),
    //     },
    //     {
    //         title: 'Mobile No',
    //         dataIndex: 'mobile_no',
    //         // ...getColumnSearchProps('mobile_no',this.state,this),
    //     },
    //     {
    //         title: 'Actions',
    //         render: (checked, record, index, originNode) => (
    //             <Space size="small">
    //                 <Btn   variant="pri5RGBA" onClick={()=>setselectedid(record.id)}>
    //                     {props.modal=='owner'?'Add Owner':'Add Tenant'}
    //                 </Btn>
    //             </Space>
    //         ),
    //     }

    // ];
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
           "submitted_id",
           user.id,
       );
       formData.append(
        "note",
        note,
    );
        // Request made to the backend api
        // Send formData object
    //    let data={}
    //    if(props.modal=='owner'){

    //        formData.append(
    //            "owner_id",
    //            selectedid,
    //        );
    //        // data={:,property_id:props.property_id,formData:formData}
    //    }
    //    if(props.modal=='tenant'){

    //        formData.append(
    //            "tenant_id",
    //            selectedid,
    //        );
    //        // data={,formData:formData}
    //    }
       propertyApi.createOrganizationOwner(formData, (event)=>{
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
                    <Modal.Title className="mx-auto">Upload file</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <div>
                        <h3>
                           Upload file
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
                                <br></br>
                                  <TextArea style={{marginTop: "2em"}}>
                                            <Form.Control
                                                value={note}
                                                name="note"
                                                as="textarea"
                                                placeholder="Some details"
                                                onChange={event =>
                                                  setnote(event.target.value)
                                                }
                                            />
                                            <Form.Label>
                                                Enter  Details
                                            </Form.Label>
                                        </TextArea>
                            </Form>
                            <br />
                            <Button disabled={!selectedFile} onClick={onFileUpload}>
                                Upload!
                            </Button>
                        </div>
                      
                    </div>
                </Modal.Body>
            </CommonModal>
        </>
    );
};

export default PropertyOwnerTenants;
