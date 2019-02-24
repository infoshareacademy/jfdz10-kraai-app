import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Navigation/Nav.js";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Nav />
      </div>
    );
  }
}

export default App;
