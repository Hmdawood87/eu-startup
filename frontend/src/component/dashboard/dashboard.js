import React, {Component} from 'react';
import {Col, Form, ButtonGroup} from 'react-bootstrap';

import ChartCard from "../common/chart-card/chart-card";
import LeftIcon from '../../assets/img/Left.svg';
import RightIcon from '../../assets/img/Right.svg';
import PauseIcon from '../../assets/img/Pause.svg';
import TenantsMoveIn from "./partial/tenants-move-in";
import TenantsMoveOut from "./partial/tenants-move-out";
import ContractsRenewing from "./partial/contracts-renewing";
import ContractsEnded from "./partial/contracts-ended";
import VendorRequests from "./partial/vendor-requests";
import ActivityLog from "./partial/activity-log";
import TenantsList from "./partial/list-of-tenants";
import VendorsList from "./partial/list-of-vendors";
import {
    Btn,
    colorPrimary,
    colorPrimary2,
    colorPrimary3,
    colorPrimary4,
    colorPrimary5, colorPrimary6, colorPrimary7,
    colorPrimary8
} from "../../globalStyle";
import {
    DashBoardPage,
    DashboardSlider,
    SideLeft,
    SideRight,
    SlideToolBar,
    TopCards
} from "../../assets/css/dashboardStyle";

const data = [
    {name: 'Aug', uv: 3500, amt: 2300},
    {name: 'Sep', uv: 3000, amt: 2210},
    {name: 'Oct', uv: 2000, amt: 2290},
    {name: 'Nov', uv: 2780, amt: 2000},
    {name: 'Dec', uv: 1890, amt: 2181},
    {name: 'Jan', uv: 2390, amt: 2500},
];


class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            showOption: 'move-in',
            token: localStorage.getItem('_property_matters_360_token')
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);


    }

    handleOptionChange(event) {
        this.setState({showOption: event.target.value});
    }

    render() {
        return (
            <DashBoardPage>
                        <TopCards>
                            <div className="mb-3">
                                <ChartCard
                                    title="Total Tenants"
                                    count="29632"
                                    textColor="pri"
                                    btnColor="priRGBA"
                                    isBarChart={true}
                                    isXaxisLable={true}
                                    chartData={data}
                                    chartColor={colorPrimary}
                                    tooltipContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                />
                            </div>
                            <div className="mb-3">
                                <ChartCard
                                    title="Total Properties"
                                    count="23123"
                                    textColor="pri2"
                                    btnColor="pri2RGBA"
                                    isLineChart={true}
                                    isXaxisLable={true}
                                    chartData={data}
                                    chartColor={colorPrimary2}
                                    tooltipContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                />
                            </div>
                            <div className="mb-3">
                                <ChartCard
                                    title="Profit"
                                    count="$27632"
                                    textColor="pri3"
                                    btnColor="pri3RGBA"
                                    isBarChart={true}
                                    isXaxisLable={true}
                                    chartData={data}
                                    chartColor={colorPrimary3}
                                    tooltipContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                />
                            </div>
                            <div className="mb-3">
                                <ChartCard
                                    title="Expenses"
                                    count="$45645"
                                    textColor="pri4"
                                    btnColor="pri4RGBA"
                                    isLineChart={true}
                                    isXaxisLable={true}
                                    chartData={data}
                                    chartColor={colorPrimary4}
                                    tooltipContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                />
                            </div>
                            <div className="mb-3">
                                <ChartCard
                                    title="Top Property of the month"
                                    count="$7625"
                                    textColor="pri5"
                                    btnColor="pri5RGBA"
                                    isBarChart={true}
                                    isXaxisLable={true}
                                    chartData={data}
                                    chartColor={colorPrimary5}
                                    tooltipContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                />
                            </div>
                            {/*Start for small desktop view */}
                            <div className="mb-3 xls-card">
                                <ChartCard
                                    title="Least Property of the Month"
                                    count="$45645"
                                    textColor="pri6"
                                    btnColor="pri6RGBA"
                                    isLineChart={true}
                                    isXaxisLable={true}
                                    chartData={data}
                                    chartColor={colorPrimary6}
                                    tooltipContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                />
                            </div>
                            <div className="mb-3 xls-card">
                                <ChartCard
                                    title="Total Properties Vacant"
                                    count="$45645"
                                    textColor="pri7"
                                    btnColor="pri7RGBA"
                                    isBarChart={true}
                                    isXaxisLable={true}
                                    chartData={data}
                                    chartColor={colorPrimary7}
                                    tooltipContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                />
                            </div>
                            <div className="mb-3 xls-card">
                                <ChartCard
                                    title="Total Properties Occupied"
                                    count="$45645"
                                    textColor="pri8"
                                    btnColor="pri8RGBA"
                                    isLineChart={true}
                                    isXaxisLable={true}
                                    chartData={data}
                                    chartColor={colorPrimary8}
                                    tooltipContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                />
                            </div>
                            {/*end for small desktop view */}
                        </TopCards>
                        <DashboardSlider>
                            <SideLeft>
                                <SlideToolBar>
                                    <Form.Row className="align-items-center">
                                        <Col sm="8">
                                            <Form.Control className="SelectField" as="select"
                                                        value={this.state.showOption}
                                                        onChange={this.handleOptionChange}>
                                                <option value="move-in">New Tenants Move In</option>
                                                <option value="move-out">Tenants Moving Out</option>
                                                <option value="renewing">Contracts Renewing</option>
                                                <option value="ended">Contracts Ended Recently</option>
                                                <option value="requests">Vendor Requests</option>
                                                <option value="log">Activity Log</option>
                                                <option value="tenants">List of Tenants</option>
                                                <option value="vendors">List of Vendors</option>
                                            </Form.Control>
                                        </Col>
                                        <Col sm="4" className="text-right">
                                            <ButtonGroup>
                                                <Btn fill="none" size="sm">
                                                    Left
                                                    <img className="ml-2" width="20" src={LeftIcon} alt="left-icon"/>
                                                </Btn>
                                                <Btn fill="none" size="sm">pause
                                                    <img className="ml-2" width="13" src={PauseIcon} alt="pause-icon"/>
                                                </Btn>
                                                <Btn fill="none" size="sm">Right
                                                    <img className="ml-2" width="20" src={RightIcon} alt="right-icon"/>
                                                </Btn>
                                            </ButtonGroup>
                                        </Col>
                                    </Form.Row>
                                </SlideToolBar>


                                {/*Start New Tenants Move In*/}
                                {this.state.showOption === "move-in" ? (
                                    <TenantsMoveIn/>
                                ) : ''}


                                {/*End New Tenants Move In*/}

                                {/*Start Tenants Moving Out*/}
                                {this.state.showOption === "move-out" ? (
                                    <TenantsMoveOut/>
                                ) : ''}

                                {/*EndTenants Moving Out*/}

                                {/*Start Contracts Renewing*/}
                                {this.state.showOption === "renewing" ? (
                                    <ContractsRenewing/>
                                ) : ''}

                                {/*End Contracts Renewing*/}

                                {/*Start Contracts Ended Recently*/}

                                {this.state.showOption === "ended" ? (
                                    <ContractsEnded/>
                                ) : ''}

                                {/*End Contracts Ended Recently*/}


                                {/*Start Vendor Requests*/}

                                {this.state.showOption === "requests" ? (
                                    <VendorRequests/>
                                ) : ''}

                                {/*End Vendor Requests*/}


                                {/*Start Activity Log*/}

                                {this.state.showOption === "log" ? (
                                    <ActivityLog/>
                                ) : ''}

                                {/*End Activity Log*/}


                                {/*Start Tenants List*/}

                                {this.state.showOption === "tenants" ? (
                                    <TenantsList/>
                                ) : ''}

                                {/*End Tenants List*/}

                                {/*Start Vendors List*/}

                                {this.state.showOption === "vendors" ? (
                                    <VendorsList/>
                                ) : ''}

                                {/*End Vendors List*/}


                            </SideLeft>
                            {/*start for  desktop view*/}
                            <SideRight>
                                <div className="mb-3">
                                    <ChartCard
                                        title="Least Property of the Month"
                                        count="$45645"
                                        textColor="pri6"
                                        btnColor="pri6RGBA"
                                        isLineChart={true}
                                        isXaxisLable={true}
                                        chartData={data}
                                        chartColor={colorPrimary6}
                                        tooltipContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                    />
                                </div>
                                <div className="mb-3">
                                    <ChartCard
                                        title="Total Properties Vacant"
                                        count="$45645"
                                        textColor="pri7"
                                        btnColor="pri7RGBA"
                                        isBarChart={true}
                                        isXaxisLable={true}
                                        chartData={data}
                                        chartColor={colorPrimary7}
                                        tooltipContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                    />
                                </div>
                                <div className="mb-3">
                                    <ChartCard
                                        title="Total Properties Occupied"
                                        count="$45645"
                                        textColor="pri8"
                                        btnColor="pri8RGBA"
                                        isLineChart={true}
                                        isXaxisLable={true}
                                        chartData={data}
                                        chartColor={colorPrimary8}
                                        tooltipContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                    />
                                </div>
                            </SideRight>
                            {/*End for desktop view*/}
                        </DashboardSlider>
            </DashBoardPage>
        );
    }
}


export default Dashboard;
