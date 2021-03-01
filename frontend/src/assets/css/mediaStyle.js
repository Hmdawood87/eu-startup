import styled, {css} from 'styled-components/macro'
import {
    colorPrimary12,
    colorPrimary2, ImgWrap,
} from "../../globalStyle";
import {Media} from "react-bootstrap";
import Map from '../img/map.svg'

export const InfoItem = styled(Media)`
   align-items: center;
   ${props => props.type === 'chat' && css`
        ${InfoText}{
            display: inline-block;
            border-radius: 6px;
            background-color: ${colorPrimary12};
            padding: 10px 15px;
        }
        &.right {
            ${InfoText}{
                float: right;
                background-color: ${colorPrimary2};
                color: #ffffff;
            }
        }
   `}
`;
export const InfoHeading = styled.h5`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 1rem;
`;

export const InfoText = styled.p`
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 10px;
`;

export const LocationAvatar = styled(ImgWrap)`
    width: 90px;
    height: 90px;
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.07);
    border-radius: 54px;
    border: solid 2px ${colorPrimary2};
    overflow: visible;
    margin-right: 15px;
    background: #ffffff url(${Map}) no-repeat center;
    background-size:cover;
`;


