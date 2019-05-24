import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Icon
} from "semantic-ui-react";
import logo from "../../img/logo.png";
import "./Sign.css";
import {authRef} from '../../config/firebase'

import {
  signIn,
  emailInputChange,
  passwordInputChange,
  clearInputs,
  signInGoogle
} from "../../actions/auth";
import {activeItemChange} from '../../actions/nav'

class SignIn extends Component {
  handleInputChange = e => {
    e.currentTarget.name === "email"
      ? this.props.emailInputChange(e.target.value)
      : this.props.passwordInputChange(e.target.value);
  };

  handleSignIn = e => {
    e.preventDefault();
    this.props.signIn();
  };

  componentWillUnmount() {
    this.props.clearInputs();
  }

  render() {
    const { emailInput, passwordInput, user, signInGoogle , activeItemChange} = this.props;
    return (
      <Fragment>
        {user ? (
          <Redirect to="/profil/mydata" />
        ) : (
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
                <Form size="large" onSubmit={e => this.handleSignIn(e)}>
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

                    <Button color="teal" fluid size="large" type="submit">
                      Zaloguj
                    </Button>
                  </Segment>
                </Form>
                <Button color="google plus" fluid size="large" onClick={() => signInGoogle()}>
                  <Icon name="google" /> Zaloguj z Google
                </Button>
                <Message>
                  Nie masz konta? <Link to="/signup" name="signup" onClick={(event) => activeItemChange(event.currentTarget.name )}>Dołącz do nas!</Link>
                </Message>
                <Message>
                  Nie pamiętasz hasła? <Button onClick={() => authRef.sendPasswordResetEmail(emailInput).then(() => alert('Sprawdź swoją skrzynkę mailową')).catch(() => alert('Wpisz adres email'))}>Zresetuj hasło!</Button>
                </Message>
              </Grid.Column>
            </Grid>
          </div>
        )}
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  emailInput: state.auth.emailInput,
  passwordInput: state.auth.passwordInput,
  user: state.auth.user
});

const mapDispatchToProps = {
  signIn,
  emailInputChange,
  passwordInputChange,
  clearInputs,
  signInGoogle,
  activeItemChange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
