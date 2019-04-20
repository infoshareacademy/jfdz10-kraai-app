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
import SignIn from "../SignComponents/SignIn";
import SignUp from "../SignComponents/SignUp";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBlmKoFWb3srpjFo9AQd2TcYamgR-hZckM",
  authDomain: "petlove-454b4.firebaseapp.com",
  databaseURL: "https://petlove-454b4.firebaseio.com",
  projectId: "petlove-454b4",
  storageBucket: "petlove-454b4.appspot.com",
  messagingSenderId: "354540208231"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Nav />
        <div style={{ padding: 1 + "rem" }}>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/shelters" component={SheltersList} />
          <Route exact path="/animals" component={AnimalsList} />
          <Route exact path="/tinder-mode" component={() => <h1>tinder</h1>} />
          <Route path="/profil" component={UserPanel} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/animals/:id" component={PetProfile} />
          <Route exact path="/shelters/:id" component={ShelterProfile} />
        </div>
      </div>
    );
  }
}

export default App;
