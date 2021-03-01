/***********
 Props
 mediaStyle:PropTypes.string
 iconColor:PropTypes.string
 badgeStyle:PropTypes.string
 requestStatus:PropTypes.string
 isRequest:PropTypes.bool
 requestCount:PropTypes.string
 isAmount:PropTypes.bool
 isPayNow:PropTypes.bool
 isRequestPopOver:PropTypes.bool
 ************/

import React, {Component} from 'react';
import {Media, Button, Popover, Col, Badge, OverlayTrigger, Row} from "react-bootstrap";
import Avatar from "../avatar/Avatar";
import User from "../../../assets/img/Bitmap.svg";
import EmailIconPrimary5 from "../../../assets/img/Email-Icon-primary5.svg";
import ContactIconPrimary5 from "../../../assets/img/Contact-Icon-primary5.svg";
import ChatIconPrimary5 from "../../../assets/img/Chat-Icon-primary5.svg";
import LocationModal from "../location-modal/location-modal";
import PaymentRequest from "../payment-request-modal/payment-request";
import {InfoItem, InfoText} from "../../../assets/css/mediaStyle";
import {BadgeLabel, Btn} from "../../../globalStyle";

class VendorMedia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPaymentModal: false,
        };
    }

    requestInfo(props) {
        return (
            <Popover id="popover-basic" className="infoPopup requestInfoPopup" {...props}>
                <Popover.Content>
                    <div className="list-items">
                        <Row className="align-items-center">
                            <Col xs={4} className="mb-3">
                                <Avatar
                                    size="md"
                                    variant="primary5"
                                    cssClass="mb-2"
                                    avatarImg={User}
                                />
                                <h5 className="mb-2 text-center" style={{fontSize: '18px'}}>Jonathan B.</h5>
                                <Button as="a" variant="link" className="px-1 py-0 border-right">
                                    <img src={ContactIconPrimary5} alt="icon"/>
                                </Button>
                                <Button as="a" variant="link" className="px-2 py-0 border-right">
                                    <img src={EmailIconPrimary5} alt="icon"/>
                                </Button>
                                <Button as="a" variant="link" className="px-1 py-0">
                                    <div className="msg-icon-div">
                                        <BadgeLabel variant="pri7">9</BadgeLabel>
                                        <img src={ChatIconPrimary5} alt="icon"/>
                                    </div>
                                </Button>
                            </Col>
                            <Col xs={5} className="mb-3">
                                <p className="text10">My outdoor lights are not working properly.</p>
                            </Col>
                            <Col xs={3} className="mb-3">
                                <p className="font-weight-md mb-0" style={{fontSize: '17px'}}>In Progress</p>
                                <div className="font-weight-md" style={{fontSize: '14px'}}>
                                    <p className="mb-0">Due to</p>
                                    <p className="mb-0 text5">April 25,2019</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col xs={4} className="mb-3">
                                <Avatar
                                    size="md"
                                    variant="primary5"
                                    cssClass="mb-2"
                                    avatarImg={User}
                                    isActionBtn={true}
                                    avatarBtnVariant="pri5"
                                    avatarBtnIcon="wrench"
                                />
                                <h5 className="mb-2 text-center" style={{fontSize: '18px'}}>Jonathan B.</h5>
                                <Button as="a" variant="link" className="px-1 py-0 border-right">
                                    <img src={ContactIconPrimary5} alt="icon"/>
                                </Button>
                                <Button as="a" variant="link" className="px-2 py-0 border-right">
                                    <img src={EmailIconPrimary5} alt="icon"/>
                                </Button>
                                <Button as="a" variant="link" className="px-1 py-0">
                                    <div className="msg-icon-div">
                                        <BadgeLabel variant="pri7">9</BadgeLabel>
                                        <img src={ChatIconPrimary5} alt="icon"/>
                                    </div>
                                </Button>
                            </Col>
                            <Col xs={5} className="mb-3">
                                <p className="text10">Assigned vendor.</p>
                            </Col>
                        </Row>
                    </div>
                </Popover.Content>
            </Popover>
        );
    };


    render() {

        return (
            <React.Fragment>
                <InfoItem>
                    {this.props.isRequestPopOver ? (
                        <OverlayTrigger
                            placement="top-start"
                            trigger={['hover', 'focus']}
                            delay={{show: 250, hide: 200}}
                            overlay={this.requestInfo()}>
                            <Button as="div" variant="" className="p-0">
                                <svg className="mr-3" width="69px" height="64px" viewBox="0 0 69 64" version="1.1">
                                    <desc>Created with Lunacy</desc>
                                    <g id="Request-Icon">
                                        <g id="Request-Icon">
                                            <path
                                                d="M7.999 0L46.001 0Q46.1974 0 46.3935 0.00963514Q46.5896 0.0192703 46.785 0.0385174Q46.9805 0.0577644 47.1747 0.0865771Q47.3689 0.11539 47.5615 0.153699Q47.7541 0.192007 47.9446 0.23972Q48.1351 0.287433 48.323 0.344434Q48.5109 0.401436 48.6958 0.467589Q48.8807 0.533742 49.0621 0.608888Q49.2435 0.684033 49.421 0.76799Q49.5985 0.851946 49.7717 0.944512Q49.9449 1.03708 50.1133 1.13803Q50.2817 1.23898 50.445 1.34807Q50.6083 1.45717 50.766 1.57414Q50.9237 1.69112 51.0755 1.81569Q51.2273 1.94026 51.3728 2.07213Q51.5183 2.204 51.6571 2.34285Q51.796 2.4817 51.9279 2.6272Q52.0597 2.7727 52.1843 2.92449Q52.3089 3.07628 52.4258 3.234Q52.5428 3.39172 52.6519 3.55499Q52.761 3.71826 52.862 3.88669Q52.9629 4.05512 53.0555 4.2283Q53.1481 4.40148 53.232 4.57899Q53.316 4.7565 53.3911 4.93791Q53.4662 5.11933 53.5324 5.30422Q53.5986 5.4891 53.6556 5.67701Q53.7126 5.86492 53.7603 6.0554Q53.808 6.24588 53.8463 6.43847Q53.8846 6.63106 53.9134 6.8253Q53.9422 7.01954 53.9615 7.21496Q53.9807 7.41038 53.9904 7.60651Q54 7.80264 54 7.999L54 56.001Q54 56.1974 53.9904 56.3935Q53.9807 56.5896 53.9615 56.785Q53.9422 56.9805 53.9134 57.1747Q53.8846 57.3689 53.8463 57.5615Q53.808 57.7541 53.7603 57.9446Q53.7126 58.1351 53.6556 58.323Q53.5986 58.5109 53.5324 58.6958Q53.4662 58.8807 53.3911 59.0621Q53.316 59.2435 53.232 59.421Q53.1481 59.5985 53.0555 59.7717Q52.9629 59.9449 52.862 60.1133Q52.761 60.2817 52.6519 60.445Q52.5428 60.6083 52.4258 60.766Q52.3089 60.9237 52.1843 61.0755Q52.0597 61.2273 51.9279 61.3728Q51.796 61.5183 51.6571 61.6571Q51.5183 61.796 51.3728 61.9279Q51.2273 62.0597 51.0755 62.1843Q50.9237 62.3089 50.766 62.4258Q50.6083 62.5428 50.445 62.6519Q50.2817 62.761 50.1133 62.862Q49.9449 62.9629 49.7717 63.0555Q49.5985 63.148 49.421 63.232Q49.2435 63.316 49.0621 63.3911Q48.8807 63.4663 48.6958 63.5324Q48.5109 63.5986 48.323 63.6556Q48.1351 63.7126 47.9446 63.7603Q47.7541 63.808 47.5615 63.8463Q47.3689 63.8846 47.1747 63.9134Q46.9805 63.9422 46.785 63.9615Q46.5896 63.9807 46.3935 63.9904Q46.1974 64 46.001 64L7.999 64Q7.80264 64 7.60651 63.9904Q7.41038 63.9807 7.21496 63.9615Q7.01954 63.9422 6.8253 63.9134Q6.63106 63.8846 6.43847 63.8463Q6.24588 63.808 6.0554 63.7603Q5.86492 63.7126 5.67701 63.6556Q5.4891 63.5986 5.30422 63.5324Q5.11933 63.4663 4.93791 63.3911Q4.7565 63.316 4.57899 63.232Q4.40148 63.148 4.2283 63.0555Q4.05512 62.9629 3.88669 62.862Q3.71826 62.761 3.55499 62.6519Q3.39172 62.5428 3.234 62.4258Q3.07628 62.3089 2.92449 62.1843Q2.7727 62.0597 2.6272 61.9279Q2.4817 61.796 2.34285 61.6571Q2.204 61.5183 2.07213 61.3728Q1.94026 61.2273 1.81569 61.0755Q1.69112 60.9237 1.57414 60.766Q1.45717 60.6083 1.34807 60.445Q1.23898 60.2817 1.13803 60.1133Q1.03708 59.9449 0.944512 59.7717Q0.851946 59.5985 0.76799 59.421Q0.684033 59.2435 0.608888 59.0621Q0.533742 58.8807 0.467589 58.6958Q0.401436 58.5109 0.344434 58.323Q0.287433 58.1351 0.23972 57.9446Q0.192007 57.7541 0.153699 57.5615Q0.11539 57.3689 0.0865771 57.1747Q0.0577644 56.9805 0.0385174 56.785Q0.0192703 56.5896 0.00963514 56.3935Q0 56.1974 0 56.001L0 7.999Q0 7.80264 0.00963514 7.60651Q0.0192703 7.41038 0.0385174 7.21496Q0.0577644 7.01954 0.0865771 6.8253Q0.11539 6.63106 0.153699 6.43847Q0.192007 6.24588 0.23972 6.0554Q0.287433 5.86492 0.344434 5.67701Q0.401436 5.4891 0.467589 5.30422Q0.533742 5.11933 0.608888 4.93791Q0.684033 4.7565 0.76799 4.57899Q0.851946 4.40148 0.944512 4.2283Q1.03708 4.05512 1.13803 3.88669Q1.23898 3.71826 1.34807 3.55499Q1.45717 3.39172 1.57414 3.234Q1.69112 3.07628 1.81569 2.92449Q1.94026 2.7727 2.07213 2.6272Q2.204 2.4817 2.34285 2.34285Q2.4817 2.204 2.6272 2.07213Q2.7727 1.94026 2.92449 1.81569Q3.07628 1.69112 3.234 1.57414Q3.39172 1.45717 3.55499 1.34807Q3.71826 1.23898 3.88669 1.13803Q4.05512 1.03708 4.2283 0.944512Q4.40148 0.851946 4.57899 0.76799Q4.7565 0.684033 4.93791 0.608888Q5.11933 0.533742 5.30422 0.467589Q5.4891 0.401436 5.67701 0.344434Q5.86492 0.287433 6.0554 0.23972Q6.24588 0.192007 6.43847 0.153699Q6.63106 0.11539 6.8253 0.0865771Q7.01954 0.0577644 7.21496 0.0385174Q7.41038 0.0192703 7.60651 0.00963514Q7.80264 0 7.999 0Z"
                                                id="Rectangle" fill="none" stroke={this.props.iconColor}
                                                strokeWidth="2"/>
                                            <path d="M0.397436 0.5L30.6026 0.5" transform="translate(10 18)" id="Line-8"
                                                  fill="none" stroke={this.props.iconColor} strokeWidth="2"
                                                  strokeLinecap="round"/>
                                            <path d="M0.397436 0.5L30.6026 0.5" transform="translate(10 24)"
                                                  id="Line-8-Copy" fill="none" stroke={this.props.iconColor}
                                                  strokeWidth="2" strokeLinecap="round"/>
                                            <path d="M0.403226 0.5L25 0.5" transform="translate(11 29)"
                                                  id="Line-8-Copy-2" fill="none" stroke={this.props.iconColor}
                                                  strokeWidth="2" strokeLinecap="round"/>
                                            <path
                                                d="M20.6062 1.16027L19.3779 2.32185L2.07605 18.6841Q1.85251 18.8955 1.70289 19.1644Q1.55326 19.4332 1.4914 19.7346L0.338812 25.3495Q0.325792 25.4129 0.321069 25.4775Q0.316345 25.542 0.319998 25.6067Q0.323651 25.6713 0.335619 25.735Q0.347587 25.7986 0.367669 25.8602Q0.387752 25.9217 0.415613 25.9802Q0.443475 26.0386 0.478648 26.093Q0.513822 26.1474 0.555719 26.1967Q0.597617 26.2461 0.645537 26.2897Q0.693457 26.3332 0.746598 26.3702Q0.799739 26.4072 0.857211 26.437Q0.914684 26.4669 0.975526 26.489Q1.03637 26.5112 1.09956 26.5253Q1.16275 26.5394 1.22724 26.5453Q1.29173 26.5511 1.35643 26.5486Q1.42113 26.546 1.48497 26.5352Q1.5488 26.5243 1.6107 26.5053L7.3089 24.7553Q7.74613 24.621 8.08146 24.3099L26.4355 7.28516Q26.5105 7.21559 26.578 7.13873Q26.6455 7.06187 26.7048 6.97853Q26.7641 6.89518 26.8146 6.80621Q26.8651 6.71725 26.9062 6.62359Q26.9473 6.52994 26.9787 6.43257Q27.0101 6.33521 27.0313 6.23515Q27.0526 6.13509 27.0636 6.03338Q27.0745 5.93168 27.075 5.82938Q27.0755 5.72709 27.0656 5.62528Q27.0556 5.52347 27.0353 5.42321Q27.015 5.32295 26.9846 5.22528Q26.9542 5.12761 26.914 5.03356Q26.8738 4.9395 26.8242 4.85005Q26.7745 4.76059 26.7161 4.67666Q26.6576 4.59274 26.5908 4.51522Q26.5241 4.43771 26.4498 4.36741L23.0598 1.16047Q22.9983 1.10233 22.9317 1.05027Q22.865 0.998205 22.7937 0.952679Q22.7224 0.907152 22.6471 0.868572Q22.5718 0.829991 22.4932 0.798702Q22.4146 0.767412 22.3334 0.743695Q22.2522 0.719977 22.1691 0.704045Q22.086 0.688112 22.0018 0.680106Q21.9176 0.6721 21.833 0.672093Q21.7484 0.672086 21.6642 0.680079Q21.58 0.688071 21.4969 0.703991Q21.4138 0.71991 21.3326 0.743614Q21.2514 0.767319 21.1728 0.798595Q21.0942 0.829872 21.0189 0.868441Q20.9436 0.907009 20.8723 0.952524Q20.801 0.99804 20.7343 1.05009Q20.6676 1.10215 20.6062 1.16027L20.6062 1.16027Z"
                                                transform="translate(41 5)" id="Path-28" fill={this.props.iconColor}
                                                stroke="none"/>
                                        </g>
                                    </g>
                                </svg>
                            </Button>
                        </OverlayTrigger>
                    ) : (
                        <svg className="mr-3" width="86px" height="85px" viewBox="0 0 86 85" version="1.1">
                            <desc>Created with Lunacy</desc>
                            <g id="Payment-Icon">
                                <g id="Payment-Icon" transform="translate(0.2905273 0.2092285)">
                                    <g id="$" transform="translate(29.70947 15.79077)">
                                        <path fill={this.props.iconColor}
                                            d="M10.8292 46.4248L10.8292 51.2988L8.49323 51.2988L8.49323 46.6045Q3.70905 46.6045 0.721745 44.6729L0.721745 40.7646Q2.02448 41.9102 4.2818 42.6851Q6.53913 43.46 8.49323 43.46L8.49323 31.96Q3.55182 29.5791 2.09186 27.5688Q0.631901 25.5586 0.631901 22.8184Q0.631901 19.5615 2.85553 17.1919Q5.07917 14.8223 8.49323 14.3506L8.49323 10.3076L10.8292 10.3076L10.8292 14.2607Q15.2315 14.3955 16.9161 15.5186L16.9161 19.3369Q14.6251 17.54 10.8292 17.4053L10.8292 29.2646Q15.501 31.4883 17.2193 33.5659Q18.9376 35.6436 18.9376 38.2939Q18.9376 41.4834 16.7925 43.6509Q14.6475 45.8184 10.8292 46.4248ZM8.49323 28.0068L8.49323 17.54Q6.60651 17.9219 5.50592 19.2134Q4.40534 20.5049 4.40534 22.3467Q4.40534 24.2783 5.30378 25.5137Q6.20221 26.749 8.49323 28.0068ZM10.8292 33.1279L10.8292 43.2803Q15.1641 42.3369 15.1641 38.6084Q15.1641 35.5088 10.8292 33.1279Z"/>
                                    </g>
                                    <path
                                        d="M32.9664 65.713C33.7387 65.7112 34.5049 65.683 35.2641 65.6293C38.7701 65.3816 42.1272 64.5906 45.2504 63.3408C52.9466 60.261 59.2231 54.3951 62.8106 47.0049C63.1003 46.4082 63.3725 45.8016 63.6264 45.1856C65.2058 41.3549 66.0812 37.1654 66.0918 32.7771C66.1357 14.631 51.3761 -0.0437949 33.1254 9.82091e-05C14.8746 0.0439914 0.0438931 14.7899 -3.44183e-13 32.936"
                                        transform="matrix(0.3420202 -0.9396926 0.9396926 0.3420202 0 62.1062)" id="Oval"
                                        fill="none" stroke={this.props.iconColor} strokeWidth="3"
                                        strokeLinecap="round"/>
                                    <path d="M-2.77556e-16 -1.66533e-13L7.91725 12L20 2.0554"
                                          transform="matrix(0.9961947 0.08715574 -0.08715574 0.9961947 65.24561 43.28955)"
                                          id="Path-26" fill="none" stroke={this.props.iconColor} strokeWidth="3"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                            </g>
                        </svg>)
                    }
                    <Media.Body>
                            <BadgeLabel className="d-inline-block" variant={this.props.badgeStyle}>{this.props.requestStatus}</BadgeLabel>
                        {this.props.isRequest ? (
                            <InfoText className="mb-0" style={{fontStyle: '14px'}}><span
                                className="mr-1">Request #</span>{this.props.requestCount}
                            </InfoText>) : ''
                        }
                        {this.props.isAmount ? (
                            <InfoText className="mb-0"
                                      style={{fontStyle: '14px'}}>{this.props.amount}</InfoText>) : ''
                        }
                        {this.props.isPayNow ? (
                            <Btn style={{minHeight:'auto', padding:'2px 8px'}} variant="pri5" fill="none" size="sm"
                                 onClick={() => this.setState({showPaymentModal: true})}>Pay
                                now</Btn>) : ''
                        }
                    </Media.Body>
                </InfoItem>
                <PaymentRequest
                    show={this.state.showPaymentModal}
                    hide={() => this.setState({showPaymentModal: false})}
                />

            </React.Fragment>


        );
    }
}

export default VendorMedia;
