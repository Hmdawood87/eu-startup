import React, {Component} from 'react';
import {Modal, Row, Col, Badge, Button, Form} from "react-bootstrap";
import Avatar from "../avatar/Avatar";
import User from "../../../assets/img/Bitmap.svg";
import ContactIconPrimary5 from "../../../assets/img/Contact-Icon-primary5.svg";
import EmailIconPrimary5 from "../../../assets/img/Email-Icon-primary5.svg";
import ChatIconPrimary5 from "../../../assets/img/Chat-Icon-primary5.svg";
import StarRating from "../star-rating/star-rating";
import {BadgeLabel, Btn, colorPrimary5, CommonModal} from "../../../globalStyle";
import {PaymentRequestListing} from "../../../assets/css/dashboardStyle";

class PaymentRequest extends React.Component {
    render() {
        return (
            <CommonModal aria-labelledby="contained-modal-title-vcenter" centered
                         show={this.props.show} onHide={this.props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title className="mx-auto">Payment Request</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="align-items-center">
                        <Col lg="8" className="mb-3">
                            <div className="border-right">
                                <p><span className="font-weight-bold mr-1">Request No. 1:</span>My outdoor lights
                                    are
                                    not working properly.</p>
                                <p className="mb-0"><span className="font-weight-bold mr-1">Payment Amount:</span>$1,500
                                </p>
                            </div>
                        </Col>
                        <Col lg="4" className="mb-3">
                            <p className="text-5"><span className="date">April 26, 202</span>0<br/><span
                                className="time">10:53 AM</span></p>
                        </Col>
                    </Row>
                    <PaymentRequestListing className="mb-3">
                        <Form.Row className="align-items-center">
                            <Col lg="3" className="mb-3">
                                <div className="border-right">
                                    <Avatar
                                        size="sm"
                                        variant="primary5"
                                        cssClass="mb-2"
                                        avatarImg={User}
                                    />
                                    <div className="text-center">
                                        <p className="mb-0">Jonathan B.</p>
                                        <p className="text10 mb-0" style={{fontSize: '10px'}}>Tenant</p>
                                    </div>

                                    <Button as="a" variant="link" className="px-1 py-0 border-right">
                                        <img src={ContactIconPrimary5} alt="icon" width="18"/>
                                    </Button>
                                    <Button as="a" variant="link" className="px-2 py-0 border-right">
                                        <img src={EmailIconPrimary5} alt="icon" width="18"/>
                                    </Button>
                                    <Button as="a" variant="link" className="px-1 py-0">
                                        <div className="msg-icon-div">
                                            <BadgeLabel variant="pri7" size="sm"
                                                        style={{right: '0'}}>9</BadgeLabel>
                                            <img src={ChatIconPrimary5} alt="icon" width="18"/>
                                        </div>
                                    </Button>
                                </div>
                            </Col>
                            <Col lg="9" className="mb-3">
                                <StarRating
                                    ratingType="simple"
                                    rating="3.0"
                                    activeColor={colorPrimary5}
                                />
                                <p className="text-10">Outstanding experience with this vendor. I am happy
                                    with the service provided.</p>
                            </Col>
                        </Form.Row>
                        <Form.Row className="align-items-center">
                            <Col lg="3" className="mb-3">
                                <div className="border-right">
                                    <Avatar
                                        size="sm"
                                        variant="primary5"
                                        cssClass="mb-2"
                                        avatarImg={User}
                                        isActionBtn={true}
                                        avatarBtnStyle="pri5"
                                        avatarBtnIcon="wrench"
                                    />
                                    <div className="text-center">
                                        <p className="mb-0">Jonathan B.</p>
                                        <p className="text10 mb-0" style={{fontSize: '10px'}}>Tenant</p>
                                    </div>

                                    <Button as="a" variant="link" className="px-1 py-0 border-right">
                                        <img src={ContactIconPrimary5} alt="icon" width="18"/>
                                    </Button>
                                    <Button as="a" variant="link" className="px-2 py-0 border-right">
                                        <img src={EmailIconPrimary5} alt="icon" width="18"/>
                                    </Button>
                                    <Button as="a" variant="link" className="px-1 py-0">
                                        <div className="msg-icon-div">
                                            <BadgeLabel variant="pri7" size="sm" style={{right: '0'}}>9</BadgeLabel>
                                            <img src={ChatIconPrimary5} alt="icon" width="18"/>
                                        </div>
                                    </Button>
                                </div>
                            </Col>
                            <Col lg="9" className="mb-3">
                                <StarRating
                                    ratingType="simple"
                                    rating="4.0"
                                    activeColor={colorPrimary5}
                                />
                                <p className="text10">Outstanding experience with this vendor. I am happy
                                    with the service provided.</p>
                            </Col>
                        </Form.Row>
                    </PaymentRequestListing>
                    <ul className="list-inline mb-0 text-center">
                        <li className="list-inline-item">
                            <Btn variant="pri5RGBA">
                                Approve
                            </Btn>
                        </li>
                        <li className="list-inline-item">
                            <Btn variant="pri11RGBA">
                                Hold
                            </Btn>
                        </li>
                        <li className="list-inline-item">
                            <Btn variant="pri7RGBA" onClick={this.props.hide}>
                                Cancel
                            </Btn>
                        </li>
                    </ul>
                </Modal.Body>
            </CommonModal>
        )
    }
}

export default PaymentRequest


