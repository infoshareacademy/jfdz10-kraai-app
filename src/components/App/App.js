import React, { Component } from "react";
import "./App.css";
import Nav from "../Navigation/Nav.js";
import { Route } from "react-router-dom";
import PetProfile from "../PetProfile/PetProfile.js";
import ShelterProfile from "../ShelterProfile/ShelterProfile.js";
import UserPanel from "../UserComponents/UserPanel";
import SheltersList from "../ShelterComponents/SheltersList";
import AnimalsList from "../AnimalsComponents/AnimalsList";
import Dashboard from "../Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Nav />
        <div style={{ padding: 1 + "rem" }}>
        <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/shelters" component={SheltersList} />
          <Route exact path="/animals" component={AnimalsList} />
          <Route exact path="/tinder-mode" component={() => <h1>tinder</h1>} />
          <Route path="/profil" component={UserPanel} />
          <Route exact path="/zwierzak" component={PetProfile} />
          <Route exact path="/schronisko" component={ShelterProfile} />
        </div>
      </div>
    );
  }
}

export default App;
