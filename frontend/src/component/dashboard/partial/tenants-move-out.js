import React, {Component} from 'react';
import {Row, Col, Dropdown, Form, Button} from "react-bootstrap";
import ChartCardSmall from "../../common/chart-card/chart-card.-small";
import UserMedia from "../../common/list-items/user-media";
import User from "../../../assets/img/Bitmap.svg";
import LocationMedia from "../../common/list-items/location-media";
import SearchArea from "../common/search-area";
import ContractMedia from "../../common/list-items/contract-media";
import ContractIconBlack from "../../../assets/img/Contract-Icon-black.svg";
import ChatIcon from "../../common/icons/chat-icon";
import ContractIcon from "../../common/icons/contract-icon";
import {Btn, colorPrimary, colorPrimary2} from "../../../globalStyle";
import {ActionBtns, ContentListing, SlideCards, SlideContent} from "../../../assets/css/dashboardStyle";

const data = [
    {name: '1', uv: 300, amt: 200},
    {name: '2', uv: 200, amt: 34},
    {name: '3', uv: 150, amt: 79},
    {name: '4', uv: 78, amt: 22.5},
    {name: '5', uv: 100, amt: 0},
    {name: '6', uv: 50, amt: 0},
];

const repeater = [1, 2, 3, 4]

class TenantsMoveOut extends Component {
    render() {
        return (
            <SlideContent>
                <Row className="align-items-center justify-content-center">
                    <Col xl="6">
                        <SlideCards className="list-inline">
                            <li className="list-inline-item">
                                <ChartCardSmall
                                    cardStyle="pri"
                                    title="Monthly"
                                    count="3,250"
                                    chartData={data}
                                    isLineChart={true}
                                    chartColor={colorPrimary}
                                />
                            </li>
                            <li className="list-inline-item">
                                <ChartCardSmall
                                    cardStyle="pri"
                                    title="Annually"
                                    count="1,240"
                                    chartData={data}
                                    isBarChart={true}
                                    chartColor={colorPrimary}
                                />
                            </li>
                            <li className="list-inline-item">
                                <ChartCardSmall
                                    cardStyle="pri"
                                    title="Monthly"
                                    count="3,250"
                                    chartData={data}
                                    isLineChart={true}
                                    chartColor={colorPrimary}
                                />
                            </li>
                            <li className="list-inline-item">
                                <ChartCardSmall
                                    cardStyle="pri"
                                    title="Annually"
                                    count="1,240"
                                    chartData={data}
                                    isBarChart={true}
                                    chartColor={colorPrimary}
                                />
                            </li>
                        </SlideCards>
                    </Col>
                    <Col xl="6">
                        <SearchArea
                            title="Tenants Moving Out"
                            inputStyle="primary"
                        />
                    </Col>
                </Row>

                <ContentListing className="pt-2">
                    {
                        repeater.map((value, index) => {
                            return (
                                <Form.Row className="align-items-center justify-content-center mb-2 border-bottom">
                                    <Col xl="5" className="mb-2">
                                        <div className="mr-xl-5 border-right">
                                            <UserMedia
                                                mediaStyle="primary-1"
                                                avatarSize="lg"
                                                avatarVariant="primary"
                                                avatarClass="mr-3"
                                                avatarImg={User}
                                                name="Jonathan B."
                                                contactNumber="+1 234-567-8905"
                                                isCheckin={true}
                                                checkIn="2020-05-11:10:00:00 AM"
                                                iconColor="#f1b674"
                                            />
                                        </div>
                                    </Col>
                                    <Col xl="4" className="mb-2">
                                        <div className="mr-xl-5 border-right">
                                            <LocationMedia
                                                isName={true}
                                                isPropertyNo={true}
                                                isUnitNo={true}
                                                name="Zone (Texas)"
                                                PropertyNo="978997"
                                                UnitNo="244"
                                            />
                                        </div>
                                    </Col>
                                    <Col xl="3" className="text-center mb-2">
                                        <ActionBtns className="list-inline">
                                            <li className="list-inline-item">
                                                <ChatIcon
                                                    color={colorPrimary}
                                                />
                                                <Btn className="text-center" size="sm">Chat</Btn>
                                            </li>
                                            <li className="list-inline-item">
                                                <ContractIcon
                                                    color={colorPrimary}
                                                />
                                                <Btn className="text-center" size="sm">Contract</Btn>
                                            </li>
                                        </ActionBtns>
                                    </Col>
                                </Form.Row>
                            )
                        })
                    }

                    <div className="mb text-center">
                        <Btn variant="pri" fill="none">
                            Show more
                        </Btn>
                    </div>
                </ContentListing>
            </SlideContent>
        );
    }
}

export default TenantsMoveOut;
