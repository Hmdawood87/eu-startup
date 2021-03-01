import styled, {css} from 'styled-components/macro'
import {
    ImgWrap,
    colorPrimary2,
    colorPrimary3,
    colorPrimary,
    colorPrimary11,
    colorPrimary9,
    colorPrimary7, colorPrimary5, colorPrimary4, NotificationDot
} from "../../globalStyle";

export const Avater = styled(ImgWrap)`
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    border-radius: 50%;
    border-width:2px;
    border-color: ${colorPrimary2};
    border-style:solid;
    overflow: visible;
    & .avatarBtn{
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 2;
        padding: 0;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        min-width: auto;
        min-height: auto;
    }
    & .avatarBtnIcon {
        vertical-align: middle;
    }
    
    ${props => props.variant === 'primary' && css`
       border-color:${colorPrimary};
    `}
    ${props => props.variant === 'primary2' && css`
     border-color:  ${colorPrimary2};`}
    ${props => props.variant === 'primary3' && css`
     border-color:  ${colorPrimary3};`}
    ${props => props.variant === 'primary4' && css`
     border-color:  ${colorPrimary4};`}
    ${props => props.variant === 'primary5' && css`
     border-color:  ${colorPrimary5};`}
    ${props => props.variant === 'primary7' && css`
     border-color:  ${colorPrimary7};`}
    ${props => props.variant === 'primary9' && css`
     border-color:  ${colorPrimary9};`}
    ${props => props.variant === 'primary11' && css`
     border-color:  ${colorPrimary11};`}
    
    ${props => props.size === 'xl' && css`
        width: 150px;
        height: 150px;
    `}
    
     ${props => props.size === 'lg' && css`
      width: 90px;
      height: 90px;
      & .avatarDot{
            width: 16px;
            height: 16px;
            border-width:3px;;
            right: 4px;
            top: 4px;
      }
    `}
     ${props => props.size === 'md' && css`
          width: 50px;
          height: 50px;
          border-width:1px;
     & .avatarDot{
            width: 12px;
            height: 12px;
            border-width:2px;;
            right: -2px;
            top: 4px;
      }
     & .avatarBtn{
            width: 20px;
            height: 20px;
            right: -6px;
     }
     & .avatarBtnIcon {
           width: 10px;
           height: 10px;
    }
`}
     ${props => props.size === 'sm' && css`
      width: 43px;
      height: 43px;
      border-width:1px;
      & .avatarDot{
        width: 10px;
        height: 10px;
        border-width:2px;;
        right: -1px;
        top: 2px;
      }
      & .avatarBtn{
         width: 18px;
         height: 18px;
         right: -6px;
     }
     & .avatarBtnIcon {
           width: 8px;
           height: 9px;
        }
    `}
     ${props => props.size === 'xs' && css`
          width: 35px;
          height: 35px;
          border-width:1px;
    `}   
`;
export const Dot = styled(NotificationDot)`
    background-color: #539fb7;
    border-color: #ffffff;
    border-style:solid;
`;


