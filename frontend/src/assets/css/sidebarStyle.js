import styled, {css} from 'styled-components/macro'
import {
    colorPrimary2,
} from "../../globalStyle";

import { Link } from 'react-router-dom';

export const SideBarDiv = styled.div`
    min-width: 223px;
    max-width: 223px;
    padding: 15px 0;
    ${props => props.active && css`
        min-width: 100px;
        max-width: 100px;
        text-align: center;
        background: #f7f7f7;
    `}
`;
export const SideBarListing = styled.ul`
    padding-left: 0;
    list-style: none; 
`;

export const SideBarList = styled.li`
    padding-left: 0;
    list-style: none; 
`;
export const SideBarIcon = styled.span`
     display: inline-block;
     margin-right: 20px; 
     & .active{
       display: none;
     }
     & .normal{
        display: inline-block;
     }
`;

// export const SideBarLink = styled.a`
export const SideBarLink = styled(Link)`
    font-size: 15px;
    line-height: normal;
    color: #000000;
    padding: 10px 10px 10px 15px;
    width: 100%;
    display: block;
    border-left: 3px solid transparent;
    margin-bottom: 10px;
    &:hover, &:focus{
        color: ${colorPrimary2};
        border-width: 0 0 0 3px;
        border-style: solid;
        border-image: linear-gradient(to bottom,${colorPrimary2},rgba(181, 93, 93, 0)) 1 100%;
        text-decoration: none;
        ${SideBarIcon}{
            & .active{
              display: inline-block; 
            }
            & .normal{
              display: none;
            }
        }
    }
    ${props => props.active && css`
        color: ${colorPrimary2};
        border-width: 0 0 0 3px;
        border-style: solid;
        border-image: linear-gradient(to bottom,${colorPrimary2},rgba(181, 93, 93, 0)) 1 100%;
        ${SideBarIcon}{
         & .active{
            display: inline-block; 
          }
          & .normal{
            display: none;
          }
        }
    `}
`;


