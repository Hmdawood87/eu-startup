import React, {Component} from 'react';
import {Modal, Row, Col, Button, Form, Media} from "react-bootstrap";
import Avatar from "../avatar/Avatar";
import User from "../../../assets/img/Bitmap.svg";
import ContactIconPrimary5 from "../../../assets/img/Contact-Icon-primary5.svg";
import EmailIconPrimary5 from "../../../assets/img/Email-Icon-primary5.svg";
import ChatIconPrimary5 from "../../../assets/img/Chat-Icon-primary5.svg";
import StarRating from "../star-rating/star-rating";
import {SearchField} from "../../../assets/css/searchAreaStyle";
import {InfoHeading, InfoItem} from "../../../assets/css/mediaStyle";
import {BadgeLabel, Btn, colorPrimary5, CommonModal} from "../../../globalStyle";
import {AssignVendorLists, NewVendorLists} from "../../../assets/css/dashboardStyle";

class AssignVendor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    render() {
        return (
            <CommonModal size="lg" aria-labelledby="contained-modal-title-vcenter" centered
                   show={this.props.show} onHide={this.props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title className="mx-auto">Assign Vendor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="">
                        <Col lg="6" className="mb-2 mb-lg-0 border-right">
                            <div className="pr-lg-4">
                                <Form.Group controlId="search">
                                    <SearchField variant="pri5"
                                                type="search"
                                                placeholder="search.."/>
                                </Form.Group>
                                <AssignVendorLists>
                                    <InfoItem className="pb-3">
                                        <Avatar
                                            size="md"
                                            variant="primary5"
                                            cssClass="mr-3"
                                            avatarImg={User}
                                            isActionBtn={true}
                                            avatarBtnVariant="pri5"
                                            avatarBtnIcon="wrench"
                                        />
                                        <Media.Body>
                                            <InfoHeading className="mb-2" style={{fontWeight: '500'}}>Xyz
                                                Vendor</InfoHeading>
                                            <Btn as="a" variant="link" className="pl-0 pr-2 py-0 border-right">
                                                <img src={ContactIconPrimary5} alt="icon" width="25"/>
                                            </Btn>
                                            <Button as="a" variant="link" className="px-2 py-0 border-right">
                                                <img src={EmailIconPrimary5} alt="icon" width="25"/>
                                            </Button>
                                            <Button as="a" variant="link" className="px-2 py-0 mr-3 border-right">
                                                <BadgeLabel variant="pri7"></BadgeLabel>
                                                <img src={ChatIconPrimary5} alt="icon" width="30"/>
                                            </Button>
                                            <StarRating
                                                ratingType="simple"
                                                rating="2.0"
                                                activeColor={colorPrimary5}
                                            />
                                        </Media.Body>
                                    </InfoItem>
                                    <InfoItem className="pb-3">
                                        <Avatar
                                            size="md"
                                            variant="primary5"
                                            cssClass="mr-3"
                                            avatarImg={User}
                                            isActionBtn={true}
                                            avatarBtnVariant="pri5"
                                            avatarBtnIcon="wrench"
                                        />
                                        <Media.Body>
                                            <InfoHeading className="mb-2" style={{fontWeight: '500'}}>Xyz
                                                Vendor</InfoHeading>
                                            <Button as="a" variant="link"
                                                    className="pl-0 pr-2 py-0 border-right">
                                                <img src={ContactIconPrimary5} alt="icon" width="25"/>
                                            </Button>
                                            <Button as="a" variant="link" className="px-2 py-0 border-right">
                                                <img src={EmailIconPrimary5} alt="icon" width="25"/>
                                            </Button>
                                            <Button as="a" variant="link"
                                                    className="px-2 py-0 mr-3 border-right">
                                                <div className="msg-icon-div">
                                                    <BadgeLabel variant="pri7"
                                                                className="badge-xs">9</BadgeLabel>
                                                    <img src={ChatIconPrimary5} alt="icon" width="30"/>
                                                </div>
                                            </Button>
                                            <StarRating
                                                ratingType="simple"
                                                rating="5.0"
                                                activeColor={colorPrimary5}
                                            />
                                        </Media.Body>
                                    </InfoItem>
                                </AssignVendorLists>
                                <ul className="list-inline mb-0 text-center">
                                    <li className="list-inline-item mr-3">
                                        <Btn variant="pri5RGBA">
                                            Assign
                                        </Btn>
                                    </li>
                                    <li className="list-inline-item">
                                        <Btn onClick={this.props.hide} variant="pri7RGBA">
                                            Cancel
                                        </Btn>
                                    </li>
                                </ul>
                            </div>

                        </Col>
                        <Col lg="6" className="mb-2 mb-lg-0">
                            <div className="pl-lg-4">
                                <NewVendorLists>
                                    <InfoItem className="pb-3">
                                        <Avatar
                                            size="md"
                                            variant="primary5"
                                            cssClass="mr-3"
                                            avatarImg={User}
                                            isActionBtn={true}
                                            avatarBtnVariant="pri5"
                                            avatarBtnIcon="wrench"
                                        />
                                        <Media.Body>
                                            <InfoHeading className="mb-2" style={{fontWeight: '500'}}>Xyz
                                                Vendor</InfoHeading>
                                            <Button as="a" variant="link" className="pl-0 pr-2 py-0 border-right">
                                                <img src={ContactIconPrimary5} alt="icon" width="25"/>
                                            </Button>
                                            <Button as="a" variant="link" className="px-2 py-0 border-right">
                                                <img src={EmailIconPrimary5} alt="icon" width="25"/>
                                            </Button>
                                            <Button as="a" variant="link" className="px-2 py-0 mr-3 border-right">
                                                <div className="msg-icon-div">
                                                    <BadgeLabel variant="pri7"></BadgeLabel>
                                                    <img src={ChatIconPrimary5} alt="icon" width="30"/>
                                                </div>
                                            </Button>
                                            <StarRating
                                                ratingType="simple"
                                                rating="4.0"
                                                activeColor={colorPrimary5}
                                            />
                                        </Media.Body>
                                    </InfoItem>
                                    <Media className="commonMedia__media pb-3">
                                        <Avatar
                                            size="md"
                                            variant="primary4"
                                            cssClass="mr-3"
                                            avatarImg={User}
                                            isActionBtn={true}
                                            avatarBtnVariant="pri4"
                                            avatarBtnIcon="wrench"
                                        />
                                        <Media.Body>
                                            <InfoHeading className="mb-2" style={{fontWeight: '500'}}>Xyz
                                                Vendor</InfoHeading>
                                            <Button as="a" variant="link" className="pl-0 pr-2 py-0 border-right">
                                                <img src={ContactIconPrimary5} alt="icon" width="25"/>
                                            </Button>
                                            <Button as="a" variant="link" className="px-2 py-0 border-right">
                                                <img src={EmailIconPrimary5} alt="icon" width="25"/>
                                            </Button>
                                            <Button as="a" variant="link" className="px-2 py-0 mr-3 border-right">
                                                <div className="msg-icon-div">
                                                    <BadgeLabel variant="pri7"></BadgeLabel>
                                                    <img src={ChatIconPrimary5} alt="icon" width="30"/>
                                                </div>
                                            </Button>
                                            <StarRating
                                                ratingType="simple"
                                                rating="4.0"
                                                activeColor={colorPrimary5}
                                            />
                                        </Media.Body>
                                    </Media>
                                    <Media className="commonMedia__media pb-3">
                                        <Avatar
                                            size="md"
                                            variant="primary5"
                                            cssClass="mr-3"
                                            avatarImg={User}
                                            isActionBtn={true}
                                            avatarBtnVariant="pri5"
                                            avatarBtnIcon="wrench"
                                        />
                                        <Media.Body>
                                            <InfoHeading className="mb-2" style={{fontWeight: '500'}}>Xyz
                                                Vendor</InfoHeading>
                                            <Button as="a" variant="link" className="pl-0 pr-2 py-0 border-right">
                                                <img src={ContactIconPrimary5} alt="icon" width="25"/>
                                            </Button>
                                            <Button as="a" variant="link" className="px-2 py-0 border-right">
                                                <img src={EmailIconPrimary5} alt="icon" width="25"/>
                                            </Button>
                                            <Button as="a" variant="link" className="px-2 py-0 mr-3 border-right">
                                                <div className="msg-icon-div">
                                                    <BadgeLabel variant="pri7"></BadgeLabel>
                                                    <img src={ChatIconPrimary5} alt="icon" width="30"/>
                                                </div>
                                            </Button>
                                            <StarRating
                                                ratingType="simple"
                                                rating="4.0"
                                                activeColor={colorPrimary5}
                                            />
                                        </Media.Body>
                                    </Media>
                                    <Media className="commonMedia__media pb-3">
                                        <Avatar
                                            size="md"
                                            variant="primary11"
                                            cssClass="mr-3"
                                            avatarImg={User}
                                            isActionBtn={true}
                                            avatarBtnVariant="pri11"
                                            avatarBtnIcon="wrench"
                                        />
                                        <Media.Body>
                                            <InfoHeading className="mb-2" style={{fontWeight: '500'}}>Xyz
                                                Vendor</InfoHeading>
                                            <Button as="a" variant="link" className="pl-0 pr-2 py-0 border-right">
                                                <img src={ContactIconPrimary5} alt="icon" width="25"/>
                                            </Button>
                                            <Button as="a" variant="link" className="px-2 py-0 border-right">
                                                <img src={EmailIconPrimary5} alt="icon" width="25"/>
                                            </Button>
                                            <Button as="a" variant="link" className="px-2 py-0 mr-3 border-right">
                                                <div className="msg-icon-div">
                                                    <BadgeLabel variant="pri7"></BadgeLabel>
                                                    <img src={ChatIconPrimary5} alt="icon" width="30"/>
                                                </div>
                                            </Button>
                                            <StarRating
                                                ratingType="simple"
                                                rating="4.0"
                                                activeColor={colorPrimary5}
                                            />
                                        </Media.Body>
                                    </Media>
                                    <Media className="commonMedia__media pb-3">
                                        <Avatar
                                            size="md"
                                            variant="primary5"
                                            cssClass="mr-3"
                                            avatarImg={User}
                                            isActionBtn={true}
                                            avatarBtnVariant="pri5"
                                            avatarBtnIcon="wrench"
                                        />
                                        <Media.Body>
                                            <InfoHeading className="mb-2" style={{fontWeight: '500'}}>Xyz
                                                Vendor</InfoHeading>
                                            <Button as="a" variant="link" className="pl-0 pr-2 py-0 border-right">
                                                <img src={ContactIconPrimary5} alt="icon" width="25"/>
                                            </Button>
                                            <Button as="a" variant="link" className="px-2 py-0 border-right">
                                                <img src={EmailIconPrimary5} alt="icon" width="25"/>
                                            </Button>
                                            <Button as="a" variant="link" className="px-2 py-0 mr-3 border-right">
                                                <div className="msg-icon-div">
                                                    <BadgeLabel variant="pri7"></BadgeLabel>
                                                    <img src={ChatIconPrimary5} alt="icon" width="30"/>
                                                </div>
                                            </Button>
                                            <StarRating
                                                ratingType="simple"
                                                rating="4.0"
                                                activeColor={colorPrimary5}
                                            />
                                        </Media.Body>
                                    </Media>
                                    <Media className="commonMedia__media pb-3">
                                        <Avatar
                                            size="md"
                                            variant="primary5"
                                            cssClass="mr-3"
                                            avatarImg={User}
                                            isActionBtn={true}
                                            avatarBtnVariant="pri5"
                                            avatarBtnIcon="wrench"
                                        />
                                        <Media.Body>
                                            <InfoHeading className="mb-2" style={{fontWeight: '500'}}>Xyz
                                                Vendor</InfoHeading>
                                            <Button as="a" variant="link" className="pl-0 pr-2 py-0 border-right">
                                                <img src={ContactIconPrimary5} alt="icon" width="25"/>
                                            </Button>
                                            <Button as="a" variant="link" className="px-2 py-0 border-right">
                                                <img src={EmailIconPrimary5} alt="icon" width="25"/>
                                            </Button>
                                            <Button as="a" variant="link" className="px-2 py-0 mr-3 border-right">
                                                <div className="msg-icon-div">
                                                    <BadgeLabel variant="pri7"></BadgeLabel>
                                                    <img src={ChatIconPrimary5} alt="icon" width="30"/>
                                                </div>
                                            </Button>
                                            <StarRating
                                                ratingType="simple"
                                                rating="4.0"
                                                activeColor={colorPrimary5}
                                            />
                                        </Media.Body>
                                    </Media>
                                </NewVendorLists>
                                <Btn variant="pri5Outline" className="btn-block">
                                    Add New Vendor
                                </Btn>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </CommonModal>
        )
    }
}

export default AssignVendor


