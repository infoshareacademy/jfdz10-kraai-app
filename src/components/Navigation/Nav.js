import React, { Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";
import Logo3 from "../../img/logo3.png";
import "./Nav.css";
import { logOut } from "../../actions/auth";

const Nav = ({ logOut, user }) => {
  return (
    <Menu stackable>
      <NavLink className="item" exact to="/">
        <img src={Logo3} alt="Logo" />
      </NavLink>

      <NavLink className="item" to="/shelters" name="features">
        Schroniska
      </NavLink>

      <NavLink className="item" to="/animals" name="features">
        Zwierzaki
      </NavLink>

      <Menu.Menu position="right">
        {user ? (
          <Fragment>
            <NavLink
              id="nav-profile"
              className="item"
              to="/profil/mydata"
              name="profil"
            >
              <Icon name="user circle" className="nav__user" size="big" />
            </NavLink>
            <a
              id="nav-log-out"
              className="item"
              name="features"
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
              name="features"
            >
              Zarejestruj się
            </NavLink>
            <NavLink
              id="nav-sign-in"
              className="item"
              to="/signin"
              name="features"
            >
              Zaloguj
            </NavLink>
          </Fragment>
        )}
      </Menu.Menu>
    </Menu>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = {
  logOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
