import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
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
import {
    signUp,
    signInGoogle,
    emailInputChange,
    passwordInputChange,
    clearInputs
} from "../../actions/auth";
import { activeItemChange } from "../../actions/nav";

class SignUp extends Component {
    handleInputChange = e => {
        e.currentTarget.name === "email"
            ? this.props.emailInputChange(e.target.value)
            : this.props.passwordInputChange(e.target.value);
    };

    handleSignUp = e => {
        e.preventDefault();
        this.props.signUp();
    };

    componentWillUnmount() {
        this.props.clearInputs();
    }

    render() {
        const {
            emailInput,
            passwordInput,
            user,
            signInGoogle,
            activeItemChange
        } = this.props;
        return user ? (
            <Redirect to="/" />
        ) : (
            <div className="login-form login">
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
                                    type="submit"
                                    color="teal"
                                    fluid
                                    size="large"
                                >
                                    Zarejestruj
                                </Button>
                            </Segment>
                        </Form>
                        <Button
                            color="google plus"
                            fluid
                            size="large"
                            onClick={() => signInGoogle()}
                        >
                            <Icon name="google" /> Zaloguj z Google
                        </Button>
                        <Message>
                            Masz już konto?{" "}
                            <NavLink
                                to="/signin"
                                name="signin"
                                onClick={event =>
                                    activeItemChange(event.currentTarget.name)
                                }
                            >
                                Zaloguj się!
                            </NavLink>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    emailInput: state.auth.emailInput,
    passwordInput: state.auth.passwordInput,
    user: state.auth.user
});

const mapDispatchToProps = {
    signUp,
    emailInputChange,
    passwordInputChange,
    clearInputs,
    signInGoogle,
    activeItemChange
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
