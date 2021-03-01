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
import {ChartCount, ChartDate, ChartDiv, ChartTitle, ChartSection} from '../../../assets/css/chartCardStyle';
import InfoIcon from '../../../assets/img/Info-Icon.svg';
import SimpleBarChart from "../bar-chart/bar-chart";
import SimpleLineChart from "../line-chart/line-chart";
import {Btn} from "../../../globalStyle";

class ChartCard extends Component {
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
                    <OverlayTrigger
                        placement="bottom-start"
                        delay={{show: 250, hide: 400}}
                        overlay={this.renderTooltip()}>
                        <Button variant="link" className="infoBtn">
                            <img src={InfoIcon} alt="info-icon"/>
                        </Button>
                    </OverlayTrigger>
                    <ChartTitle>{this.props.title}</ChartTitle>
                    <ChartCount>{this.props.count}
                    <ChartDate variant={this.props.textColor}>Present</ChartDate>
                    </ChartCount>
                </Card.Header>
                <Card.Body>
                    <ChartSection>
                        {this.props.isBarChart?(
                            <SimpleBarChart
                                chartColor={this.props.chartColor}
                                data={this.props.chartData}
                                isXaxisLable={this.props.isXaxisLable}
                            />
                        ):'' }

                        {this.props.isLineChart?(
                            <SimpleLineChart
                                chartColor={this.props.chartColor}
                                data={this.props.chartData}
                                isXaxisLable={this.props.isXaxisLable}
                            />
                        ):'' }

                    </ChartSection>
                </Card.Body>
                <Card.Footer>
                    <Row className="align-items-center">
                        <Col xs={6}>
                            More Details
                        </Col>
                        <Col xs={6} className="text-right">
                            <Btn variant={this.props.btnColor} className="chartBtn" size="sm">
                                <FontAwesomeIcon icon="chevron-right"/>
                            </Btn>
                        </Col>
                    </Row>
                </Card.Footer>
            </ChartDiv>
        );
    }
}

export default ChartCard;
