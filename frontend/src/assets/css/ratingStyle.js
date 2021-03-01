import styled, {css} from 'styled-components/macro'
import {
    colorPrimary11, colorPrimary5, colorPrimary7,
} from "../../globalStyle";

export const Rating = styled.ul`
    border-radius: 4px;
    border: solid 1px #000000;
    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    height: 20px;
    padding: 2px 8px 2px 0;
    list-style: none;
    & .starts:focus{
      outline: none; 
     }
    & .starts span:not(:last-of-type){
        margin-right: .3rem;
        vertical-align: 0;
    }
    ${props => props.type === "simple" && css`
        border: none;
        margin-bottom: 4px;
        ${RatingLabel}{
           background: transparent !important;
           color: #000;
           margin-left: 0;
           margin-right: 2px;
           margin-top: 1px;
        }
    `}
    ${props => props.variant === 'pri5' && css`
        ${RatingLabel}{
          background:  ${colorPrimary5};
        }
    `}
     ${props => props.variant === 'pri7' && css`
       ${RatingLabel}{
           background:  ${colorPrimary7};
        }
    `}
     ${props => props.variant === 'pri11' && css`
       ${RatingLabel}{
           background:  ${colorPrimary11};
        }
    `}
`;
export const RatingLabel = styled.span`
    display: inline-flex;
    font-size: 13px;
    font-weight: 500;
    color: #fff;
    width: 26px;
    height: 26px;
    border-radius: 4px;
    background-color: black;
    justify-content: center;
    align-items: center;
    margin-left: -1px;
    margin-right: 8px;
    margin-top: -2px;
`;
