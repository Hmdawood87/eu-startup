import React, {Component} from 'react';
import {Card, Form, Button, Row, Col} from 'react-bootstrap';
import Logo from '../../assets/img/Logo@2x.png';
import {AuthCard, AuthPage, CompanyLogo, CompanyLogoSubText, CompanyLogoText} from "../../assets/css/authStyle";
import {Btn, Img, InputField} from "../../globalStyle";

class ResetPassword extends Component {
    render() {
        return (
            <AuthPage>
                <AuthCard>
                    <Card.Body>
                        <CompanyLogo>
                            <Img src={Logo} alt="logo"/>
                        </CompanyLogo>
                        <div className="text-center">
                            <CompanyLogoText className="logoText-top">PROPERTY</CompanyLogoText>
                            <CompanyLogoSubText className="logoText-bottom">
                                MATTERS 360
                            </CompanyLogoSubText>
                        </div>
                        <div className="text-center mb-4">
                            <Card.Title className="heading1 mb-0" as="h1">Reset Password</Card.Title>
                            <Card.Text>Reset Password if you forgot your password</Card.Text>
                        </div>
                        <Form>
                            <InputField controlId="password">
                                <Form.Control id="password" type="password"
                                              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"/>
                                <Form.Label>Enter Password</Form.Label>
                            </InputField>
                            <div className="mb-5">
                                <Btn type="submit" size="lg" variant="gradient" rounded block>Send Reset Link</Btn>
                            </div>
                            <Form.Group className="text-center mb-3">
                                <p className="mb-0">Don't have an account? 
                                    <a href="/" className="text2">Sign up</a>
                                </p>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </AuthCard>
            </AuthPage>
        );
    }
}

export default ResetPassword;
