import React, { Component } from "react";
import "./App.css";
import Nav from "../Navigation/Nav.js";
import { Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Nav />
        <Route exact path="/szukaj" component={() => <h1>szukaj</h1>} />
        <Route exact path="/tinder-mode" component={() => <h1>tinder</h1>} />
        <Route exact path="/profil" component={() => <h1>profil</h1>} />
        <Route exact path="/dashboard" component={Dashboard} />
      </div>
    );
  }
}

export default App;
