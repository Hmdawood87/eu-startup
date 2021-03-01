/***********
  Props
  cardStyle:PropTypes.string
  title:PropTypes.string
  count:PropTypes.string
 ************/

import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import {ChartCount, ChartDiv, ChartTitle, ChartSection} from '../../../assets/css/chartCardStyle';
import SimpleBarChart from "../bar-chart/bar-chart";
import SimpleLineChart from "../line-chart/line-chart";

class ChartCardSmall extends Component {
    render() {
        return (
            <ChartDiv size="sm" variant={this.props.cardStyle}>
                <Card.Header>
                    <ChartTitle>{this.props.title}</ChartTitle>
                    <ChartCount>{this.props.count}</ChartCount>
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
            </ChartDiv>
        );
    }
}

export default ChartCardSmall;
