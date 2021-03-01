/***********
 Props
 mediaStyle:PropTypes.string
 isName:PropTypes.bool
 name:PropTypes.string
 isPropertyName:PropTypes.bool
 PropertyName:PropTypes.string
 isPropertyArea:PropTypes.bool
 PropertyArea:PropTypes.string
 isPropertyNo:PropTypes.bool
 PropertyNo:PropTypes.string
 isUnitNo:PropTypes.bool
 UnitNo:PropTypes.string
 isRating:PropTypes.bool
 ratingStyle:PropTypes.string
 rating:PropTypes.string
 isOnlyLocation:PropTypes.bool
 isAddress:PropTypes.bool
 Address:PropTypes.string
 ************/

import React, {Component} from 'react';
import {Media, Button} from "react-bootstrap";
import LocationIcon from "../../../assets/img/Location-Icon.svg";
import StarRating from "../star-rating/star-rating";
import LocationModal from "../location-modal/location-modal";
import {InfoHeading, InfoItem, InfoText, LocationAvatar} from "../../../assets/css/mediaStyle";
import {colorPrimary11, Img} from "../../../globalStyle";


class LocationMedia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLocationModal: false,
        };

    }

    render() {
        return (
            <React.Fragment>
                <InfoItem type="location">
                    {this.props.isOnlyLocation ? (
                        <div className="text-center">
                            <Button onClick={() => this.setState({showLocationModal: true})} variant="link">
                                <LocationAvatar>
                                    <Img src={LocationIcon} alt="location-icon"
                                    />
                                </LocationAvatar>
                            </Button>
                        </div>
                    ) : (
                        <React.Fragment>
                            <Button onClick={() => this.setState({showLocationModal: true})} variant="link">
                                <LocationAvatar>
                                    <Img src={LocationIcon} alt="location-icon"
                                    />
                                </LocationAvatar>
                            </Button>
                            <Media.Body>
                                {this.props.isName ? (
                                        <InfoHeading>{this.props.name}</InfoHeading>) :
                                    ''
                                }
                                {this.props.isPropertyName ? (
                                        <InfoHeading><span className="mr-1">Property
                                            name:</span>{this.props.PropertyName}</InfoHeading>) :
                                    ''
                                }
                                {this.props.isPropertyArea ? (
                                        <InfoText><span className="mr-1">Property
                                            Area:</span>{this.props.PropertyArea}
                                        </InfoText>) :
                                    ''
                                }
                                {this.props.isPropertyNo ? (
                                        <InfoText><span className="mr-1">Property
                                            No:</span>{this.props.PropertyNo}
                                        </InfoText>) :
                                    ''
                                }
                                {this.props.isUnitNo ? (
                                        <InfoText><span className="mr-1">Unit No:</span>{this.props.UnitNo}
                                        </InfoText>) :
                                    ''
                                }
                                {this.props.isAddress ? (
                                        <InfoText>{this.props.Address}
                                        </InfoText>) :
                                    ''
                                }
                                {this.props.isRating ? (
                                        <StarRating
                                            ratingVariant="pri11"
                                            rating="3.0"
                                            activeColor={colorPrimary11}
                                        />
                                    ) :
                                    ''
                                }
                            </Media.Body>
                        </React.Fragment>
                    )
                    }
                </InfoItem>
                <LocationModal
                    show={this.state.showLocationModal}
                    hide={() => this.setState({showLocationModal: false})}
                />
            </React.Fragment>
        );
    }
}

export default LocationMedia;
