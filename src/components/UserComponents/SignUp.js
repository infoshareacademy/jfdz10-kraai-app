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

class SignUp extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  handleInputPasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="login-form">
        <style>
          {`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}
        </style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src={logo} /> Zarejestruj się
            </Header>
            <Form
              size="large"
              onSubmit={this.handleFormSubmit}
            >
              <Segment stacked>
                <Form.Input
                  fluid
                  name="email"
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  onChange={this.handleInputEmailChange}
                />
                <Form.Input
                  fluid
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleInputPasswordChange}
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
