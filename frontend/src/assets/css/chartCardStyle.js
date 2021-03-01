import styled, {css} from 'styled-components/macro'
import {
    colorPrimary2,
    colorPrimary3,
    colorPrimary,
    colorPrimary11,
    colorPrimary9,
    colorPrimary7, colorPrimary5, colorPrimary4, colorPrimary6, colorPrimary8, colorPrimary10
} from "../../globalStyle";
import {Card} from "react-bootstrap";

export const ChartDiv = styled(Card)`
    min-width: 100px;
    border-radius: 18px;
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    overflow: hidden;
    height: 269px;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    .card-header{
        background: transparent;
        border: none;
    }
    .card-footer{
        background: transparent;
        color: ${colorPrimary2};
        font-size: 12px;
    }
    .card-body{
         padding: 12px 15px
    }
    .infoBtn{
        position: absolute;
        right: 5px;
        top: 4px;
    }
    .chartBtn{
        width: 31px;
        height: 31px;
        border-radius: 8px;
        min-width: 0;
        min-height: 0;
        font-size: .875rem;
        line-height: 1.5;
    }
    ${props => props.size === 'sm' && css`
          width: 131px;
          height: 149px;
          ${ChartCount}{
            font-size: 26px;
          } 
          ${ChartSection}{
             height: 55px;
             margin-top: -12px;
          }    
    `}
    ${props => props.variant === 'pri' && css`
          border-color: ${colorPrimary};
    `}
    ${props => props.variant === 'pri2' && css`
          border-color: ${colorPrimary2};
    `}
    ${props => props.variant === 'pri3' && css`
          border-color: ${colorPrimary3};
    `}
    ${props => props.variant === 'pri4' && css`
          border-color: ${colorPrimary4};
    `}
    ${props => props.variant === 'pri5' && css`
          border-color: ${colorPrimary5};
    `}
    ${props => props.variant === 'pri6' && css`
          border-color: ${colorPrimary6};
    `}
     ${props => props.variant === 'pri7' && css`
          border-color: ${colorPrimary7};
    `}
     ${props => props.variant === 'pri8' && css`
          border-color: ${colorPrimary8};
    `}
     ${props => props.variant === 'pri9' && css`
          border-color: ${colorPrimary9};
    `}
     ${props => props.variant === 'pri10' && css`
          border-color: ${colorPrimary10};
    `}
     ${props => props.variant === 'pri11' && css`
          border-color: ${colorPrimary11};
    `}
`;
export const ChartTitle = styled.p`
    margin-bottom: 0;
    font-size: 14px;
`;
export const ChartCount = styled(ChartTitle)`
    font-size: 20px;
`;
export const ChartDate = styled.span`
    font-size: 13px;
    margin-left: 10px;
    margin-bottom: 0;
     color: #000000;
    ${props => props.variant === 'pri' && css`
         color: ${colorPrimary};
    `}
    ${props => props.variant === 'pri2' && css`
         color: ${colorPrimary2};
    `}
    ${props => props.variant === 'pri3' && css`
         color: ${colorPrimary3};
    `}
    ${props => props.variant === 'pri4' && css`
         color: ${colorPrimary4};
    `}
    ${props => props.variant === 'pri5' && css`
         color: ${colorPrimary5};
    `}
    ${props => props.variant === 'pri6' && css`
         color: ${colorPrimary6};
    `}
     ${props => props.variant === 'pri7' && css`
         color: ${colorPrimary7};
    `}
     ${props => props.variant === 'pri8' && css`
         color: ${colorPrimary8};
    `}
     ${props => props.variant === 'pri9' && css`
         color: ${colorPrimary9};
    `}
     ${props => props.variant === 'pri10' && css`
         color: ${colorPrimary10};
    `}
     ${props => props.variant === 'pri11' && css`
         color: ${colorPrimary10};
    `}  
`;
export const ChartSection = styled.div`
     width: 100%;
     height: 126px;
     margin-bottom: -12px;
`;

export const DetailCard = styled(ChartDiv)`
   .infoBtn .dropdown-toggle::after{
       content:none;
    }
    
`;


