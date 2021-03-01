import React, {Component} from 'react';
import {Row, Col, Form, Media} from "react-bootstrap";
import ChartCardSmall from "../../common/chart-card/chart-card.-small";
import User from "../../../assets/img/Bitmap.svg";
import Avatar from "../../common/avatar/Avatar";
import SearchArea from "../common/search-area";
import {Btn, colorPrimary6} from "../../../globalStyle";
import {ContentListing, SlideCards, SlideContent} from "../../../assets/css/dashboardStyle";
import {InfoHeading, InfoItem, InfoText} from "../../../assets/css/mediaStyle";

const data = [
    {name: '1', uv: 300, amt: 200},
    {name: '2', uv: 200, amt: 34},
    {name: '3', uv: 150, amt: 79},
    {name: '4', uv: 78, amt: 22.5},
    {name: '5', uv: 100, amt: 0},
    {name: '6', uv: 50, amt: 0},
];

class ActivityLog extends Component {
    render() {
        return (
            <SlideContent>
                <Row className="align-items-center justify-content-center">
                    <Col lg="6">
                        <SlideCards className="list-inline">
                            <li className="list-inline-item">
                                <ChartCardSmall
                                    cardStyle="pri6"
                                    title="Monthly"
                                    count="3,250"
                                    chartData={data}
                                    isLineChart={true}
                                    chartColor={colorPrimary6}
                                />
                            </li>
                            <li className="list-inline-item">
                                <ChartCardSmall
                                    cardStyle="pri6"
                                    title="Annually"
                                    count="1,240"
                                    chartData={data}
                                    isBarChart={true}
                                    chartColor={colorPrimary6}
                                />
                            </li>
                            <li className="list-inline-item">
                                <ChartCardSmall
                                    cardStyle="pri6"
                                    title="Monthly"
                                    count="3,250"
                                    chartData={data}
                                    isLineChart={true}
                                    chartColor={colorPrimary6}
                                />
                            </li>
                            <li className="list-inline-item">
                                <ChartCardSmall
                                    cardStyle="pri6"
                                    title="Annually"
                                    count="1,240"
                                    chartData={data}
                                    isBarChart={true}
                                    chartColor={colorPrimary6}
                                />
                            </li>
                        </SlideCards>
                    </Col>
                    <Col lg="6">
                        <SearchArea
                        title="Activity Log"
                        inputStyle="pri6"
                        />
                    </Col>
                </Row>

                <ContentListing className="pt-2">
                    <Form.Row className="mb-2 border-bottom">
                        <Col lg="3" className="mb-2">
                            <p className="font-weight-bold">Account Name</p>
                            <InfoItem className="align-items-center">
                                <Avatar
                                    size="lg"
                                    variant="primary2"
                                    cssClass="mr-3"
                                    avatarImg={User}
                                />
                                <Media.Body>
                                    <InfoHeading className="mb-0">Jonathan B.</InfoHeading>
                                    <InfoText className="text6">Administrator</InfoText>
                                </Media.Body>
                            </InfoItem>
                        </Col>
                        <Col lg="3" className="mb-2">
                            <p className="font-weight-bold" style={{marginBottom:'30px'}}>Date</p>
                            <p className="mb-0">April 26, 2020</p>
                            <p className="mb-0">10:53 AM</p>
                        </Col>
                        <Col lg="6" className="mb-2">
                            <p className="font-weight-bold" style={{marginBottom:'30px'}}>Description</p>
                           <p>Jonathan B. renewed the contract of a tenant.</p>
                        </Col>
                    </Form.Row>
                    <Form.Row className="mb-2 border-bottom align-items-center">
                        <Col lg="3" className="mb-2">
                            <InfoItem className="align-items-center">
                                <Avatar
                                    size="lg"
                                    variant="primary2"
                                    cssClass="mr-3"
                                    avatarImg={User}
                                />
                                <Media.Body>
                                    <InfoHeading className="mb-0">Jonathan B.</InfoHeading>
                                    <InfoText className="text6">Administrator</InfoText>
                                </Media.Body>
                            </InfoItem>

                        </Col>
                        <Col lg="3" className="mb-2">
                            <p className="mb-0">April 26, 2020</p>
                            <p className="mb-0">10:53 AM</p>
                        </Col>
                        <Col lg="6" className="mb-2">
                            <p>Jonathan B. renewed the contract of a tenant.</p>
                        </Col>
                    </Form.Row>
                    <Form.Row className="mb-2 border-bottom align-items-center">
                        <Col lg="3" className="mb-2">
                            <InfoItem className="align-items-center">
                                <Avatar
                                    size="lg"
                                    variant="primary2"
                                    cssClass="mr-3"
                                    avatarImg={User}
                                />
                                <Media.Body>
                                    <InfoHeading className="mb-0">Jonathan B.</InfoHeading>
                                    <InfoText className="text6">Administrator</InfoText>
                                </Media.Body>
                            </InfoItem>

                        </Col>
                        <Col lg="3" className="mb-2">
                            <p className="mb-0">April 26, 2020</p>
                            <p className="mb-0">10:53 AM</p>
                        </Col>
                        <Col lg="6" className="mb-2">
                            <p>Jonathan B. renewed the contract of a tenant.</p>
                        </Col>
                    </Form.Row>
                    <Form.Row className="mb-2 border-bottom align-items-center">
                        <Col lg="3" className="mb-2">
                            <InfoItem className="align-items-center">
                                <Avatar
                                    size="lg"
                                    variant="primary2"
                                    cssClass="mr-3"
                                    avatarImg={User}
                                />
                                <Media.Body className="commonMedia__body">
                                    <InfoHeading className="mb-0">Jonathan B.</InfoHeading>
                                    <InfoText className="text7">Administrator</InfoText>
                                </Media.Body>
                            </InfoItem>

                        </Col>
                        <Col lg="3" className="mb-2">
                            <p className="mb-0">April 26, 2020</p>
                            <p className="mb-0">10:53 AM</p>
                        </Col>
                        <Col lg="6" className="mb-2">
                            <p>Jonathan B. renewed the contract of a tenant.</p>
                        </Col>
                    </Form.Row>
                    <div className="mb text-center">
                        <Btn variant="pri6" fill="none">
                            Show more
                        </Btn>
                    </div>
                </ContentListing>
            </SlideContent>
        );
    }
}

export default ActivityLog;
