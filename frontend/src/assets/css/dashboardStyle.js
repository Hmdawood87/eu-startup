import styled from 'styled-components/macro'
import {CommonSection} from "../../globalStyle";

export const DashBoardPage = styled.div`

`;
export const TopCards = styled.section`
    display: grid;
    grid-template-columns: repeat(5, 316px);
    grid-template-rows: 1fr;
    gap: 8px 15px;
    //grid-template-areas: ". . . . .";
    > .col, > [class*=col-]{
         padding-right: 10px;
         padding-left: 10px;
    }
    .xls-card{
         display: none;
    }
    @media (max-width: 1919px) {
        grid-template-columns: repeat(5, 300px);
        //grid-template-areas: ". . . .";
    }
    @media (max-width:1834px) {
      .xls-card{
         display: block;
       }
       grid-template-columns: repeat(4, 320px);
    }
    @media (max-width: 1599px) {
        grid-template-columns: repeat(4, 1fr);
        //grid-template-columns: 315px 315px 315px 315px;
        //grid-template-areas: ". . . .";
    }
     @media (max-width: 1299px) {
        grid-template-columns: repeat(3, 1fr);
        //grid-template-columns: 315px 315px 315px;
        //grid-template-areas: ". . .";
     }
`;
export const DashboardSlider = styled.section`
    display: grid;
    grid-template-columns: auto 330px;
    margin-right: -10px;
    margin-left: -10px;
    @media all and (max-width:1834px) {
        grid-template-rows: 100%;
        grid-template-columns: auto;
    }
`;
export const SideLeft = styled.div`
    padding-right: 10px;
    padding-left: 10px;
`;
export const SideRight = styled(SideLeft)`
    @media all and (max-width:1834px) {
      display: none;
    }
`;

export const SlideContent = styled(CommonSection)`
    padding: 30px 30px 20px;
    margin-bottom: 1rem;
`;
export const SlideCards = styled.ul`
    margin-bottom: 0;
    .list-inline-item{
       margin-bottom: 1rem;
       &:not(:last-child){
        margin-right: 1rem;
       }
    }
`;

export const ContentListing = styled.div`
    
`;

export const ActionBtns = styled(SlideCards)`
    .list-inline-item{
       margin-bottom: 0;
       &:not(:last-child){
        margin-right: 50px;
       }
    }
`;

export const SlideToolBar = styled(CommonSection)`
    min-height: 80px;
    padding: 15px 20px;
    margin-bottom: 20px;
`;

export const NewVendorLists = styled.div`
    height:68vh;
    overflow-y: auto;
    overflow-x: hidden;
`;
export const AssignVendorLists = styled(NewVendorLists)`
    height: 60vh;
`;

export const PaymentRequestListing = styled.div`
    font-size: 12px;
    max-height: 170px;
    border-radius: 9px;
    background-color: #f7f7f7;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 10px 15px;
`;
