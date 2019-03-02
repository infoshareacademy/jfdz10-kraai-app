import React, { Component } from "react";
import "./App.css";
import Nav from "../Navigation/Nav.js";
import { Route } from "react-router-dom";

import UserPanel from "../UserComponents/UserPanel"

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Nav />
        <Route exact path="/szukaj" component={() => <h1>szukaj</h1>} />
        <Route exact path="/tinder-mode" component={() => <h1>tinder</h1>} />
        <Route  path="/profil" component={UserPanel} />
      </div>
    );
  }
}

export default App;
