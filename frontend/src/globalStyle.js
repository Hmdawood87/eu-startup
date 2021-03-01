import styled, {css} from 'styled-components/macro'
import {createGlobalStyle} from 'styled-components'
import {Badge, Button, Form, Modal} from "react-bootstrap";

export const colorPrimary = '#f1b674';
export const colorPrimary2 = '#539fb7';
export const colorPrimary3 = '#f17194';
export const colorPrimary4 = '#cf63f9';
export const colorPrimary5 = '#27a469';
export const colorPrimary6 = '#324e99';
export const colorPrimary7 = '#fc585a';
export const colorPrimary8 = '#f0b36b';
export const colorPrimary9 = '#d8d8d8';
export const colorPrimary10 = '#5b5b5b';
export const colorPrimary11 = '#ffaa00';
export const colorPrimary12 = '#F5F5F5';

export const colorPrimaryRGBA = 'rgba(241, 182, 116, 0.5)';
export const colorPrimary2RGBA = 'rgba(83, 159, 183, 0.5)';
export const colorPrimary3RGBA = 'rgba(241, 113, 148, 0.5)';
export const colorPrimary4RGBA = 'rgba(207, 99, 249, 0.5)';
export const colorPrimary5RGBA = 'rgba(39, 164, 105, 0.5)';
export const colorPrimary6RGBA = 'rgba(50, 78, 153, 0.5)';
export const colorPrimary7RGBA = 'rgba(252, 88, 90, 0.5)';
export const colorPrimary8RGBA = 'rgba(240, 179, 107, 0.5)';
export const colorPrimary9RGBA = 'rgba(216, 216, 216, 0.5)';
export const colorPrimary10RGBA = 'rgba(91, 91, 91, 0.5)';
export const colorPrimary11RGBA = 'rgba(255, 170, 0, 0.5)';


export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: HelveticaNeue;
        src: url('assets/fonts/HelveticaNeue.ttf');
        font-weight: 400;
    }
    
    @font-face {
        font-family: HelveticaNeue;
        src: url('assets/fonts/HelveticaNeueLt.ttf');
        font-weight: 300;
    }
    
    @font-face {
        font-family: HelveticaNeue;
        src: url('assets/fonts/HelveticaNeueMed.ttf');
        font-weight: 500;
    }
    
    @font-face {
        font-family: HelveticaNeue;
        src: url('assets/fonts/HelveticaNeueBd.ttf');
        font-weight: 700;
    }
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: ${colorPrimary12};
    }
    
    ::-webkit-scrollbar {
        width: 6px;
        background-color: ${colorPrimary12};
    }
    
    ::-webkit-scrollbar-thumb {
    /*background-color: #2D3E50;*/
      background-image: linear-gradient(to right, ${colorPrimary} 0%, ${colorPrimary2} 100%);
    }
    body {
        padding: 0;
        margin: 0;
        font-family: "HelveticaNeue", sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: 0.3px;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
        /*display: flex;*/
        /*-ms-flex-direction: row;*/
        /*flex-direction: row;*/
        min-height: 100vh;
        background-image: linear-gradient(to right, ${colorPrimary} 0%, ${colorPrimary2} 100%);
        color: #000000;
    }
    
    .textPrimary{
      color:  ${colorPrimary};
    }
    
    .text2 {
      color:  ${colorPrimary2};
    }
    
    .text3 {
      color:  ${colorPrimary3};
    }
    
    .text4 {
      color: ${colorPrimary4};
    }
    
    .text5 {
      color: ${colorPrimary5};
    }
    
    .text6 {
      color: ${colorPrimary6};
    }
    
    .text7 {
     color: ${colorPrimary7};
    }
    
    .text8 {
      color: ${colorPrimary8};
    }
    
    .text9 {
      color: ${colorPrimary9};
    }
    
    .text10 {
      color: ${colorPrimary10};
    }
    
    .text11 {
      color: ${colorPrimary11};
    }
    .bgPrimary {
      background-color: ${colorPrimaryRGBA};
    }
    
    .bg2 {
      background-color: ${colorPrimary2RGBA};
    }
    
    .bg3 {
      background-color: ${colorPrimary3RGBA};
    }
    
    .bg4 {
      background-color: ${colorPrimary4RGBA};
    }
    
    .bg5 {
      background-color: ${colorPrimary5RGBA};
    }
    
    .bg6 {
      background-color: ${colorPrimary6RGBA};
    }
    
    .bg7 {
      background-color: ${colorPrimary7RGBA};
    }
    
    .bg8 {
      background-color: ${colorPrimary8RGBA};
    }
    
    .bg11 {
      background-color: ${colorPrimary11RGBA};
    }
    
    .borderPrimary {
      border-color: ${colorPrimary};
    }
    
    .border2 {
      border-color: ${colorPrimary2};
    }
    
    .border3 {
      border-color: ${colorPrimary3};
    }
    
    .border4 {
    border-color: ${colorPrimary4};
    }
    
    .border5 {
     border-color: ${colorPrimary5};
    }
    
    .border6 {
      border-color: ${colorPrimary6};
    }
    
    .border7 {
      border-color: ${colorPrimary7};
    }
    .commonSection {
        position: relative;
        border-radius: 15px;
        box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.07);
        background-color: #ffffff;
    }
    .commonSection.with-bg{
       background-size:cover !important;
       background-position: right bottom !important;
    }
    .commonSection.with-bg .layer{
       content:'';
       position: absolute;
       width: 100%;
       height: 100%;
       background: rgba(255, 255, 255, 0.8);
       z-index: 1;
       border-radius: 15px;
    }
    .commonSection .withBg-content{
      position: relative;
      z-index: 2;
      border-radius: 15px;
    }
    
    .commonSection .card-header{
       border-top-right-radius: 15px;
       border-top-left-radius: 15px;
       border-bottom: 1px solid #dee2e6;
       background: transparent;
    }
    
    .mb-3, .my-3 {
      margin-bottom: 1.25rem !important;
    }
    .app-wrapper {
        display: -ms-flexbox;
        display: flex;
        -ms-flex: 1;
        flex: 1;
        -ms-flex-direction: column;
        flex-direction: column;
        min-height: 100vh;
    }
     h1, h2, h3, h4, h5, h6,
    .h1, .h2, .h3, .h4, .h5, .h6 {
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: 0.36px;
        color: #000000;
        font-weight: 500;
    }

    .h1, h1 {
        font-size: 32px;
    }
    .h2, h2 {
        font-size: 28px;
    }
    .h3, h3 {
        font-size: 24px;
    }
    .h4, h4 {
        font-size: 20px;
    }
     .h5, h5 {
        font-size: 18px;
    }
     .h6, h6 {
        font-size: 16px;
    }
    .lead {
        font-size: inherit;
        font-weight: inherit;
    }
    
    small,
    .small {
        font-size: inherit;
        font-weight: inherit;
    }
    .font-weight-md {
        font-weight: 500;
    }
    .btn:focus{
        outline: none;
        box-shadow: none;
    }
    .chatBtn {
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 1050;
    }
    .control {
        position: relative;
        display: block;
        margin-bottom: 15px;
        padding-left: 30px;
        cursor: pointer;
        font-weight: 500;
        font-size: 14px;
    }
    
    .control input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
    
    .control__indicator {
        position: absolute;
        top: 0;
        left: 4px;
        width: 16px;
        height: 16px;
        border-radius: 3px;
        background: linear-gradient(0deg, #F1F3F7 0%, #FFFFFF 100%);
        border: 1px solid #2D3E50;
    }
    
    .control--radio .control__indicator {
        border-radius: 50%;
    }
    
    .control:hover input ~ .control__indicator,
    .control input:focus ~ .control__indicator {
        background: #ffff;
    }
    
    .control input:checked ~ .control__indicator {
        background: #2D3E50;
    }
    
    .control:hover input:not([disabled]):checked ~ .control__indicator,
    .control input:checked:focus ~ .control__indicator {
        background: #2D3E50;
    }
    
    .control input:disabled ~ .control__indicator {
        pointer-events: none;
        opacity: .6;
        background: #e6e6e6;
    }
    
    .control__indicator:after {
        position: absolute;
        display: none;
        content: '';
    }
    
    .control input:checked ~ .control__indicator:after {
        display: block;
    }
    
    .control--checkbox .control__indicator:after {
        top: 2px;
        left: 5px;
        width: 4px;
        height: 9px;
        transform: rotate(45deg);
        border: solid #fff;
        border-width: 0 2px 2px 0;
    }
    .control--checkbox.bigCheck .control__indicator:after {
        top: -8px;
        left: 7px;
        width: 9px;
        height: 20px;
        border: solid #f1b674;
        z-index: 2;
        border-width: 0 3px 3px 0;
    }
    
    .control--checkbox input:disabled ~ .control__indicator:after {
        border-color: #2D3E50;
    }
    
    .control--radio .control__indicator:after {
        top: 5px;
        left: 4px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #fff;
    }
    
    .control--radio input:disabled ~ .control__indicator:after {
        background: #2D3E50;
    }
    
    .infoPopup {
        border-radius: 18px;
        box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.3);
        border: solid 1px ${colorPrimary5};
        font-size: 16px;
    }
    
    .vendorInfoPopup {
        min-width: 280px;
        font-size: 14px;
        font-weight: 500;
    }
    
    .vendorInfoPopup .popover-body {
        padding: 0;
    }
    
    .vendorInfoPopup__topContent {
        background-image: linear-gradient(to right, ${colorPrimary} 0%, ${colorPrimary2} 100%);
        text-align: center;
        padding: 20px 0;
        border-radius: 18px;
    }
    
    .vendorInfoPopup__bottomContent {
        padding: 20px 15px;
    }
    
    .requestInfoPopup {
        max-width: 480px;
    }
    
    .requestInfoPopup .popover-body {
        padding: 20px 15px;
    }
    
    .msg-icon-div {
        position: relative;
    }
    .msg-icon-div .badge{
        position: absolute;
        top: 0;
        right: 15px;
    }
    .list-items .row:not(:last-child), .list-items .form-row:not(:last-child),
    .assign-vendor-lists .media:not(:last-child),
     .list-items li:not(:last-child)
     {
        margin-bottom: 1rem;
        border-bottom: 1px solid #dee2e6;
    }
    .commonTooltip .tooltip-inner {
        max-width: 360px;
        border-radius: 9px;
        box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.3);
        border: solid 1px ${colorPrimary};
        background-color: #ffffff;
        color: #000;
        text-align: left;
        padding: 25px 15px;
        font-weight: 400;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        border: 1px solid #44444f;
        -webkit-text-fill-color: #44444f;
        -webkit-box-shadow: none;
        transition: background-color 5000s ease-in-out 0s;
    }
    .form-control:focus {
        outline: none;
        box-shadow: none;
    }
    .socialLink {
        width: 40px;
        height: 40px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color: #fff;
        text-decoration: none;
    }
    
    .socialLink:hover {
        text-decoration: none;
        color: #fff;
        opacity: .8;
    }
    
    .socialLink--fb {
        background: #3D5A96;
    }
    
    .socialLink--tw {
        background: #2AA3EF;
    }
    
    .socialLink--gPlus {
        background: #DA483F;
    }
  .SelectField {
        border-radius: 0;
        border-width: 0 0 1px 0;
        font-size: 21px;
        font-weight: 500;
        border-color: #e1e1e1;
        padding: 6px 12px 6px 0;
   }
  .accordion>.card>.card-header {
     
   }
   .accordion>.card:not(:last-of-type) {
     border-bottom: 1px solid rgba(0,0,0,.125); 
     border-bottom-right-radius: .25rem; 
     border-bottom-left-radius: .25rem; 
}
  .accordion{
        position: relative;
        display: block;
        margin: 0;
        cursor: pointer;
        //background-color: transparent;
        border-color: #d8d8d8;
  }
  .accordion .card-body{
      border-bottom-left-radius:15px;
      border-bottom-right-radius:15px;
      box-shadow: 0 2px 16px 0 rgb(0 0 0 / 7%);
      background-color: #ffffff;
  }
  .accordion.active{
      background: #d8d8d8;
  }
  .accordion .icon{
        width: 31px;
        height: 31px;
        border-radius: 8px;
        min-width: 0;
        min-height: 0;
        font-size: .875rem;
        line-height: 1.5;
        float: right;
  }
  .accordion.active .icon{
       color: #f1b674;
       background-color: #ffffff;
       border-color: #f1b674;
  }
  
`;
export const PageWrapper = styled.div`
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    padding: 10px 14px 0;
`;

export const Main = styled.div`
    display: flex;
    align-items: stretch;
`;

export const PageContent = styled.div`
    padding: 20px 0 0 20px;
    min-height: 100vh;
    transition: all 0.3s;
    width: 100%;
`;

export const SideBarWrapper = styled.div`
    min-height: 100vh;
    margin-top: 20px;
    border-radius: 18px;
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
`;
export const AlertWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1060;
    width: 100%;
    height: 100vh;
    background-color: #000;
    opacity: .9;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    @media all and (max-width: 1199px) {
        display: flex;
    }
`;
export const Alert = styled.div`
    width: 300px;
    font-size: 16px;
`;

export const NotificationDot = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    border-radius: 50%;
    ${props => props.bell && css`
        width: 12px;
        height: 12px;
        background-color: ${colorPrimary2};
        top: 5px;
        right: 5px;
    `}
`;

export const Heading3 = styled.h3`
    font-size: 23px;
    font-weight: 700;
    color: ${colorPrimary};
`;

export const ImgWrap = styled.div`
    position: relative;
    overflow: hidden;
    margin: 0 auto;
`;
export const Img = styled.img`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
`;

export const Btn = styled(Button)`
    font-weight: 500;
    min-width: 100px;
    min-height: 35px;
    border-radius: 6px;
    font-size: 1rem;
    line-height: 1.5;
    position: relative;
    overflow: hidden;
    &::after{
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 25%;
        height: 100%;
        width: 50%;
        background-color: #000;
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        transition: all ease-in-out 1s;
        transform: scale(5, 5);
    }
    &:active::after{
        padding: 0;
        margin: 0;
        opacity: .2;
        transition: 0s;
        transform: scale(0, 0);
    }
    &:focus{
        outline: none !important;
        box-shadow: none !important;
    }
    &.btn-primary {
        color: #000000;
        background-color: transparent;
        border-color: transparent;
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: #000000;
            background-color: transparent;
            border-color: transparent;
        } 
    }
     &.btn-lg{
        padding: .5rem 1rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: .6rem;
    }
     &.btn-md{
       font-size: 16px;
       min-width: 60px;
       border-radius: 4px;
    }
    &.btn-sm{
        padding: .25rem .5rem;
        font-size: .875rem;
        line-height: 1.5;
        border-radius: .2rem;
        min-width: 50px;
    }
    ${props => props.rounded && css`
        &.btn-lg{ 
            border-radius:31px;
            padding: .7rem 1rem;
        }
    `}
        
    ${props => props.variant === 'gradient' && css`
        color: #ffffff;
        background-color: ${colorPrimary};
        border-color:transparent;
        background-image: -webkit-gradient(linear, 0% top, 100% top, from(${colorPrimary}), to(${colorPrimary2}));
        background-image: -webkit-linear-gradient(left, color-stop(${colorPrimary} 0%), color-stop(${colorPrimary2} 100%));
        background-image: -moz-linear-gradient(left, ${colorPrimary} 0%, ${colorPrimary2} 100%);
        background-image: linear-gradient(to right, ${colorPrimary} 0%, ${colorPrimary2} 100%);
        background-repeat: repeat-x;
        &.focus, &:focus, &:hover{
            color: #ffffff;
            background-color: ${colorPrimary};
            border-color:transparent;
        } 
    `}
    
    ${props => props.variant === 'pri' && css`
        color: ${props => props.fill === 'none' ? colorPrimary : '#ffffff'};
        background-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary};
        border-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: ${props => props.fill === 'none' ? colorPrimary : colorPrimary};
            background-color: ${props => props.fill === 'none' ? 'transparent' : 'transparent'};
            border-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary};
        }
    `}
    
    ${props => props.variant === 'priOutline' && css`
        color: ${colorPrimary};
        background-color: transparent;
        border-color: ${colorPrimary};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: #ffffff;
            background-color: ${colorPrimary};
            border-color: ${colorPrimary};
         }
    `}
    
    ${props => props.variant === 'priRGBA' && css`
        color: ${colorPrimary};
        background-color: ${colorPrimaryRGBA};
        border-color: ${colorPrimary};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: ${colorPrimary};
            background-color: #ffffff;
            border-color: ${colorPrimary};
         }
   `}  
    
    ${props => props.variant === 'pri2' && css`
        color: ${props => props.fill === 'none' ? colorPrimary2 : '#ffffff'};
        background-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary2};
        border-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary2};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: ${props => props.fill === 'none' ? colorPrimary2 : colorPrimary2};
            background-color: ${props => props.fill === 'none' ? 'transparent' : 'transparent'};
            border-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary2};
        }
    `}
      
    ${props => props.variant === 'pri2Outline' && css`
        color: ${colorPrimary2};
        background-color: transparent;
        border-color: ${colorPrimary2};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: #ffffff;
            background-color: ${colorPrimary2};
            border-color: ${colorPrimary2};
         }
    `}
    
    ${props => props.variant === 'pri2RGBA' && css`
        color: ${colorPrimary2};
        background-color: ${colorPrimary2RGBA};
        border-color: ${colorPrimary2};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: ${colorPrimary2};
            background-color: #ffffff;
            border-color: ${colorPrimary2};
         }
   `}
    
    ${props => props.variant === 'pri3' && css`
        color: ${props => props.fill === 'none' ? colorPrimary3 : '#ffffff'};
        background-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary3};
        border-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary3};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: ${props => props.fill === 'none' ? colorPrimary3 : colorPrimary3};
            background-color: ${props => props.fill === 'none' ? 'transparent' : 'transparent'};
            border-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary3};
        }
    `}
    
    ${props => props.variant === 'pri3Outline' && css`
        color: ${colorPrimary3};
        background-color: transparent;
        border-color: ${colorPrimary3};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: #ffffff;
            background-color: ${colorPrimary3};
            border-color: ${colorPrimary3};
         }
    `}
    
    ${props => props.variant === 'pri3RGBA' && css`
        color: ${colorPrimary3};
        background-color: ${colorPrimary3RGBA};
        border-color: ${colorPrimary3};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: ${colorPrimary3};
            background-color: #ffffff;
            border-color: ${colorPrimary3};
         }
   `}
    
    ${props => props.variant === 'pri4' && css`
        color: ${props => props.fill === 'none' ? colorPrimary4 : '#ffffff'};
        background-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary4};
        border-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary4};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: ${props => props.fill === 'none' ? colorPrimary4 : colorPrimary4};
            background-color: ${props => props.fill === 'none' ? 'transparent' : 'transparent'};
            border-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary4};
        }
    `}
    
     ${props => props.variant === 'pri4Outline' && css`
        color: ${colorPrimary4};
        background-color: transparent;
        border-color: ${colorPrimary4};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: #ffffff;
            background-color: ${colorPrimary4};
            border-color: ${colorPrimary4};
         }
    `}
    
     ${props => props.variant === 'pri4RGBA' && css`
        color: ${colorPrimary4};
        background-color: ${colorPrimary4RGBA};
        border-color: ${colorPrimary4};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: ${colorPrimary4};
            background-color: #ffffff;
            border-color: ${colorPrimary4};
         }
   `} 
    
     ${props => props.variant === 'pri5' && css`
        color: ${props => props.fill === 'none' ? colorPrimary5 : '#ffffff'};
        background-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary5};
        border-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary5};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: ${props => props.fill === 'none' ? colorPrimary5 : colorPrimary5};
            background-color: ${props => props.fill === 'none' ? 'transparent' : 'transparent'};
            border-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary5};
        }
    `}  
        
    ${props => props.variant === 'pri5Outline' && css`
        color: ${colorPrimary5};
        background-color: transparent;
        border-color: ${colorPrimary5};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: #ffffff;
            background-color: ${colorPrimary5};
            border-color: ${colorPrimary5};
         }
    `}
    
    ${props => props.variant === 'pri5RGBA' && css`
        color: ${colorPrimary5};
        background-color: ${colorPrimary5RGBA};
        border-color: ${colorPrimary5RGBA};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: ${colorPrimary5};
            background-color: #ffffff;
            border-color: ${colorPrimary5};
         }
    `}
    
      ${props => props.variant === 'pri6' && css`
        color: ${props => props.fill === 'none' ? colorPrimary6 : '#ffffff'};
        background-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary6};
        border-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary6};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: ${props => props.fill === 'none' ? colorPrimary6 : colorPrimary6};
            background-color: ${props => props.fill === 'none' ? 'transparent' : 'transparent'};
            border-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary6};
        }
    `}
      
       ${props => props.variant === 'pri6Outline' && css`
        color: ${colorPrimary6};
        background-color: transparent;
        border-color: ${colorPrimary6};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: #ffffff;
            background-color: ${colorPrimary6};
            border-color: ${colorPrimary6};
         }
    `}
    
     ${props => props.variant === 'pri6RGBA' && css`
        color: ${colorPrimary6};
        background-color: ${colorPrimary6RGBA};
        border-color: ${colorPrimary6};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: ${colorPrimary6};
            background-color: #ffffff;
            border-color: ${colorPrimary6};
         }
   `}
    
     ${props => props.variant === 'pri7' && css`
        color: ${props => props.fill === 'none' ? colorPrimary7 : '#ffffff'};
        background-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary7};
        border-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary7};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: ${props => props.fill === 'none' ? colorPrimary7 : colorPrimary7};
            background-color: ${props => props.fill === 'none' ? 'transparent' : 'transparent'};
            border-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary7};
        }
    `}
     
      ${props => props.variant === 'pri7Outline' && css`
        color: ${colorPrimary7};
        background-color: transparent;
        border-color: ${colorPrimary7};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: #ffffff;
            background-color: ${colorPrimary7};
            border-color: ${colorPrimary7};
         }
    `}
    
    ${props => props.variant === 'pri7RGBA' && css`
        color: ${colorPrimary7};
        background-color: ${colorPrimary7RGBA};
        border-color: ${colorPrimary7RGBA};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: ${colorPrimary7};
            background-color: #ffffff;
            border-color: ${colorPrimary7};
         }
    `}
    
     ${props => props.variant === 'pri8' && css`
        color: ${props => props.fill === 'none' ? colorPrimary8 : '#ffffff'};
        background-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary8};
        border-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary8};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: ${props => props.fill === 'none' ? colorPrimary8 : colorPrimary8};
            background-color: ${props => props.fill === 'none' ? 'transparent' : 'transparent'};
            border-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary8};
        }
    `}
     
      ${props => props.variant === 'pri8Outline' && css`
        color: ${colorPrimary8};
        background-color: transparent;
        border-color: ${colorPrimary8};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: #ffffff;
            background-color: ${colorPrimary8};
            border-color: ${colorPrimary8};
         }
    `}
     
    ${props => props.variant === 'pri8RGBA' && css`
        color: ${colorPrimary8};
        background-color: ${colorPrimary8RGBA};
        border-color: ${colorPrimary8};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: ${colorPrimary8};
            background-color: #ffffff;
            border-color: ${colorPrimary8};
         }
   `}
    
     ${props => props.variant === 'pri9' && css`
        color: ${props => props.fill === 'none' ? colorPrimary9 : '#ffffff'};
        background-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary9};
        border-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary9};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: ${props => props.fill === 'none' ? colorPrimary9 : colorPrimary9};
            background-color: ${props => props.fill === 'none' ? 'transparent' : 'transparent'};
            border-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary9};
        }
    `}
     
      ${props => props.variant === 'pri9Outline' && css`
        color: ${colorPrimary9};
        background-color: transparent;
        border-color: ${colorPrimary9};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: #ffffff;
            background-color: ${colorPrimary9};
            border-color: ${colorPrimary9};
         }
    `}
    
    ${props => props.variant === 'pri9RGBA' && css`
        color: ${colorPrimary9};
        background-color: ${colorPrimary9RGBA};
        border-color: ${colorPrimary9RGBA};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: ${colorPrimary9};
            background-color: #ffffff;
            border-color: ${colorPrimary9};
         }
   `}
    
     ${props => props.variant === 'pri10' && css`
        color: ${props => props.fill === 'none' ? colorPrimary10 : '#ffffff'};
        background-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary10};
        border-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary10};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: ${props => props.fill === 'none' ? colorPrimary10 : colorPrimary10};
            background-color: ${props => props.fill === 'none' ? 'transparent' : 'transparent'};
            border-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary10};
        }
    `}
    
     ${props => props.variant === 'pri10Outline' && css`
        color: ${colorPrimary10};
        background-color: transparent;
        border-color: ${colorPrimary11};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: #ffffff;
            background-color: ${colorPrimary10};
            border-color: ${colorPrimary10};
         }
    `}
    
   ${props => props.variant === 'pri10RGBA' && css`
        color: ${colorPrimary10};
        background-color: ${colorPrimary10RGBA};
        border-color: ${colorPrimary10RGBA};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: ${colorPrimary10};
            background-color: #ffffff;
            border-color: ${colorPrimary10};
         }
   `}  
    
    
    ${props => props.variant === 'pri11' && css`
        color: ${props => props.fill === 'none' ? colorPrimary11 : '#ffffff'};
        background-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary11};
        border-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary11};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: ${props => props.fill === 'none' ? colorPrimary11 : colorPrimary11};
            background-color: ${props => props.fill === 'none' ? 'transparent' : 'transparent'};
            border-color: ${props => props.fill === 'none' ? 'transparent' : colorPrimary11};
        }
    `}
    
     ${props => props.variant === 'pri11Outline' && css`
        color: ${colorPrimary11};
        background-color: transparent;
        border-color: ${colorPrimary11};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: #ffffff;
            background-color: ${colorPrimary11};
            border-color: ${colorPrimary11};
         }
    `}
    
   ${props => props.variant === 'pri11RGBA' && css`
        color: ${colorPrimary11};
        background-color: ${colorPrimary11RGBA};
        border-color: ${colorPrimary11RGBA};
        &.focus,:focus,:hover,:not(:disabled):not(.disabled).active,
        :not(:disabled):not(.disabled):active
        {
            color: ${colorPrimary11};
            background-color: #ffffff;
            border-color: ${colorPrimary11};
         }
   `}  
`;

export const BadgeLabel = styled(Badge)`
  color: #ffffff;
  line-height: 1.1;
  text-transform: uppercase;
  font-weight: 500;
   ${props => props.variant === 'pri' && css`
        background-color: ${colorPrimary};
   `}
   ${props => props.variant === 'pri2' && css`
        background-color: ${colorPrimary2};
   `}
   ${props => props.variant === 'pri3' && css`
        background-color: ${colorPrimary3};
   `}
   ${props => props.variant === 'pri4' && css`
        background-color: ${colorPrimary4};
   `}
    ${props => props.variant === 'pri5' && css`
        background-color: ${colorPrimary5};
   `}
    ${props => props.variant === 'pri6' && css`
        background-color: ${colorPrimary6};
   `}
    ${props => props.variant === 'pri7' && css`
        background-color: ${colorPrimary7};
   `}
    ${props => props.variant === 'pri8' && css`
        background-color: ${colorPrimary8};
   `}
    ${props => props.variant === 'pri9' && css`
        background-color: ${colorPrimary9};
   `}
    ${props => props.variant === 'pri10' && css`
        background-color: ${colorPrimary10};
   `}
    ${props => props.variant === 'pri11' && css`
        background-color: ${colorPrimary11};
   `}
    
    ${props => props.size === 'lg' && css`
        font-size: 16px;
        padding: 4px 10px;
   `}
    ${props => props.size === 'md' && css`
        font-size: 14px;
        padding: 4px 8px;
   `}
`;

export const CommonSection = styled.div`
    border-radius: 18px;
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
`;


export const CommonModal = styled(Modal)`
    .modal-content {
        border-radius: 18px;
        box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.3);
        background-color: #ffffff;
    }
    .modal-title {
        font-size: 22px;
    }
    .modal-body {
        padding: 1rem 30px;
    }
    .close {
        padding: 0;
        margin: 0;
        position: absolute;
        right: -20px;
        top: -40px;
        width: 31px;
        height: 31px;
        border-radius: 8px;
        border: solid 1px #ffffff;
        background-color: rgba(0, 0, 0, 0.5);
        color: #ffff;
        opacity: 1;
        font-weight: 100;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
    @media (min-width: 992px) {
        .modal-lg {
            max-width: 935px;
         }
    }
    ${props => props.type === 'location' && css`
        .modal-header {
            padding: 0;
            border: 0;
        }
   `}
`;
export const LocationBody = styled.div`
    position: relative;
    min-height: 650px;
    margin: -16px -30px;
    border-radius: 20px;
    overflow: hidden;
`;

export const LocationProfileCard = styled.div`
   position: absolute;
    z-index: 2;
    width: 280px;
    min-height: 380px;
    border-radius: 18px;
    border: solid 1px ${colorPrimary2};
    background-color: #ffffff;
    padding: 30px;
    text-align: center;
    color: ${colorPrimary2};
    top: 20px;
    left: 20px;
`;
export const LocationMap = styled.div`
    height: 650px;
    width: 100%;
`;

export const InputField = styled(Form.Group)`
    position: relative;
    & .form-control{
        height: 55px;
        padding: 6px 30px;
        font-size: 15px;
        font-weight: 500;
        line-height: normal;
        color: #44444f;
        border: 1px solid #425566;
        transition: 0.1s ease-out;
        border-radius: 100px;
        box-shadow: none;
        &::-ms-expand{
             background-color: transparent;
             border: 0;
        }
        &:-moz-focusring{
             color: transparent;
             text-shadow: 0 0 0 #2D3E50;
        }
        &:focus{
            color: #FC5A5A;
            background-color: #ffffff;
            border-color: #FC5A5A;
            outline: 0;
            box-shadow: none !important;
             & + label {
                color: #FC5A5A;
            }
        }
        &::placeholder {
            color: #44444f;
            opacity: 1;
        }
        &:placeholder-shown {
             & + label {
                top: 0;
                transform: translateY(-50%) scale(0.9);
            }
        }
        &:focus::-webkit-input-placeholder {
            opacity: 0;
        }
        &:disabled, &[readonly] {
            opacity: 1;
        }
        & + label {
          top: 0;
          transform: translateY(-50%) scale(0.9);
        }
    }
    & label {
        position: absolute;
        font-size: 12px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: #ffffff;
        color: #425566;
        padding: 0 0.3rem;
        margin: 0 30px;
        transition: .1s ease-out;
        transform-origin: left top;
        pointer-events: none;
    }
    & select::-ms-expand {
      display: none;
    }
    &.select{
       position: relative;
      &:after{
          content: '<>';
          font: 17px "Consolas", monospace;
          color: #333;
          -webkit-transform: rotate(90deg);
          -moz-transform: rotate(90deg);
          -ms-transform: rotate(90deg);
          transform: rotate(90deg);
          right: 15px;
          /*Adjust for position however you want*/
          top: 15px;
          padding: 0 0 2px;
          border-bottom: 1px solid #999;
          /*left line */
          position: absolute;
          pointer-events: none;
      } 
      & select{
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
      }
    }
`;

export const TextArea = styled(InputField)`
    & .form-control{
        resize: none;
        min-height: 150px;
        height: auto;
        border-radius: 10px;
        padding-top: 15px;
    }
`

export const Listing = styled.ul`
    padding: 0;
    list-style: none;
    margin-bottom: 0;
    & li:not(:last-child)
    {
        margin-bottom: 1rem;
        border-bottom: 1px solid #dee2e6;
    }
`

