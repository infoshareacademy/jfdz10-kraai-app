import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import Logo from "../../img/logo.png";
import Test from "./Test.js";

export default class Nav extends Component {
  state = {};

  handleItemClick = (event, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Router>
        <Menu stackable>
          <Link className="item" to="/szukaj">
            <img src={Logo} alt="Logo" />
          </Link>

          <Link
            className="item"
            to="/szukaj"
            name="features"
            active={activeItem === "features"}
            onClick={this.handleItemClick}
          >
            Szukaj
          </Link>

          <Link
            className="item"
            to="/szukaj"
            name="testimonials"
            active={activeItem === "testimonials"}
            onClick={this.handleItemClick}
          >
            Tinder mode
          </Link>

          <Link
            className="item"
            to="/szukaj"
            name="sign-in"
            active={activeItem === "sign-in"}
            onClick={this.handleItemClick}
          >
            Profil
          </Link>
          <Route exact path="/szukaj" component={Test} />
          <Route path="/tinder-mode" component={Test} />
          <Route path="/zaloguj" component={Test} />
        </Menu>
      </Router>
    );
  }
}
