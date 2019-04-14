import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";
import Logo3 from "../../img/logo3.png";
import "./Nav.css";

const Nav = () => {
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

      {/* <NavLink className="item" to="/tinder-mode" name="tinder-mode">
        Tinder mode
      </NavLink> */}
      <Menu.Menu position="right">
        <NavLink id="user" className="item" to="/profil/mydata" name="profil">
          <Icon name="user circle" className="nav__user" size="big" />
        </NavLink>

        <NavLink id="user" className="item" to="/signup" name="features">
          Zarejestruj się
        </NavLink>

        <NavLink menuid="user" className="item" to="/signin" name="features">
          Zaloguj się
        </NavLink>
      </Menu.Menu>
    </Menu>
  );
};

export default Nav;
