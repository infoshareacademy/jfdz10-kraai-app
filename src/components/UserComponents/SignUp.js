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

class SignUp extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSignUpInputChange = e => {
    this.setState({
      [e.currentTarget.name]: e.target.value
    });
  };

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(function() {
        alert(`Zarejestrowano pomyślnie`);
      })
      .catch(function(error) {
        return console.log(`${error.code} ${error.message}`);
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
              <Image src={logo} /> Zarejestruj się
            </Header>
            <Form size="large" onSubmit={this.handleSignUp}>
              <Segment stacked>
                <Form.Input
                  fluid
                  name="email"
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  onChange={this.handleSignUpInputChange}
                />
                <Form.Input
                  fluid
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleSignUpInputChange}
                />

                <Button type="submit" color="teal" fluid size="large">
                  Zarejestruj
                </Button>
              </Segment>
            </Form>
            <Message>
              Masz już konto? <a href="signin">Zaloguj się!</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default SignUp;
