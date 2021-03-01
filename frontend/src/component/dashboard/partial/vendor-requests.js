import React, {Component} from 'react';
import {Row, Col, Form, Button, Popover, OverlayTrigger, Badge} from "react-bootstrap";
import ChartCardSmall from "../../common/chart-card/chart-card.-small";
import User from "../../../assets/img/Bitmap.svg";
import LocationMedia from "../../common/list-items/location-media";
import VendorMedia from "../../common/list-items/vendor-media";
import RequestIcon from "../../../assets/img/Request-Icon.svg";
import RequestIconBack from "../../../assets/img/Request-Icon-black.svg";
import PaymentIcon from "../../../assets/img/Payment-Icon.svg";
import PaymentIconBack from "../../../assets/img/Payment-Icon-black.svg";
import PaymentHistory from "../../../assets/img/Graph-bar.svg";
import Avatar from "../../common/avatar/Avatar";
import ChatIconPrimary5 from "../../../assets/img/Chat-Icon-primary5.svg";
import EmailIconPrimary5 from "../../../assets/img/Email-Icon-primary5.svg";
import ContactIconPrimary5 from "../../../assets/img/Contact-Icon-primary5.svg";
import AssignVendor from "../../common/assign-vendor-modal/assign-vendor";
import SearchArea from "../common/search-area";
import {BadgeLabel, Btn, colorPrimary11, colorPrimary5, colorPrimary7} from "../../../globalStyle";
import {ContentListing, SlideCards, SlideContent} from "../../../assets/css/dashboardStyle";

const data = [
    {name: '1', uv: 300, amt: 200},
    {name: '2', uv: 200, amt: 34},
    {name: '3', uv: 150, amt: 79},
    {name: '4', uv: 78, amt: 22.5},
    {name: '5', uv: 100, amt: 0},
    {name: '6', uv: 50, amt: 0},
];

class VendorRequests extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAssignVendorModal: false,
            showPaymentRequestModal: false,
        };
    }
    vendorInfo(props) {
        return (
            <Popover id="popover-basic" className="infoPopup vendorInfoPopup" {...props}>
                <Popover.Content>
                    <div className="vendorInfoPopup__topContent">
                        <Avatar
                            size="md"
                            variant="primary5"
                            cssClass="mb-2"
                            avatarImg={User}
                        />
                        <h5 className="mb-0">Jonathan B.</h5>
                        <p className="text-white mb-0 font-weight-normal">Tenant</p>
                    </div>
                    <div className="vendorInfoPopup__bottomContent">
                        <Form.Row className="align-items-center justify-content-center mb-3">
                            <Col xs={3} className="text-center border-right">
                                <img src={EmailIconPrimary5} alt="icon"/>
                            </Col>
                            <Col xs={9} className="pl-3">
                                email@example.com
                            </Col>
                        </Form.Row>
                        <Form.Row className="align-items-center justify-content-center mb-3">
                            <Col xs={3} className="text-center border-right">
                                <img src={ContactIconPrimary5} alt="icon"/>
                            </Col>
                            <Col xs={9} className="pl-3">
                                +1 234-567-8905
                            </Col>
                        </Form.Row>
                        <Form.Row className="align-items-center justify-content-center mb-3">
                            <Col xs={3} className="text-center border-right">
                                <div className="msg-icon-div">
                                    <BadgeLabel variant="pri">9</BadgeLabel>
                                    <img src={ChatIconPrimary5} alt="icon"/>
                                </div>

                            </Col>
                            <Col xs={9} className="pl-3">
                                Chat Message
                            </Col>
                        </Form.Row>
                    </div>
                </Popover.Content>
            </Popover>
        );
    };

    render() {
        return (
            <SlideContent>
                <Row className="align-items-center justify-content-center">
                    <Col lg="6">
                        <SlideCards className="list-inline">
                            <li className="list-inline-item">
                                <ChartCardSmall
                                    cardStyle="pri5"
                                    title="Monthly"
                                    count="3,250"
                                    chartData={data}
                                    isLineChart={true}
                                    chartColor={colorPrimary5}
                                />
                            </li>
                            <li className="list-inline-item">
                                <ChartCardSmall
                                    cardStyle="pri5"
                                    title="Annually"
                                    count="1,240"
                                    chartData={data}
                                    isBarChart={true}
                                    chartColor={colorPrimary5}
                                />
                            </li>
                            <li className="list-inline-item">
                                <ChartCardSmall
                                    cardStyle="pri5"
                                    title="Monthly"
                                    count="3,250"
                                    chartData={data}
                                    isLineChart={true}
                                    chartColor={colorPrimary5}
                                />
                            </li>
                            <li className="list-inline-item">
                                <ChartCardSmall
                                    cardStyle="pri5"
                                    title="Annually"
                                    count="1,240"
                                    chartData={data}
                                    isBarChart={true}
                                    chartColor={colorPrimary5}
                                />
                            </li>
                        </SlideCards>
                    </Col>
                    <Col lg="6">
                        <SearchArea
                            title="Vendor Requests"
                            inputStyle="pri5"
                        />
                    </Col>
                </Row>

                <ContentListing className="pt-2">
                    <Form.Row className="align-items-center justify-content-center mb-2 border-bottom">
                        <Col lg="2" className="mb-2">
                            <VendorMedia
                                isRequest={true}
                                isAmount={true}
                                isRequestPopOver={true}
                                iconColor={colorPrimary11}
                                badgeStyle="pri11"
                                requestStatus="in progress"
                                requestCount="1"
                                amount="$1000"
                            />
                        </Col>
                        <Col lg="3" className="mb-2">
                            <VendorMedia
                                mediaStyle="align-items-center"
                                iconColor={colorPrimary7}
                                badgeStyle="pri7"
                                requestStatus="not approved"
                                isPayNow={true}
                            />
                        </Col>
                        <Col lg="3" className="mb-2">
                            <Form.Row className="align-item-center">
                                <Col xs={6} className="text-center">
                                    <OverlayTrigger
                                        placement="bottom-end"
                                        trigger={['hover', 'focus']}
                                        delay={{show: 250, hide: 1000}}
                                        overlay={this.vendorInfo()}>
                                        <Button as="div" variant="" className="pb-0">
                                            <Avatar
                                                size="sm"
                                                variant="primary5"
                                                avatarImg={User}
                                            />
                                        </Button>
                                    </OverlayTrigger>
                                    <p className="text-center">Jonathan B.</p>
                                </Col>
                                <Col xs={6} className="text-center">
                                    <OverlayTrigger
                                        placement="bottom-end"
                                        trigger={['hover', 'focus']}
                                        delay={{show: 250, hide: 1000}}
                                        overlay={this.vendorInfo()}>
                                        <Button as="div" variant="" className="pb-0">
                                            <Avatar
                                                size="sm"
                                                variant="primary5"
                                                avatarImg={User}
                                                isActionBtn={true}
                                                avatarBtnVariant="pri5"
                                                avatarBtnIcon="wrench"
                                            />
                                        </Button>
                                    </OverlayTrigger>
                                    <p className="text-center">Jonathan B.</p>
                                </Col>
                            </Form.Row>
                        </Col>
                        <Col lg="2" className="mb-2">
                            <LocationMedia
                                mediaStyle="md"
                                isOnlyLocation={true}
                            />
                        </Col>
                        <Col lg="2" className="mb-2">
                            <p>25</p>
                            <div className="mb-2">
                                <img src={PaymentHistory} alt="graph" className="img-fluid"/>
                            </div>
                            <Form.Row className="align-items-center" style={{fontSize: '14px'}}>
                                <Col xs={8}>
                                    <span>Requests History</span>
                                </Col>
                                <Col xs={4} className="text-right">
                                    <span className="text7">76.5%</span>
                                </Col>
                            </Form.Row>
                        </Col>
                    </Form.Row>
                    <Form.Row className="align-items-center justify-content-center mb-2 border-bottom">
                        <Col lg="2" className="mb-2">
                            <VendorMedia
                                isRequest={true}
                                isAmount={true}
                                isRequestPopOver={true}
                                iconColor={colorPrimary5}
                                badgeStyle="pri5"
                                requestStatus="completed"
                                requestCount="2"
                                amount="$1000"
                            />
                        </Col>
                        <Col lg="3" className="mb-2">
                            <VendorMedia
                                mediaStyle="align-items-center"
                                iconColor={colorPrimary5}
                                badgeStyle="pri5"
                                requestStatus="vendor paid"
                            />
                        </Col>
                        <Col lg="3" className="mb-2">
                            <Form.Row className="align-item-center">
                                <Col xs={6} className="text-center">
                                    <OverlayTrigger
                                        placement="bottom-end"
                                        trigger={['hover', 'focus']}
                                        delay={{show: 250, hide: 1000}}
                                        overlay={this.vendorInfo()}>
                                        <Button as="div" variant="" className="pb-0">
                                            <Avatar
                                                size="sm"
                                                variant="primary5"
                                                avatarImg={User}
                                            />
                                        </Button>
                                    </OverlayTrigger>
                                    <p className="text-center">Jonathan B.</p>
                                </Col>
                                <Col xs={6} className="text-center">
                                    <OverlayTrigger
                                        placement="bottom-end"
                                        trigger={['hover', 'focus']}
                                        delay={{show: 250, hide: 1000}}
                                        overlay={this.vendorInfo()}>
                                        <Button as="div" variant="" className="pb-0">
                                            <Avatar
                                                size="sm"
                                                variant="primary9"
                                                avatarImg={User}
                                                isActionBtn={true}
                                                avatarBtnVariant="pri5Outline"
                                                avatarBtnIcon="plus"
                                                isOpenModal={true}
                                                showModal ={() => this.setState({showAssignVendorModal: true})}
                                            />
                                        </Button>
                                    </OverlayTrigger>
                                    <p className="text-center mb-0 text9">Assign Vendor</p>
                                </Col>
                            </Form.Row>
                        </Col>
                        <Col lg="2" className="mb-2">
                            <LocationMedia
                                mediaStyle="md"
                                isOnlyLocation={true}
                            />
                        </Col>
                        <Col lg="2" className="mb-2">
                            <p>25</p>
                            <div className="mb-2">
                                <img src={PaymentHistory} alt="graph" className="img-fluid"/>
                            </div>
                            <Form.Row className="align-items-center" style={{fontSize: '14px'}}>
                                <Col xs={8}>
                                    <span>Requests History</span>
                                </Col>
                                <Col xs={4} className="text-right">
                                    <span className="text7">76.5%</span>
                                </Col>
                            </Form.Row>
                        </Col>
                    </Form.Row>
                    <Form.Row className="align-items-center justify-content-center mb-2 border-bottom">
                        <Col lg="2" className="mb-2">
                            <VendorMedia
                                isRequest={true}
                                isAmount={true}
                                isRequestPopOver={true}
                                iconColor={colorPrimary7}
                                badgeStyle="pri7"
                                requestStatus="on hold"
                                requestCount="3"
                                amount="$1000"
                            />
                        </Col>
                        <Col lg="3" className="mb-2">
                            <VendorMedia
                                mediaStyle="align-items-center"
                                iconColor={colorPrimary11}
                                badgeStyle="pri11"
                                requestStatus="in progress"
                            />
                        </Col>
                        <Col lg="3" className="mb-2">
                            <Form.Row className="align-item-center">
                                <Col xs={6} className="text-center">
                                    <OverlayTrigger
                                        placement="bottom-end"
                                        trigger={['hover', 'focus']}
                                        delay={{show: 250, hide: 1000}}
                                        overlay={this.vendorInfo()}>
                                        <Button as="div" variant="" className="pb-0">
                                            <Avatar
                                                size="sm"
                                                variant="primary5"
                                                avatarImg={User}
                                            />
                                        </Button>
                                    </OverlayTrigger>
                                    <p className="text-center">Jonathan B.</p>
                                </Col>
                                <Col xs={6} className="text-center">
                                    <OverlayTrigger
                                        placement="bottom-end"
                                        trigger={['hover', 'focus']}
                                        delay={{show: 250, hide: 1000}}
                                        overlay={this.vendorInfo()}>
                                        <Button as="div" variant="" className="pb-0">
                                            <Avatar
                                                size="sm"
                                                variant="primary9"
                                                avatarImg={User}
                                                isActionBtn={true}
                                                avatarBtnVariant="pri5Outline"
                                                avatarBtnIcon="plus"
                                                isOpenModal={true}
                                                showModal ={() => this.setState({showAssignVendorModal: true})}
                                            />
                                        </Button>
                                    </OverlayTrigger>
                                    <p className="text-center mb-0 text9">Assign Vendor</p>
                                </Col>
                            </Form.Row>
                        </Col>
                        <Col lg="2" className="mb-2">
                            <LocationMedia
                                mediaStyle="md"
                                isOnlyLocation={true}
                            />
                        </Col>
                        <Col lg="2" className="mb-2">
                            <p>25</p>
                            <div className="mb-2">
                                <img src={PaymentHistory} alt="graph" className="img-fluid"/>
                            </div>
                            <Form.Row className="align-items-center" style={{fontSize: '14px'}}>
                                <Col xs={8}>
                                    <span>Requests History</span>
                                </Col>
                                <Col xs={4} className="text-right">
                                    <span className="text7">76.5%</span>
                                </Col>
                            </Form.Row>
                        </Col>
                    </Form.Row>
                    <Form.Row className="align-items-center justify-content-center mb-2 border-bottom">
                        <Col lg="2" className="mb-2">
                            <VendorMedia
                                isRequest={true}
                                isAmount={true}
                                isRequestPopOver={true}
                                iconColor={colorPrimary11}
                                badgeStyle="pri11"
                                requestStatus="in progress"
                                requestCount="1"
                                amount="$1000"
                            />
                        </Col>
                        <Col lg="3" className="mb-2">
                            <VendorMedia
                                mediaStyle="align-items-center"
                                iconColor={colorPrimary7}
                                badgeStyle="pri7"
                                requestStatus="not approved"
                                isPayNow={true}
                            />
                        </Col>
                        <Col lg="3" className="mb-2">
                            <Form.Row className="align-item-center">
                                <Col xs={6} className="text-center">
                                    <OverlayTrigger
                                        placement="bottom-end"
                                        trigger={['hover', 'focus']}
                                        delay={{show: 250, hide: 1000}}
                                        overlay={this.vendorInfo()}>
                                        <Button as="div" variant="" className="pb-0">
                                            <Avatar
                                                size="sm"
                                                variant="primary5"
                                                avatarImg={User}
                                            />
                                        </Button>
                                    </OverlayTrigger>
                                    <p className="text-center">Jonathan B.</p>
                                </Col>
                                <Col xs={6} className="text-center">
                                    <OverlayTrigger
                                        placement="bottom-end"
                                        trigger={['hover', 'focus']}
                                        delay={{show: 250, hide: 1000}}
                                        overlay={this.vendorInfo()}>
                                        <Button as="div" variant="" className="pb-0">
                                            <Avatar
                                                size="sm"
                                                variant="primary5"
                                                avatarImg={User}
                                                isActionBtn={true}
                                                avatarBtnVariant="pri5"
                                                avatarBtnIcon="wrench"
                                            />
                                        </Button>
                                    </OverlayTrigger>
                                    <p className="text-center">Jonathan B.</p>
                                </Col>
                            </Form.Row>
                        </Col>
                        <Col lg="2" className="mb-2">
                            <LocationMedia
                                mediaStyle="md"
                                isOnlyLocation={true}
                            />
                        </Col>
                        <Col lg="2" className="mb-2">
                            <p>25</p>
                            <div className="mb-2">
                                <img src={PaymentHistory} alt="graph" className="img-fluid"/>
                            </div>
                            <Form.Row className="align-items-center" style={{fontSize: '14px'}}>
                                <Col xs={8}>
                                    <span>Requests History</span>
                                </Col>
                                <Col xs={4} className="text-right">
                                    <span className="text7">76.5%</span>
                                </Col>
                            </Form.Row>
                        </Col>
                    </Form.Row>
                    <div className="text-center">
                        <Btn variant="pri5" fill="none">
                            Show more
                        </Btn>
                    </div>
                </ContentListing>
                <AssignVendor
                    show= {this.state.showAssignVendorModal}
                    hide ={() => this.setState({showAssignVendorModal: false})}
                />
            </SlideContent>
        );
    }
}


export default VendorRequests;
