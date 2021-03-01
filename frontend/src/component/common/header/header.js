import React from 'react';
import {Link, withRouter} from "react-router-dom";
import {Navbar, Nav, Media, Dropdown} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Logo from '../../../assets/img/Logo.svg';
import User from '../../../assets/img/user.svg';
import {MainHeader, LogoText, LogoTextBottom, UserName, UserSubName} from '../../../assets/css/headerStyle';
import {Img, ImgWrap, NotificationDot} from "../../../globalStyle";
import Avatar from "../avatar/Avatar";
import { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             me: JSON.parse(localStorage.getItem('_property_matters_360_user'))
        }
    }
    

    onLogout =()=> {
        localStorage.removeItem('_property_matters_360_token');
        localStorage.removeItem('_property_matters_360_user');
        this.props.history.push("/");
    }

    render() {
     return  (
        <MainHeader>
            <Navbar>
                <Navbar.Brand href="/dashboard" className="navbarBrand">
                    <Media className="align-items-center">
                        <img className="mr-2" src={Logo} alt="logo"/>
                        <Media.Body className="navbar-text">
                            <LogoText>PROPERTY</LogoText>
                            <LogoTextBottom as="p">
                                MATTERS 360
                            </LogoTextBottom>
                        </Media.Body>
                    </Media>
                </Navbar.Brand>
                <Nav className="ml-auto align-items-center mr-md-4">
                    {/*<Nav.Link href="#">*/}
                        {/*<span className="navbar-toggler-icon"/>*/}
                    {/*</Nav.Link>*/}
                    <Dropdown className="nav-item">
                        <NotificationDot bell></NotificationDot>
                        <Dropdown.Toggle as="a" aria-haspopup="true" aria-expanded="true" href="#" role="button"
                                         className="DropdownToggle nav-link" id="dropdown-basic">
                            <FontAwesomeIcon size="lg" icon={['far', 'bell']}/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="notificationMenu">
                            <Dropdown.Item href="#/noti-1" className="notificationLink">
                                <Media className="align-items-start">
                                    <Avatar
                                        size="xs"
                                        variant="primary2"
                                        cssClass="mr-3"
                                        avatarImg={User}
                                    />
                                    <Media.Body className="commonMedia__body">
                                        <p className="commonMedia__text">
                                            Lorem ipsum dolor sit amet, consectetu
                                        dolor sit amet, consectetu dolor sit amet, consectetu
                                        </p>
                                        <p className="commonMedia__text text-muted"><small>Yesterday at 4:32 PM</small></p>
                                    </Media.Body>
                                </Media>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/noti-2" className="notificationLink">
                                <Media className="align-items-start">
                                    <Avatar
                                        size="sm"
                                        cssClass="mr-3"
                                        avatarImg={User}
                                    />
                                    <Media.Body className="commonMedia__body">
                                        <p className="commonMedia__text">
                                            Lorem ipsum dolor sit amet, consectetu
                                            dolor sit amet, consectetu dolor sit amet, consectetu
                                        </p>
                                        <p className="commonMedia__text text-muted"><small>Yesterday at 4:32 PM</small></p>
                                    </Media.Body>
                                </Media>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/noti-3" className="notificationLink">
                                <Media className="align-items-start">
                                    <Avatar
                                        size="xs"
                                        cssClass="mr-3"
                                        avatarImg={User}
                                    />
                                    <Media.Body className="commonMedia__body">
                                        <p className="commonMedia__text">
                                            Lorem ipsum dolor sit amet, consectetu
                                            dolor sit amet, consectetu dolor sit amet, consectetu
                                        </p>
                                        <p className="commonMedia__text text-muted"><small>Yesterday at 4:32 PM</small></p>
                                    </Media.Body>
                                </Media>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="nav-item">
                        <Dropdown.Toggle aria-haspopup="true" as="div" aria-expanded="true" role="button"
                                         className="DropdownToggle nav-link" id="dropdown-basic">
                            <Media className="align-items-center">
                                <ImgWrap className="profileImg mr-2">
                                    <Img src={User} alt="user"/>
                                </ImgWrap>
                                <Media.Body className="profileDropdown__text mr-5">
                                    <UserName>{this.state.me.name}</UserName>
                                    <UserSubName as="p">
                                        {this.state.me.role.name}
                                    </UserSubName>
                                </Media.Body>
                                <FontAwesomeIcon className="DropdownArrow" icon="sort-down"/>
                            </Media>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="profile">Profile</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={this.onLogout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Navbar>
        </MainHeader>
     );  
    }
}

export default withRouter(Header);