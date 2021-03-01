/***********
 Props
 tooltipContent:PropTypes.string
 title:PropTypes.string
 count:PropTypes.string
 textColor:PropTypes.string
 btnColor:PropTypes.string
 chartColor:PropTypes.string
 isBarChart:PropTypes.bool
 isLineChart:PropTypes.bool
 ************/

import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Card, Button, Row, Col, Tooltip, OverlayTrigger, Dropdown, DropdownButton} from 'react-bootstrap';
import {
    ChartCount,
    ChartDate,
    ChartDiv,
    ChartTitle,
    ChartSection,
    DetailCard
} from '../../../assets/css/chartCardStyle';
import InfoIcon from '../../../assets/img/Info-Icon.svg';
import SimpleBarChart from "../bar-chart/bar-chart";
import SimpleLineChart from "../line-chart/line-chart";
import {Btn, colorPrimary2} from "../../../globalStyle";
import UserMedia from "../list-items/user-media";
import User from "../../../assets/img/Bitmap.svg";
import {SearchSection} from "../../../assets/css/searchAreaStyle";

class PropertyProfileUser extends Component {
    renderTooltip(props) {
        return (
            <Tooltip id="button-tooltip" className="commonTooltip" {...props}>
                {this.props.tooltipContent}
            </Tooltip>
        );
    };

    render() {
        return (
            <DetailCard>
                <Card.Header>
                    <ChartTitle>{this.props.title}</ChartTitle>

                            <Dropdown className="infoBtn">
                                <Dropdown.Toggle variant="link" id="dropdown-basic">
                                    <FontAwesomeIcon icon="ellipsis-v"/>
                                </Dropdown.Toggle>
                                 <Dropdown.Menu>

                                    <Dropdown.Item onClick={this.props.showmodal}>Update <FontAwesomeIcon icon="edit"/> </Dropdown.Item>
                                    {this.props.tenant_id ? (<Dropdown.Item onClick={this.props.removemodal}>Remove <span>
                                                                                <FontAwesomeIcon icon="trash"/>
                                        </span>
                                        </Dropdown.Item>
                                    ) : ''}
                                </Dropdown.Menu>
                            </Dropdown>



                </Card.Header>
                <Card.Body>
                    <UserMedia
                        iconColor={colorPrimary2}
                        avatarSize="lg"
                        avatarVariant="primary2"
                        avatarClass="mr-3"
                        avatarImg={User}
                        name={this.props.name}
                        contactNumber={this.props.contact}
                        isEmail={true}
                        email={this.props.email}
                    />
                </Card.Body>
                {this.props.tenant_id || this.props.owner_id ?(<>
                    <Card.Footer>
                        <Row className="align-items-center">
                            <Col xs={6}>
                                {this.props.details}
                            </Col>
                            <Col xs={6} className="text-right">
                                <Btn variant="priRGBA" className="chartBtn" size="sm" onClick={this.props.viewhistory}>
                                    <FontAwesomeIcon icon="chevron-right"/>
                                </Btn>
                            </Col>
                        </Row>
                    </Card.Footer></>):''}

            </DetailCard>
        );
    }
}

export default PropertyProfileUser;
