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
import {Card, Button, Row, Col, Tooltip, OverlayTrigger} from 'react-bootstrap';
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
import LocationMedia from "../list-items/location-media";

class PropertyDetails extends Component {
    renderTooltip(props) {
        return (
            <Tooltip id="button-tooltip" className="commonTooltip" {...props}>
                {this.props.tooltipContent}
            </Tooltip>
        );
    };

    render() {
        return (
            <ChartDiv>
                <Card.Header>
                    <ChartTitle>{this.props.title}</ChartTitle>
                </Card.Header>
                <Card.Body>
                    <LocationMedia
                        isName={true}
                        isPropertyArea={true}
                        isRating={true}
                        name={this.props.name}
                        PropertyArea="Texas"
                    />
                </Card.Body>
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
                </Card.Footer>
            </ChartDiv>
        );
    }
}

export default PropertyDetails;
