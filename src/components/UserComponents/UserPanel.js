import React, { Component } from "react";
import {Route} from "react-router-dom";

import UserPanelNav from "./UserPanelNav";
import MyData from "./MyData";
import MyAnimals from "./MyAnimals";
import Favorites from "./Favorites";

import { Grid, Image} from "semantic-ui-react";
import "./UserPanel.css";




const fetchUser = () =>
  fetch(process.env.PUBLIC_URL + "/user.json").then(response =>
    response.json()
  );
const fetchAnimals = () =>
  fetch(process.env.PUBLIC_URL + "/animals.json").then(response =>
    response.json()
  );
  
class UserPanel extends Component {
  state = {
    user: {},
    animals: []
  };

  componentDidMount() {
    fetchUser().then(user => this.setState({ user }));
    fetchAnimals().then(animal => this.setState({ animals: animal }));
  }

  render() {
    
    return (
      <div className="userPanel">
        <Grid padded="horizontally">
          <Grid.Row>
            <Grid.Column computer={2} tablet={2} mobile={16}>
              <Image
                src={this.state.user.avatar}
                size="medium"
                circular
                centered
              />
            </Grid.Column>

            <Grid.Column tablet={14} mobile={16} computer={14}>
              <UserPanelNav/>
              <Route
                exact
                path="/profil/mydata"
                component={() => <MyData user={this.state.user}/>}
              />
              <Route
                exact
                path="/profil/myanimals"
                component= {() => <MyAnimals animals= {this.state.animals} user={this.state.user}/>}
              />
              <Route
                exact
                path="/profil/favorites"
                component={() => <Favorites animals= {this.state.animals} user={this.state.user}/>}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default UserPanel;
