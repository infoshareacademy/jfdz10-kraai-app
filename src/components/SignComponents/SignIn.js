import React, { Component } from "react";
import {connect} from 'react-redux'
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import logo from "../../img/logo.png";
import firebase from "firebase";
import "./Sign.css";

import {signIn, emailInputChange , passwordInputChange, clearInputs} from '../../actions/auth'

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = e => {
    e.currentTarget.name === 'email' ?
    this.props.emailInputChange(e.target.value) :
    this.props.passwordInputChange(e.target.value)
  };

  handleSignIn = (e) => {
    e.preventDefault()
    this.props.signIn()
  };

  handleSignOut = () => {
    
  };

  componentWillUnmount(){
    this.props.clearInputs()
  }

  render() {
    const {emailInput, passwordInput} = this.props
    return (
      <div className="login-form">
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src={logo} /> Zaloguj się
            </Header>
            <Form size="large" onSubmit={(e) => this.handleSignIn(e)}>
              <Segment stacked>
                <Form.Input
                  name="email"
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  value={emailInput}
                  onChange={this.handleInputChange}
                />
                <Form.Input
                  fluid
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  value={passwordInput}
                  onChange={this.handleInputChange}
                />

                <Button
                  color="teal"
                  fluid
                  size="large"
                  type='submit'
                >
                  Zaloguj
                </Button>
                <Button
                  style={{ marginTop: "10px" }}
                  onClick={this.handleSignOut}
                  color="teal"
                  fluid
                  size="large"
                >
                  Wyloguj
                </Button>
              </Segment>
            </Form>
            <Message>
              Nie masz konta? <a href="signup">Dolącz do nas!</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  emailInput: state.auth.emailInput,
  passwordInput: state.auth.passwordInput
});

const mapDispatchToProps = {
  signIn,
  emailInputChange,
  passwordInputChange,
  clearInputs
};


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
