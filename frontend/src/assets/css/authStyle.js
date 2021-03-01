import styled from 'styled-components/macro'
import {CommonSection, ImgWrap} from "../../globalStyle";
import Building from '../../assets/img/building_long.svg';
import {Card} from "react-bootstrap";

export const AuthPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url(${Building}) no-repeat bottom center;
    margin: -10px -14px 0;
`;

export const AuthCard = styled(Card)`
    padding:15px;
    width: 570px;
    min-height: 700px;
    border-radius: 41px;
    box-shadow: 0 3px 40px 0 rgba(0, 0, 0, 0.06);
    background-color: #ffffff;
    //margin: 30px 0;
    overflow: hidden;
    & .card-text {
        font-size: 18px;
        color: #808080;
        font-weight: normal;
        margin-bottom: 30px;
    }
`;

export const CompanyLogo = styled(ImgWrap)`
    width: 100px;
    height: 100px;
`;
export const CompanyLogoText = styled.h5`
    font-size: 25px;
    letter-spacing: normal;
    line-height: normal;
    font-weight:bold;
`;
export const CompanyLogoSubText = styled(CompanyLogoText)`
    font-weight: 500;
    font-size: 14px;
`;

