import styled from 'styled-components/macro'
import {
    colorPrimary2,
    colorPrimary,
    colorPrimary12
} from "../../globalStyle";
import {Modal} from "react-bootstrap";

export const ChatSection  = styled(Modal)`
    bottom: 80px;
    top: auto;
    left: auto;
    right: 15px;
    width: 370px;
    height: 56vh;
    border-radius: 8px;
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.3);
    background-color: #ffffff;
    background-image: linear-gradient(to right, ${colorPrimary} 0%, ${colorPrimary2} 100%);
    padding-right: 0 !important;
    .modal-header {
        border: 0;
        padding-bottom: 0;
    }
    .modal-dialog {
        margin: 0;
    }
    .modal-content {
        background-color: transparent;
        border: 0;
    }
    .modal-body {
        padding-bottom: 0;
    }
    .close {
        font-weight: 500;
        color: #fff;
        text-shadow: none;
        opacity: 1;
        margin: -10px -1rem -1rem auto;
        &:focus{
            outline: none;
            box-shadow: none;
        }
    }
    .close.back {
        margin: -10px 10px -1rem -1rem;
    }
    .commonMedia__heading {
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 5px;
    }
    .commonMedia__text {
        font-size: 12px;
        margin-bottom: 0;
    }
    .inputChat{
        font-weight: 500;
        border: 0;
        margin-bottom: 0;
        color: #7b7b7b;
        padding: 25px 15px;
    }
`;

export const CloseChatSection  = styled.div`
    //height: 66vh;
    //overflow-x: hidden;
    //overflow-y: auto;
    margin: 0 -15px;
    padding-bottom: 15px;
`;
export const CloseChatWrapper  = styled.div`
   padding: 0 15px;
`;
export const ChatDiv  = styled.div`
    border-radius: 6px;
    background-color: #ffffff;
    padding: 30px 15px 10px;
`;
export const ChatListing  = styled.div`
    .media {
        margin-bottom: 15px;
        border-bottom: solid 1px #dfdfdf;
        padding-bottom: 15px;
    }
`;
export const OpenChatSection  = styled.div`
    background: #fff;
    margin: 0 -15px;
`;
export const OpenChatWrapper  = styled.div`
    padding: 15px;
    border-bottom: 1px solid #e2e2e2;
    height: 44.1vh;
    overflow-x: hidden;
    overflow-y: auto;
    .commonMedia__text {
        background-color: ${colorPrimary12};
        padding: 15px;
        border-radius: 6px;
        display: inline-block;
        font-size: 13px;
        margin-bottom: 0;
    }
    .media {
      margin-bottom: 15px;
    }
    .media.right .commonMedia__text {
        background-color: ${colorPrimary2};
        text-align: right;
        float: right;
        color: #fff;
        
    }
`;

