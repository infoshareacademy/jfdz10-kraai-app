import React, { Component } from "react";
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
import "./UserPanel.css";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.currentTarget.name]: e.target.value
    });
  };

  handleSignIn = () => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(function() {
        alert(`Zalogowano pomyślnie`);
      })
      .catch(function(error) {
        return alert(`${error.code} ${error.message}`);
      });
  };

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        alert(`Wylogowano pomyślnie`);
      })
      .catch(function(error) {
        return `${error.code} ${error.message}`;
      });
  };

  render() {
    return (
      <div className="login-form">
        <style>
          {`
      
      `}
        </style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src={logo} /> Zaloguj się
            </Header>
            <Form size="large" onSubmit={this.handleSignIn}>
              <Segment stacked>
                <Form.Input
                  name="email"
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  onChange={this.handleInputChange}
                />
                <Form.Input
                  fluid
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleInputChange}
                />

                <Button color="teal" fluid size="large">
                  Zaloguj
                </Button>
                <Button onClick={this.signOut} color="teal" fluid size="large">
                  wyloguj
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
export default SignIn;
