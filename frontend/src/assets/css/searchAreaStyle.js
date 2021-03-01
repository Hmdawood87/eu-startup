import styled, {css} from 'styled-components/macro'
import {
    colorPrimary,
    colorPrimary2, colorPrimary3, colorPrimary4, colorPrimary5, colorPrimary6, colorPrimary7,
} from "../../globalStyle";
import {Form} from "react-bootstrap";
import img from '../img/Seach-Icon-primary1.svg'
import img2 from '../img/Seach-Icon.svg'
import img3 from '../img/Seach-Icon-primary3.svg'
import img4 from '../img/Seach-Icon-primary4.svg'
import img5 from '../img/Seach-Icon-primary5.svg'
import img6 from '../img/Seach-Icon-primary6.svg'
import img7 from '../img/Seach-Icon-primary7.svg'

export const SearchSection = styled.div`
     > .dropdown{
         display: inline-block;
         margin-bottom: 1rem;
         top: -3px;
        > .btn{
            font-weight: 500;
            color: ${colorPrimary2};
            font-size: 18px;
         }    
    }
`;
export const SearchTitle = styled.h3`
    display: inline-block;
    margin-bottom: 1rem;
    margin-right: 1rem;
     ${props => props.variant === 'primary' && css`
            color: ${colorPrimary};
         `}
      ${props => props.variant === 'pri2' && css`
            color: ${colorPrimary2};
         `}
`;


export const SearchField = styled(Form.Control)`
    border-radius: 0;
    border-width: 0 0 1px 0;
    border-color: ${colorPrimary2};
    color: ${colorPrimary2};
    font-size: 14px;
    font-weight: 500;
    min-height: 45px;
    padding-left: 25px;
    background-image:  url(${img2});
    background-repeat:no-repeat;
    background-position:left center;
    ${props => props.variant === 'primary' && css`
        color: ${colorPrimary};
         background-image:  url(${img});
        border-color: ${colorPrimary};
        &::placeholder{
          color: ${colorPrimary};
        }
    `}
    ${props => props.variant === 'pri3' && css`
         color: ${colorPrimary3};
         background-image:  url(${img3});
         border-color: ${colorPrimary3}; 
        &::placeholder{
          color: ${colorPrimary3};
        }     
    `}
    ${props => props.variant === 'pri4' && css`
        color: ${colorPrimary4};
         background-image:  url(${img4});
        border-color: ${colorPrimary4}; 
        &::placeholder{
          color: ${colorPrimary4};
        }     
    `}
    ${props => props.variant === 'pri5' && css`
        color: ${colorPrimary5};
         background-image:  url(${img5});
        border-color: ${colorPrimary5}; 
        &::placeholder{
          color: ${colorPrimary5};
        }     
    `}
    ${props => props.variant === 'pri6' && css`
        color: ${colorPrimary6};
         background-image:  url(${img6});
        border-color: ${colorPrimary6}; 
        &::placeholder{
          color: ${colorPrimary6};
        }     
    `}
    ${props => props.variant === 'pri7' && css`
        color: ${colorPrimary7};
         background-image:  url(${img7});
        border-color: ${colorPrimary7}; 
        &::placeholder{
          color: ${colorPrimary7};
        }     
    `}                       
`;


