import React, { Component } from 'react'
import {Card, Form, Row, Col, Button} from 'react-bootstrap';
import { Btn, InputField } from "../../globalStyle";
import * as propertyApi from  "../../services/organization_property";
import {toast} from "react-toastify";
import { DashBoardPage } from '../../assets/css/dashboardStyle';
import GoogleMapReact from 'google-map-react';
import * as organizationApi from "../../services/organization_property";


export class PropertyCreate extends Component {

    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };

    constructor(props) {
        super(props)
    
        this.state = {
            countries: [],
            states: [],
            cities: [],
            maps: null,
            model: this.props.location.state.model,
            org_id: this.props.location.state.org_id,
            user: JSON.parse(localStorage.getItem('_property_matters_360_user')),
            propertyid:this.props.location.state.propertyid,
            address: this.props.location.state.address,
            state_id: this.props.location.state.state_id,
            city_id: this.props.location.state.city_id,
            setValidated: false,
            country_id:this.props.location.state.country_id,
            tenant_id: this.props.location.state.tenant_id,
            owner_id: this.props.location.state.owner_id,
            loading:true,
            total: 0,
            selectedFile: []
        }
    }
    
    

    componentDidMount(){

        

        propertyApi.getCountries().then(res => this.setState({countries: res.data}));

        if(this.state.model === 'edit'){
            propertyApi.getStatesByCountry(this.state.country_id).then(res=> this.setState({states: res.data}));
            propertyApi.getCitiesByStates(this.state.state_id).then(res=> this.setState({cities: res.data}));
        }

        
    }
    onFileChange = event => {
        // Update the state
        this.setState({ selectedFile: event.target.files });
    };

    // On file upload (click the upload button)
    onFileUpload = () => {
        // Create an object of formData
        let formData = new FormData();

        // Update the formData object
        for(let i=0;i<this.state.selectedFile.length;i++){
            formData.append(
                "file[]",
                this.state.selectedFile[i],

            );
        }
        formData.append(
            "property_id",
            this.state.propertyid,

        );

        organizationApi.uploadPropertyFile(formData)
            .then(res=>{
                if(res.success){
                    toast.success(res.message,{position:toast.POSITION.TOP_RIGHT,autoClose:2000})
                    this.props.history.push('/property');
                }
            });
    };

    // File content to be displayed after
    // file upload is complete


    handleChange = e => {
        // console.log("value on change ", e.target);
        this.setState({
            [e.target.name]: e.target.value
        }); 

        switch (e.target.name) {
            case "country_id":
                propertyApi.getStatesByCountry(e.target.value).then(res=> {
                    if(res.success){
                        this.setState({
                            states: res.data,
                            state_id: res.data.length? res.data[0].id : '',
                            cities: [],
                            city_id: ''   
                        });
                    }
                });    
            break;

            case "state_id":
                propertyApi.getCitiesByStates(e.target.value).then(res=> {
                    if(res.success){
                        this.setState({
                            cities: res.data,
                            city_id: res.data.length? res.data[0].id : ''
                        });
                    }
                });
            break;
        
            default:
                break;
        }

        // const form = e.currentTarget;
        // if (form.checkValidity()==true){
        //     this.setState({
        //         setValidated:true
        //     });
        // }
    };

    handlesubmitt=(e)=>{
        e.preventDefault();
        const form = e.currentTarget;

        let geocoder = new this.state.maps.Geocoder();
        geocoder.geocode({'address': this.state.address }, function(res, status){
            if(status == 'OK'){
                if(res.length){
                    console.log(`lon: ${res[0].geometry.location.lng()}, lat: ${res[0].geometry.location.lat()}`);
                } else {
                    console.log("No such address found.");
                }
            }
        });

        if (!form.checkValidity()) {
            e.preventDefault();
            this.setState({setValidated: true});
            // e.stopPropagation();
        }
        this.state.model=='edit'
            ? propertyApi.updateOrganizationProperty(this.state.propertyid, {
                address: this.state.address, 
                state_id: this.state.state_id, 
                country_id: this.state.country_id, 
                city_id: this.state.city_id, 
                organization_id:this.state.org_id
            }).then((res) => {
                if (res.success) {
                    toast.success(res.message,{position:toast.POSITION.TOP_RIGHT,autoClose:2000})
                    this.props.history.push('/property');
                }
            })
            :
            propertyApi.createOrganizationProperty({
                address: this.state.address, 
                state_id: this.state.state_id, 
                country_id: this.state.country_id, 
                city_id: this.state.city_id, 
                organization_id:this.state.org_id
            }).then((res) => {
                if (res.success) {
                    this.setState({propertyid:res.data.id})
                    this.onFileUpload()
                    //
                }
            })


    }

    render() {

        const handleApiLoaded = (maps) => {
            if(maps){
                this.setState({maps: maps})
            }
        };

        return (
            <DashBoardPage>
                <GoogleMapReact
                    bootstrapURLKeys={{key: "AIzaSyAxtmIltLR5dcvVfY0aCTcHtnwQAFqJtTg"}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    onGoogleApiLoaded={({map, maps}) => handleApiLoaded(maps)}                     
                    yesIWantToUseGoogleMapApiInternals>
                </GoogleMapReact>
                <Card className="commonSection mb-3">
                    <Card.Header>
                        <Row className="align-items-center">
                            <Col size="12">
                                <div className="py-2">
                                    <h3 className="mb-0 text-capitalize">
                                    {this.state.model === 'edit'? (
                                        'Update property details'
                                    ):(
                                        'Create property details'
                                    )}</h3>
                                </div>
                            </Col>
                        </Row>
                    </Card.Header>

                    <Card.Body>
                        <div>
                            <h3>
                               Upload Property images
                            </h3>
                            <div>
                                <input type="file" onChange={this.onFileChange} multiple/>
                                {/*<Button onClick={this.onFileUpload}>*/}
                                {/*    Upload!*/}
                                {/*</Button>*/}
                            </div>

                        </div>
                        <Form noValidate validated={this.state.setValidated} onSubmit={this.handlesubmitt}>
                            <Row><Col xs="6">
                                <InputField>
                                    <Form.Control
                                        value={this.state.address}
                                        name="address"
                                        type="text"
                                        required
                                        placeholder="Address"
                                        onChange={this.handleChange}
                                    />
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control.Feedback type="invalid">address missing</Form.Control.Feedback>
                                </InputField>
                            </Col>
                                <Col xs="6">
                                    {this.state.address && this.state.countries &&
                                    <InputField className="select">
                                        <Form.Control as="select" name="country_id"
                                                      value={this.state.country_id}
                                                      onChange={this.handleChange}
                                        >
                                            {this.state.countries.map(country => ( <option key={country.id} value={country.id}>{country.name}</option> ))}
                                        </Form.Control>
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control.Feedback type="invalid">country missing</Form.Control.Feedback>
                                    </InputField>
                                    }
                            </Col></Row>
                            <Row><Col xs="6">
                                {this.state.states.length > 0 &&
                                <InputField>
                                    <Form.Control as="select" name="state_id"
                                                  value={this.state.state_id}
                                                  onChange={this.handleChange}
                                    >
                                        {this.state.states.map(state => ( <option key={state.id} value={state.id}>{state.name}</option> ))}
                                    </Form.Control>
                                    <Form.Label>State</Form.Label>
                                    <Form.Control.Feedback type="invalid">state missing</Form.Control.Feedback>
                                </InputField>
                                }
                            </Col>
                                <Col xs="6">



                            {this.state.cities.length > 0 &&
                                <InputField>
                                    <Form.Control as="select" name="city_id"
                                    value={this.state.city_id}
                                    onChange={this.handleChange}
                                    >
                                        {this.state.cities.map(city => ( <option key={city.id} value={city.id}>{city.name}</option> ))}
                                    </Form.Control>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control.Feedback type="invalid">city missing</Form.Control.Feedback>
                                </InputField>
                            }
                                </Col></Row>
{/* 
                            {this.state.city_id? (
                                <Btn type="submit" size="sm" variant="pri5" rounded="true" block> 
                                    {this.state.model=='edit'?'Update':'Save'} 
                                </Btn>
                            ):(
                                <Btn type="submit" size="sm" variant="pri5" rounded="true" block disabled> 
                                    {this.state.model=='edit'?'Update':'Save'} 
                                </Btn>
                            )} */}

                                <Btn type="submit" size="sm" variant="pri5" rounded="true" block 
                                disabled={this.state.city_id === ''}> 
                                    {this.state.model=='edit'?'Update':'Save'} 
                                </Btn>

                        </Form>
                    </Card.Body>
                </Card>
            
            
            </DashBoardPage>        
        )

    }
}

export default PropertyCreate;
