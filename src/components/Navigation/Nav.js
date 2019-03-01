import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import Logo from "../../img/logo.png";
import Test from "./Test.js";

const Nav = () => {
  return (
    <Menu stackable>
      <NavLink className="item" exact to="/">
        <img src={Logo} alt="Logo" />
      </NavLink>

      <NavLink className="item" to="/szukaj" name="features">
        Szukaj
      </NavLink>

      <NavLink className="item" to="/tinder-mode" name="tinder-mode">
        Tinder mode
      </NavLink>

      <NavLink className="item" to="/profil" name="profil">
        Profil
      </NavLink>
    </Menu>
  );
};

export default Nav;
