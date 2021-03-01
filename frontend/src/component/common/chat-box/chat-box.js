import React from 'react';
import {Modal, Button, Media, InputGroup, FormControl} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Avatar from "../avatar/Avatar";
import User from "../../../assets/img/Bitmap.svg";
import ChatIcon from "../../../assets/img/Chat-close-icon.svg";
import ConversationIcon from "../../../assets/img/conversation-icon.svg";
import SmileIcon from "../../../assets/img/Smile.svg";
import {faChevronLeft, faMinus} from "@fortawesome/free-solid-svg-icons";
import {
    ChatDiv,
    ChatListing,
    ChatSection,
    CloseChatSection,
    CloseChatWrapper,
    OpenChatSection, OpenChatWrapper
} from "../../../assets/css/chatBoxStyle";
import {Btn} from "../../../globalStyle";
import {InfoHeading, InfoItem, InfoText} from "../../../assets/css/mediaStyle";


class ChatBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            close: false,
            openChat: false,
            closeChat: true,
        };
    }


    render() {
        return (
            <React.Fragment>
                {/*Chat section in react bootStrap modal*/}
                <ChatSection show={this.state.show} backdrop="static">
                    <Modal.Header>
                        {this.state.openChat === true ? (
                            <React.Fragment>
                                <button type="button" className="close back"
                                        onClick={() => this.setState({openChat: false, closeChat: true,})}>
                                    <span aria-hidden="true"><FontAwesomeIcon icon={faChevronLeft}/></span>
                                    <span className="sr-only">back</span>
                                </button>
                                <InfoItem className="align-items-center">
                                    <Avatar
                                        size="sm"
                                        variant="primary5"
                                        cssClass="mr-3"
                                        avatarImg={User}
                                    />
                                    <Media.Body>
                                        <InfoHeading className="mb-0">Jonathan B.</InfoHeading>
                                        <InfoText>Sales Manager</InfoText>
                                    </Media.Body>
                                </InfoItem>
                            </React.Fragment>
                        ) : ''}
                        <button type="button" className="close" onClick={() => this.setState({show: false})}>
                            <span aria-hidden="true"><FontAwesomeIcon icon={faMinus}/></span>
                            <span className="sr-only">Close</span>
                        </button>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.closeChat === true ? (
                            <CloseChatSection>
                                <CloseChatWrapper>
                                    <ChatDiv className="mb-3">
                                        <p>Your conversations</p>
                                        <ChatListing>
                                            <InfoItem className="align-items-center">
                                                <Avatar
                                                    size="sm"
                                                    cssClass="mr-3"
                                                    avatarImg={User}
                                                />
                                                <Media.Body>
                                                    <InfoHeading className="mb-0">Jonathan B.</InfoHeading>
                                                    <InfoText className="text2">Administrator</InfoText>
                                                </Media.Body>
                                            </InfoItem>
                                        </ChatListing>
                                        <div className="text-center">
                                            <Btn variant="pri2Outline"
                                                    onClick={() => this.setState({openChat: true, closeChat: false,})}>
                                                <img src={ConversationIcon} className="img-fluid mr-2" alt="chat-icon"/>New
                                                conversation
                                            </Btn>
                                        </div>
                                    </ChatDiv>
                                    <ChatDiv>
                                        <p>Contacts</p>
                                        <ChatListing>
                                            <InfoItem className="align-items-center">
                                                <Avatar
                                                    size="sm"
                                                    cssClass="mr-3"
                                                    avatarImg={User}
                                                />
                                                <Media.Body>
                                                    <InfoHeading className="mb-0">Jonathan B.</InfoHeading>
                                                    <InfoText className="text2">Administrator</InfoText>
                                                </Media.Body>
                                            </InfoItem>
                                            <InfoItem className="align-items-center">
                                                <Avatar
                                                    size="sm"
                                                    cssClass="mr-3"
                                                    avatarImg={User}
                                                />
                                                <Media.Body>
                                                    <InfoHeading className="mb-0">Jonathan B.</InfoHeading>
                                                    <InfoText className="text2">Administrator</InfoText>
                                                </Media.Body>
                                            </InfoItem>
                                            <InfoItem className="align-items-center">
                                                <Avatar
                                                    size="sm"
                                                    cssClass="mr-3"
                                                    avatarImg={User}
                                                />
                                                <Media.Body>
                                                <InfoHeading className="mb-0">Jonathan B.</InfoHeading>
                                                <InfoText className="text2">Administrator</InfoText>
                                            </Media.Body>
                                            </InfoItem>
                                        </ChatListing>
                                    </ChatDiv>
                                </CloseChatWrapper>
                            </CloseChatSection>

                        ) : ''}

                        {this.state.openChat === true ? (
                            <OpenChatSection>
                                <OpenChatWrapper>
                                    <InfoItem type="chat" className="align-items-end right">
                                        <Media.Body>
                                            <InfoText>Thank you</InfoText>
                                        </Media.Body>
                                        {/*<Avatar*/}
                                        {/*avatarStyle="avatar--sm ml-3"*/}
                                        {/*avatarImg={User}*/}
                                        {/*/>*/}
                                    </InfoItem>
                                    <InfoItem type="chat"  className="align-items-end">
                                        <Avatar
                                            size="sm"
                                            cssClass="mr-3"
                                            avatarImg={User}
                                        />
                                        <Media.Body>
                                            <InfoText>You’re very welcome! Let me
                                                know if you have any further
                                                questions and I’ll be happy to
                                                help.</InfoText>
                                        </Media.Body>
                                    </InfoItem>
                                    <InfoItem type="chat" className="align-items-end right">
                                        <Media.Body>
                                            <InfoText>Thank you</InfoText>
                                        </Media.Body>
                                    </InfoItem>
                                </OpenChatWrapper>
                                <InputGroup>
                                    <FormControl className="inputChat" type="text" placeholder="Send a message...."/>
                                    <InputGroup.Append>
                                        <Button variant="outline-link">
                                            <img src={SmileIcon} alt="icon"/>
                                        </Button>
                                        <Button variant="outline-link">
                                            <img src={ConversationIcon} alt="icon"/>
                                        </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </OpenChatSection>
                        ) : ''}
                    </Modal.Body>
                </ChatSection>
                <Button variant="link" className="chatBtn" onClick={() => this.setState({show: true})}>
                    <img src={ChatIcon} className="img-fluid" alt="chat-icon"/>
                </Button>
            </React.Fragment>
        )
    }
}

export default ChatBox


