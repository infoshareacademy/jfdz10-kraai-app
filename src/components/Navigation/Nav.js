import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import Logo3 from "../../img/logo3.png";
import "./Nav.css";

const Nav = () => {
  return (
    <Menu stackable>
      <NavLink className="item" exact to="/">
        <img src={Logo3} alt="Logo" />
      </NavLink>

      <NavLink className="item" to="/dashboard" name="dashboard">
        dashboard
      </NavLink>

      <NavLink className="item" to="/szukaj" name="features">
        Szukaj
      <NavLink className="item" to="/shelters" name="features">
        Schroniska
      </NavLink>

      <NavLink className="item" to="/animals" name="features">
        Lista zwierzaków
      </NavLink>

      <NavLink className="item" to="/tinder-mode" name="tinder-mode">
        Tinder mode
      </NavLink>

      <NavLink className="item" to="/profil/mydata" name="profil">
        Profil
      </NavLink>
      <NavLink className="item" to="/zwierzak" name="pet">
        Zwierzak
      </NavLink>
      <NavLink className="item" to="/schronisko" name="shelter">
        Schronisko
      </NavLink>
    </Menu>
  );
};

export default Nav;
