import styled from 'styled-components/macro'
import {colorPrimary2} from "../../globalStyle";

export const MainHeader = styled.header`
    border-radius: 14px;
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    & .navbar{
       padding: 1.13rem 1rem;
    }
    & .navbar-text{
     padding: 0;
    color: #000000;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 1.18px;
    text-align: center;
    }
    & .DropdownToggle{
    padding: 8px;
    background: transparent;
    position: relative;
    & :hover, & :focus{
     color: #000;
     background-color: transparent;
     border-color: transparent;
     box-shadow: none !important;
    }
    &::after{
     content: none;
     }
    }
    & .notificationMenu{
    padding: 0;
    max-height: 250px;
    overflow-y: auto;
    overflow-x: hidden;
    }
    & .notificationLink{
    width: 300px;
    white-space: pre-line;
    padding: .5rem 1rem;
    background: #ffff;
    color: #000000;
    &.active, &:active{
     color: #000000;
    background: #eee8e8;
    }
    &:not(:last-child){
    border-bottom: 1px solid #dee2e6;
    }
    }
   .profileImg {
    width: 39px;
    height: 39px;
    border: solid 2px ${colorPrimary2};
    border-radius: 20px;
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.07);
    background-color: #ffffff;}
    .DropdownArrow {
    position: absolute;
    right: 0;
    top: 15px;
}
`;

export const LogoText = styled.h5`
    font-size: 19px;
    font-weight: bold;
    letter-spacing: 1.74px;
    margin-bottom: 0;
`;
export const LogoTextBottom = styled(LogoText)`
     font-size: 11px;
     font-weight: 500;
     letter-spacing: normal;
`;

export const UserName = styled.h5`
    font-size: 14px;
     color: #000000;
     margin-bottom: 0;
`;
export const UserSubName = styled(UserName)`
     font-size: 12px;
     color: ${colorPrimary2};
`;

