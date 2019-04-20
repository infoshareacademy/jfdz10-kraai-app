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
import "./Sign.css";

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
    return (
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.handleOnAuthStateChanged)
        .catch(function(error) {
          return alert(`Nie znaleziono użytkownika.`);
        })
    );
  };

  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then()
      .catch(function(error) {
        return `${error.code} ${error.message}`;
      });
  };

  handleOnAuthStateChanged = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        window.location = "/profil/mydata";
      }
    });
  };

  render() {
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
            <Form size="large">
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

                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={this.handleSignIn}
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

export default SignIn;
