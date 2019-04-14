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

      <NavLink className="item" to="/tinder-mode" name="tinder-mode">
        Tinder mode
      </NavLink>
      <NavLink className="item" to="/profil/mydata" name="profil">
        <Icon name="user circle" className="nav__user" size="big" />
      </NavLink>
    </Menu>
  );
};

export default Nav;
