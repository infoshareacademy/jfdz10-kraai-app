import React, { Component } from "react";
import "./App.css";
import Nav from "../Navigation/Nav.js";
import { Route , withRouter} from "react-router-dom";
import {connect} from 'react-redux'
import PetProfile from "../PetProfile/PetProfile.js";
import ShelterProfile from "../ShelterProfile/ShelterProfile.js";
import UserPanel from "../UserComponents/UserPanel";
import SheltersList from "../ShelterComponents/SheltersList";
import AnimalsList from "../AnimalsComponents/AnimalsList";
import Dashboard from "../Dashboard/Dashboard";
import SignIn from "../SignComponents/SignIn";
import SignUp from "../SignComponents/SignUp";
import {startListeningToAuthChange} from '../../actions/auth'
import {compose} from 'redux'
import { authRef } from "../../config/firebase";
import {fetchShelters} from '../../actions/shelters'


class App extends Component {
  componentDidMount(){
    this.props.startListeningToAuthChange()
    this.props.fetchShelters()
  }
  
  render() {
    console.log(authRef.currentUser)
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

const mapDispatchToProps ={
  startListeningToAuthChange,
  fetchShelters
}

export default withRouter(connect(null, mapDispatchToProps)(App));
