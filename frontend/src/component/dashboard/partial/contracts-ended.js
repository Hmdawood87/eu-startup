import React, {Component} from 'react';
import {Row, Col, Form} from "react-bootstrap";
import ChartCardSmall from "../../common/chart-card/chart-card.-small";
import UserMedia from "../../common/list-items/user-media";
import User from "../../../assets/img/Bitmap.svg";
import LocationMedia from "../../common/list-items/location-media";
import ContractMedia from "../../common/list-items/contract-media";
import ContractIconBlack from "../../../assets/img/Contract-Icon-black.svg";
import SearchArea from "../common/search-area";
import {Btn, colorPrimary4} from "../../../globalStyle";
import {ContentListing, SlideCards, SlideContent} from "../../../assets/css/dashboardStyle";
const data = [
    {name: '1', uv: 300, amt: 200},
    {name: '2', uv: 200, amt: 34},
    {name: '3', uv: 150, amt: 79},
    {name: '4', uv: 78, amt: 22.5},
    {name: '5', uv: 100, amt: 0},
    {name: '6', uv: 50, amt: 0},
];
const repeater = [1, 2, 3, 4]
class ContractsEnded extends Component {
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
                            title="Contracts Ended Recently"
                            inputStyle="pri4"
                        />
                    </Col>
                </Row>

                <ContentListing className="pt-2">
                    {
                        repeater.map((value, index) => {
                            return (
                                <Form.Row className="align-items-center justify-content-center mb-2 border-bottom">
                                    <Col xl="4" className="mb-3">
                                        <div className="mr-xl-5 border-right">
                                            <UserMedia
                                                iconColor="#cf63f9"
                                                mediaStyle="primary-4"
                                                avatarSize="lg"
                                                avatarVariant="primary4"
                                                avatarClass="mr-3"
                                                avatarImg={User}
                                                name="Jonathan B."
                                                contactNumber="+1 234-567-8905"
                                                isEmail={true}
                                                email="example@example.com"
                                            />
                                        </div>
                                    </Col>
                                    <Col xl="4" className="mb-3">
                                        <div className="mr-xl-5 border-right">
                                            <LocationMedia
                                                mediaStyle="primary-4"
                                                isPropertyName={true}
                                                isPropertyArea={true}
                                                isRating={true}
                                                ratingVariant="pri"
                                                rating="5"
                                                PropertyName="Zone"
                                                PropertyArea="(Texas)"
                                            />
                                        </div>
                                    </Col>
                                    <Col xl="4" className="mb-3">
                                        <ContractMedia
                                            isRenewalContract={false}
                                            isRenewalDate={false}
                                            contractIcon={ContractIconBlack}
                                            EndDate="April 26, 2020"
                                            ContractAmount="$10,000"
                                        />
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


export default ContractsEnded;
