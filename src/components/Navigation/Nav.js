import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";
import Logo3 from "../../img/logo3.png";
import "./Nav.css";
import { logOut } from "../../actions/auth";
import { activeItemChange } from "../../actions/nav";

class Nav extends Component {
    render() {
        const { user, logOut, activeItem, activeItemChange } = this.props;

        return (
            <Menu stackable>
                <NavLink
                    className="item"
                    to="/"
                    name="home"
                    active={activeItem === "home"}
                    onClick={event =>
                        activeItemChange(event.currentTarget.name)
                    }
                >
                    <img src={Logo3} alt="Logo" name />
                </NavLink>

                <NavLink
                    className="item"
                    to="/shelters"
                    name="shelters"
                    active={activeItem === "shelters"}
                    onClick={event =>
                        activeItemChange(event.currentTarget.name)
                    }
                >
                    Schroniska
                </NavLink>

                <NavLink
                    className="item"
                    to="/animals"
                    name="animals"
                    active={activeItem === "animals"}
                    onClick={event =>
                        activeItemChange(event.currentTarget.name)
                    }
                >
                    Zwierzaki
                </NavLink>

                {/* <NavLink
                    className="item"
                    to="/add_animal"
                    name="animals"
                    active={activeItem === "animals"}
                    onClick={event =>
                        activeItemChange(event.currentTarget.name)
                    }
                >
                    Dodaj zwierzaka
                </NavLink>

                <NavLink
                    className="item"
                    to="/add_shelter"
                    name="animals"
                    active={activeItem === "animals"}
                    onClick={event =>
                        activeItemChange(event.currentTarget.name)
                    }
                >
                    Dodaj schronisko
                </NavLink> */}

                <Menu.Menu position="right">
                    {user ? (
                        <Fragment>
                            <NavLink
                                id="nav-profile"
                                className="item"
                                to="/profil/mydata"
                                name="profil"
                                active={activeItem === "profil"}
                                onClick={this.handleItemClick}
                            >
                                <Icon
                                    name="user circle"
                                    className="nav__user"
                                    size="big"
                                />
                            </NavLink>
                            <a
                                id="nav-log-out"
                                className="item"
                                name="logout"
                                onClick={() => logOut()}
                            >
                                Wyloguj{" "}
                            </a>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <NavLink
                                id="nav-sign-up"
                                className="item"
                                to="/signup"
                                name="signup"
                                active={activeItem === "signup"}
                                onClick={event =>
                                    activeItemChange(event.currentTarget.name)
                                }
                            >
                                Rejestracja
                            </NavLink>
                            <NavLink
                                id="nav-sign-in"
                                className="item"
                                to="/signin"
                                name="signin"
                                active={activeItem === "signin"}
                                onClick={event =>
                                    activeItemChange(event.currentTarget.name)
                                }
                            >
                                Zaloguj
                            </NavLink>
                        </Fragment>
                    )}
                </Menu.Menu>
            </Menu>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
    activeItem: state.nav.activeItem
});

const mapDispatchToProps = {
    logOut,
    activeItemChange
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);
