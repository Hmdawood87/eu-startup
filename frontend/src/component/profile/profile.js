import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { DashBoardPage } from '../../assets/css/dashboardStyle';
import User from '../../assets/img/Bitmap.svg';
import UserMedia from "../common/list-items/user-media";
import { colorPrimary} from "../../globalStyle";

const Details = (props) => {



    return (
            <DashBoardPage>
            <Card>
                <Card.Header className="commonSection">
                    <h3>{props.title}</h3>
                </Card.Header>
                <Card.Body>
                    <UserMedia
                        iconColor={colorPrimary}
                        avatarSize="lg"
                        avatarVariant="primary2"
                        avatarClass="mr-3"
                        avatarImg={User}
                        name={props.data.name? props.data.name : ''}
                        contactNumber={props.data.mobile_no? props.data.mobile_no : ''}
                        isCheckin={true}
                        checkIn="2020-05-11:10:00:00 AM"
                    />
                   
                    <hr />
                        {props.data.email && <p className="border-bottom pb-3 mb-3">{props.data.email}</p>}
                        {props.data.email_verified_at && <p className="border-bottom pb-3 mb-3">{props.data.email_verified_at}</p>}
                        {props.data.phone_no && <p className="border-bottom pb-3 mb-3">{`Ph: ${props.data.phone_no}`}</p>}
                        {props.data.mobile_no && <p className="border-bottom pb-3 mb-3">{`Cell: ${props.data.mobile_no}`}</p>}
                        {props.data.organization_id && <p className="border-bottom pb-3 mb-3">{`organization: ${props.data.organization_id}`}</p>}
                        {props.data.address && <p className="border-bottom pb-3 mb-3">{`Address: ${props.data.address}`}</p>}
                        {props.data.country &&  <p className="border-bottom pb-3 mb-3">{`Country: ${props.data.country.name}`}</p>}
                        {props.data.state &&  <p className="border-bottom pb-3 mb-3">{`State: ${props.data.state.name}`}</p>}
                        {props.data.city &&  <p className="border-bottom pb-3 mb-3">{`City: ${props.data.city.name}`}</p>}
                        {props.data.created_at &&  <p className="border-bottom pb-3 mb-3">{`Created at: ${props.data.created_at}`}</p>}
                        {props.data.updated_at &&  <p className="border-bottom pb-3 mb-3">{`Updated at: ${props.data.updated_at}`}</p>}
                        {props.data.role &&  <p className="border-bottom pb-3 mb-3">{`Role: ${props.data.role.name}`}</p>}
                    
                    {props.children}
                </Card.Body>
            </Card>
            </DashBoardPage>
    );
}

export default class Profile extends Component {
    render() {
        return (
           <Details
            title={'Details'} 
            detailOf={'tenant'}
            data={{
                name: 'Zahir Junejo',
                email: 'zahir@techmate.com',
                phone_no: '3409434853',
                mobile_no: '343422424242',
                address: 'dsfdsfsfsfsf',
                country: {name: "Pakistan"},
                state: {name: "Punjab"},
                city: {name: "Lahore"},
                role: {name: 'junejo'}
            }}
            avatarImg={User} >
                <p>add more stuff here</p>
            </Details>
        )
    }
}