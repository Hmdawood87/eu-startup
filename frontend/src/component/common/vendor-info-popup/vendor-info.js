import React, {Component} from 'react';
import Popover from "react-bootstrap/Popover";
import Avatar from "../avatar/Avatar";
import User from "../../../assets/img/Bitmap.svg";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import EmailIconPrimary5 from "../../../assets/img/Email-Icon-primary5.svg";
import ContactIconPrimary5 from "../../../assets/img/Contact-Icon-primary5.svg";
import Badge from "react-bootstrap/Badge";
import ChatIconPrimary5 from "../../../assets/img/Chat-Icon-primary5.svg";

class VendorInfo  extends Component {
    render() {
        return (
            <Popover id="popover-basic" className="vendorInfoPopup">
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
                                    <Badge variant="" className="badge-primary-7">9</Badge>
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
    }
}


export default VendorInfo;
