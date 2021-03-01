import React, {Component} from 'react';
import {Modal} from "react-bootstrap";
import GoogleMapReact from 'google-map-react';
import Avatar from "../avatar/Avatar";
import User from "../../../assets/img/Bitmap.svg";
import {CommonModal, LocationBody, LocationMap, LocationProfileCard} from "../../../globalStyle";


class LocationModal extends React.Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            <CommonModal type="location" size="xl" aria-labelledby="contained-modal-title-vcenter"
                   centered
                   show={this.props.show} onHide={this.props.hide}>
                <Modal.Header closeButton/>
                <Modal.Body>
                    <LocationBody>
                        <LocationProfileCard>
                            <Avatar
                                size="xl"
                                cssClass="mb-3"
                                avatarImg={User}
                            />
                            <h4 className="border-bottom pb-3 mb-3">Strong Pines</h4>
                            <p className="border-bottom pb-3 mb-3">Property No, Unit No, Canada</p>
                            <p className="mb-0">700-800-9000</p>
                        </LocationProfileCard>
                        <LocationMap>
                            <GoogleMapReact
                                bootstrapURLKeys={{key: "AIzaSyAxtmIltLR5dcvVfY0aCTcHtnwQAFqJtTg"}}
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}
                                onGoogleApiLoaded={({map, maps}) => console.log(map, maps)} 
                                yesIWantToUseGoogleMapApiInternals>
                            </GoogleMapReact>
                        </LocationMap>
                    </LocationBody>
                </Modal.Body>
            </CommonModal>
        )
    }
}

export default LocationModal


