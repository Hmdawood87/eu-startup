import React, {Component} from 'react';
import {Row, Col, Form, Button} from "react-bootstrap";
import ChartCardSmall from "../../common/chart-card/chart-card.-small";
import UserMedia from "../../common/list-items/user-media";
import User from "../../../assets/img/Bitmap.svg";
import LocationMedia from "../../common/list-items/location-media";
import SearchArea from "../common/search-area";
import ChatIcon from "../../common/icons/chat-icon";
import {Btn, colorPrimary4, colorPrimary7} from "../../../globalStyle";
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

class VendorsList extends Component {
    render() {
        return (
            <SlideContent>
                <Row className="align-items-center justify-content-center">
                    <Col xl="6">
                        <SlideCards className="list-inline">
                            <li className="list-inline-item">
                                <ChartCardSmall
                                    cardStyle="pri4"
                                    title="Monthly"
                                    count="3,250"
                                    chartData={data}
                                    isLineChart={true}
                                    chartColor={colorPrimary4}
                                />
                            </li>
                            <li className="list-inline-item">
                                <ChartCardSmall
                                    cardStyle="pri4"
                                    title="Annually"
                                    count="1,240"
                                    chartData={data}
                                    isBarChart={true}
                                    chartColor={colorPrimary4}
                                />
                            </li>
                            <li className="list-inline-item">
                                <ChartCardSmall
                                    cardStyle="pri4"
                                    title="Monthly"
                                    count="3,250"
                                    chartData={data}
                                    isLineChart={true}
                                    chartColor={colorPrimary4}
                                />
                            </li>
                            <li className="list-inline-item">
                                <ChartCardSmall
                                    cardStyle="pri4"
                                    title="Annually"
                                    count="1,240"
                                    chartData={data}
                                    isBarChart={true}
                                    chartColor={colorPrimary4}
                                />
                            </li>
                        </SlideCards>
                    </Col>
                    <Col xl="6">
                        <SearchArea
                            title="List of Vendors"
                            inputStyle="pri4"
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
                                                avatarSize="lg"
                                                avatarVariant="primary4"
                                                avatarClass="mr-3"
                                                avatarImg={User}
                                                name="Jonathan B."
                                                contactNumber="+1 234-567-8905"
                                                isEmail={true}
                                                email="example@example.com"
                                                iconColor={colorPrimary4}
                                            />
                                        </div>
                                    </Col>
                                    <Col xl="5" className="mb-2">
                                        <div className="pr-xl-5 border-right">
                                            <LocationMedia
                                                isName={true}
                                                isAddress={true}
                                                name="Address"
                                                Address="711-2880 Nulla St.Peterborough, Ontario, Canada A1A 1A1"
                                            />
                                        </div>
                                    </Col>
                                    <Col xl="2" className="text-center mb-2">
                                        <ActionBtns className="list-inline">
                                            <li className="list-inline-item">
                                                <ChatIcon
                                                    color={colorPrimary4}
                                                />
                                                <Btn className="text-center" size="sm">
                                                    Chat
                                                </Btn>
                                            </li>
                                        </ActionBtns>
                                    </Col>
                                </Form.Row>
                            )
                        })
                    }

                    <div className="mb text-center">
                        <Btn variant="pri4" fill="none">
                            Show more
                        </Btn>
                    </div>
                </ContentListing>
            </SlideContent>
        );
    }
}

export default VendorsList;
