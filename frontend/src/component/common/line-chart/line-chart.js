import React, {Component} from 'react';
import {LineChart, Line, XAxis, Tooltip, ResponsiveContainer} from "recharts";


class SimpleLineChart extends Component {
    render() {
        return (
            <ResponsiveContainer>
                <LineChart data={this.props.data} margin={{top: 10, right: 30, left: 20, bottom: 5}}>
                    {this.props.isXaxisLable ? (

                        <XAxis dataKey="name" stroke="#00000" wrapperStyle={{fontSize: "11px", fontWeight: "500"}}/>

                    ) : ''}
                    <Tooltip/>
                    <Line strokeWidth="4" dataKey="uv"
                          dot={{strokeWidth: 2, r: 5}}
                          activeDot={{fill: '#fff', stroke: this.props.chartColor, strokeWidth: 1, r: 8}}
                          stroke={this.props.chartColor}/>
                </LineChart>
            </ResponsiveContainer>
        );
    }

    4
}

export default SimpleLineChart;