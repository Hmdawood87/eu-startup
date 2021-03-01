import React, { Component } from "react";
import {
  Card,
  Form,
  Button,
  Row,
  Col
} from "react-bootstrap";
import api from "../../services/backend";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/img/Logo@2x.png";
import axios from "axios";
import {
  AuthCard,
  AuthPage,
  CompanyLogo,
  CompanyLogoSubText,
  CompanyLogoText
} from "../../assets/css/authStyle";
import {
  Btn,
  Img,
  InputField
} from "../../globalStyle";
import { Redirect } from "react-router-dom";
import { Fragment } from "react";

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: true,
      signUp: false,
      setValidated: false,
      org: false,
      email: "",
      org_name: "",
      user_name: "",
      org_email: "",
      org_phone: "",
      user_email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleChange = e => {
    // console.log("value on change ", e.target);
    this.setState({
      [e.target.name]: e.target.value
    });
    const form = e.currentTarget;
    if (form.checkValidity()==true){
       this.setState({
        setValidated:true
    });
    }
  };

  handleSubmit = e => {
    // console.log(
    //   "calling handle sunmitt",
    //   e.currentTarget
    // );
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      // e.stopPropagation();
    }
    {
      this.state.signIn
        ? api
            .post(`organization/login`, {
              email: this.state.email,
              password: this.state.password
            })
            .then(res => {
              console.log(res.data);
              if (res.data.success) {
                if (res.data.data.token) {
                  localStorage.setItem(
                    "_property_matters_360_token",
                    res.data.data.token
                  );

                  localStorage.setItem(
                    "_property_matters_360_user",
                    JSON.stringify(res.data.data.user)
                  );

                  // return <Redirect to='/dashboard'/>;
                  this.props.history.push(
                    "/dashboard"
                  );
                }
              }
            })
        : api
            .post(`organization/signup`, {
              organization: {
                name: this.state.org_name,
                email: this.state.org_email,
                phone: this.state.org_phone
              },
              user: {
                name: this.state.user_name,
                email: this.state.user_email,
                password: this.state.password,
                password_confirmation: this.state
                  .confirmPassword
              }
            })
            .then(res => {
              if(res.data.status){
                alert(res.data.data);
              }
              console.log(res);
            }, err => {
              console.log(err);
            });
    }
    this.setState({ setValidated: true });
  };

  render() {
    return (
      <AuthPage>
        <AuthCard>
          <Card.Body>
            <CompanyLogo>
              <Img src={Logo} alt="logo" />
            </CompanyLogo>
            <div className="text-center">
              <CompanyLogoText className="logoText-top">
                PROPERTY
              </CompanyLogoText>
              <CompanyLogoSubText className="logoText-bottom">
                MATTERS 360
              </CompanyLogoSubText>
            </div>
            {this.state.signIn ? (
              <div className="text-center mb-4">
                <Card.Title
                  className="heading1 mb-0"
                  as="h1"
                >
                  Sign in
                </Card.Title>
                <Card.Text>
                  Just sign in if you have an
                  account in here
                </Card.Text>
              </div>
            ) : (
              <div className="text-center mb-4">
                <Card.Title
                  className="heading1 mb-0"
                  as="h1"
                >
                  Sign up
                </Card.Title>
                <Card.Text>
                  Just sign up if you have no
                  account in here
                </Card.Text>
              </div>
            )}
            <Form
              noValidate
              validated={this.state.setValidated}
            >
              {this.state.signIn == false &&
              this.state.org == false ? (
                <>
                  <InputField>
                    <Form.Control
                      value={this.state.org_name}
                      name="org_name"
                      type="text"
                      required
                      placeholder="soeraji"
                      onChange={this.handleChange}
                    />
                    <Form.Label>
                      Your Organization Name
                    </Form.Label>
                  </InputField>
                  <InputField>
                    <Form.Control
                      value={this.state.org_email}
                      name="org_email"
                      type="email"
                      required
                      placeholder="soeraji@squareteam.com"
                      onChange={this.handleChange}
                    />
                    <Form.Label>
                      Your Organization Email
                    </Form.Label>
                  </InputField>
                  <InputField>
                    <Form.Control
                      value={this.state.org_phone}
                      name="org_phone"
                      type="text"
                      required
                      placeholder="+923417656271"
                      onChange={this.handleChange}
                    />
                    <Form.Label>
                      Your Organization Conatct No
                    </Form.Label>
                  </InputField>
                </>
              ) : (
                ""
              )}
              {this.state.org == true &&
              this.state.signIn == false ? (
                <>
                  <InputField>
                    <Form.Control
                      value={this.state.user_name}
                      name="user_name"
                      type="text"
                      required
                      placeholder="soeraji"
                      onChange={this.handleChange}
                    />
                    <Form.Label>
                      Your Name
                    </Form.Label>
                  </InputField>
                  <InputField>
                    <Form.Control
                      value={
                        this.state.user_email
                      }
                      name="user_email"
                      type="email"
                      required
                      placeholder="soeraji@squareteam.com"
                      onChange={this.handleChange}
                    />
                    <Form.Label>
                      Your Email
                    </Form.Label>
                  </InputField>
                </>
              ) : (
                ""
              )}
              {this.state.signIn ? (
                <InputField>
                  <Form.Control
                    value={this.state.email}
                    name="email"
                    type="email"
                    required
                    placeholder="soeraji@squareteam.com"
                    onChange={this.handleChange}
                  />

                  <Form.Label>
                    Your Email / Username
                  </Form.Label>
                </InputField>
              ) : (
                ""
              )}
              {this.state.org == true ? (
                <>
                  <InputField>
                    <Form.Control
                      name="password"
                      type="password"
                      value={this.state.password}
                      placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                      onChange={this.handleChange}
                      required
                    />
                    <Form.Label>
                      Enter Password
                    </Form.Label>
                    {/*<Form.Control.Feedback>Looks good!</Form.Control.Feedback>*/}
                  </InputField>
                  <InputField>
                    <Form.Control
                      name="confirmPassword"
                      type="password"
                      value={
                        this.state.confirmPassword
                      }
                      placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                      onChange={this.handleChange}
                      required
                    />
                    <Form.Label>
                      Confirm Password
                    </Form.Label>
                  </InputField>
                </>
              ) : (
                ""
              )}
              {this.state.signIn == true ? (
                <>
                  <InputField>
                    <Form.Control
                      name="password"
                      type="password"
                      value={this.state.password}
                      placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                      onChange={this.handleChange}
                      required
                    />
                    <Form.Label>
                      Enter Password
                    </Form.Label>
                    {/*<Form.Control.Feedback>Looks good!</Form.Control.Feedback>*/}
                  </InputField>
                </>
              ) : (
                ""
              )}

              {this.state.signIn ? (
                <Row className="align-items-center no-gutters">
                  <Col xs="6" className="mb-3">
                    <label
                      className="control control--checkbox mb-0"
                      htmlFor="remember"
                    >
                      Remember Me
                      <input
                        type="checkbox"
                        name="remember"
                        id="remember"
                      />
                      <div className="control__indicator" />
                    </label>
                  </Col>
                  <Col
                    xs="6"
                    className="text-right mb-3"
                  >
                    <Btn
                      fill="none"
                      className="font-weight-md"
                      as="a"
                      href="/reset-password"
                      style={{ fontSize: "14px" }}
                    >
                      Forgot Your Password?
                    </Btn>
                  </Col>
                </Row>
              ) : (
                ""
              )}
              {this.state.signIn ? (
                <React.Fragment>
                  <div className="mb-3">
                    <Btn
                      onClick={this.handleSubmit}
                      size="lg"
                      variant="gradient"
                      rounded="true"
                      block

                    >
                      Login
                    </Btn>
                  </div>
                  <Form.Group className="text-center mb-3">
                    <p className="mb-0">
                      Don't have an account?
                      <a
                        onClick={() =>
                          this.setState({
                            signIn: false
                          })
                        }
                        href="#"
                        className="text2"
                      >
                        Sign up
                      </a>
                    </p>
                  </Form.Group>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {this.state.org == true ? (
                    <>
                      <div className="mb-3">
                        <Btn
                          onClick={() =>
                            this.setState({
                              org: false
                            })
                          }
                          size="lg"
                          variant="gradient"
                          rounded="true"
                          block
                        >
                          Back
                        </Btn>
                      </div>
                      <div className="mb-3">
                        <Btn
                          onClick={
                            this.handleSubmit
                          }
                          size="lg"
                          variant="gradient"
                          rounded="true"
                          block
                        >
                          Sign up
                        </Btn>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="mb-3">
                        <Btn
                          onClick={() =>
                            this.setState({
                              org: true
                            })
                          }
                          size="lg"
                          variant="gradient"
                          rounded="true"
                          block
                        >
                          Next
                        </Btn>
                      </div>
                    </>
                  )}

                  <Form.Group className="text-center mb-3">
                    <p className="mb-0">
                      If you have an account?{" "}
                      <a
                        onClick={() =>
                          this.setState({
                            signIn: true,
                            org: false
                          })
                        }
                        href="#"
                        className="text2"
                      >
                        Sign in
                      </a>
                    </p>
                  </Form.Group>
                </React.Fragment>
              )}
            </Form>
            <ul className="list-inline text-center mb-0">
              <li className="list-inline-item">
                <Button
                  variant="link"
                  className="socialLink socialLink--fb"
                >
                  <FontAwesomeIcon
                    icon={["fab", "facebook-f"]}
                  />
                </Button>
              </li>
              <li className="list-inline-item">
                <Button
                  variant="link"
                  className="socialLink socialLink--tw"
                >
                  <FontAwesomeIcon
                    icon={["fab", "twitter"]}
                  />
                </Button>
              </li>
              <li className="list-inline-item">
                <Button
                  variant="link"
                  className="socialLink socialLink--gPlus"
                >
                  <FontAwesomeIcon
                    icon={[
                      "fab",
                      "google-plus-g"
                    ]}
                  />
                </Button>
              </li>
            </ul>
          </Card.Body>
        </AuthCard>
      </AuthPage>
    );
  }
}

export default withRouter(Authentication);
