import React, {Component} from 'react';
import {BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, LineChart} from "recharts";

class SimpleBarChart extends Component {
    render() {
        return (
            <ResponsiveContainer>
                <BarChart data={this.props.data} barSize={5}>
                    {this.props.isXaxisLable ? (

                        <XAxis dataKey="name" stroke="#00000" wrapperStyle={{fontSize: "11px", fontWeight:"500"}}/>

                    ) : ''}
                    <Tooltip/>
                    <Bar dataKey="uv" fill={this.props.chartColor}/>
                </BarChart>
            </ResponsiveContainer>
        );
    }
}

export default SimpleBarChart;