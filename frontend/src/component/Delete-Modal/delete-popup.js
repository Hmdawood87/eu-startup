import React from 'react';
import {Btn, CommonModal, InputField} from "../../globalStyle";
import {Col, Form, Modal, Row} from "react-bootstrap";

const DeletePopup = (props) => {
    return (
        <div>
            <CommonModal size="md" aria-labelledby="contained-modal-title-vcenter" centered
                         show={props.show} onHide={props.cancel}>
                <Modal.Header closeButton>
                    <Modal.Title className="mx-auto">{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="mx-auto">
                        <Col xs="12" className="text-center">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <Btn onClick={props.delete} variant="pri5RGBA">
                                        Delete
                                    </Btn>

                                </li>
                                <li className="list-inline-item">
                                    <Btn onClick={props.cancel} variant="pri7RGBA">
                                        Cancel
                                    </Btn>
                                </li>
                            </ul>
                        </Col>



                    </Row>
                </Modal.Body>
            </CommonModal>
        </div>
    );
};

export default DeletePopup;
