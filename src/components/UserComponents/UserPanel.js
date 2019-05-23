import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "firebase";

import UserPanelNav from "./UserPanelNav";
import MyData from "./MyData";
import MyAnimals from "./MyAnimals";
import Favorites from "./Favorites";
import "./UserPanel.css";

import { Grid, Image, Button, Input } from "semantic-ui-react";

import avatarPlaceholder from "../../img/avatar-placeholder.png";

const fetchUser = () => fetch("/user.json").then(response => response.json());
const fetchAnimals = () =>
  fetch("https://petlove-454b4.firebaseio.com/animals.json").then(response =>
    response.json()
  );
class UserPanel extends Component {
  state = {
    user: {},
    animals: [],
    loggedUser: null,
    file: null,
    avatarUrl: avatarPlaceholder
  };

  handleInputFileChange = event => {
    this.setState({
      file: event.target.files[0]
    });
  };

  handleAddAvatar = () => {
    if (this.state.loggedUser) {
      firebase
        .storage()
        .ref("/avatars/" + this.state.loggedUser.uid)
        .put(this.state.file)
        .then(() => {
          this.getAvatarUrl();
          this.setState({
            file: null
          });
        })
        .catch(error => console.error(error));
    }
  };

  handleRemoveAvatar = () => {
    if (this.state.loggedUser) {
      firebase
        .storage()
        .ref("/avatars/" + this.state.loggedUser.uid)
        .delete()
        .then(() => {
          this.getAvatarUrl();
          this.setState({
            avatarUrl: ""
          });
        })
        .catch(error => console.error(error));
    }
  };

  getAvatarUrl = () => {
    if (this.state.loggedUser) {
      const uid = this.state.loggedUser.uid;
      firebase
        .storage()
        .ref("/avatars/" + uid)
        .getDownloadURL()
        .then(url => {
          this.setState({
            avatarUrl: url
          });
        })
        .catch(error => console.error(error));
    }
  };

  componentDidMount() {
    fetchUser().then(user => this.setState({ user }));
    fetchAnimals().then(animal => this.setState({ animals: animal }));
    const ref = firebase.auth().onAuthStateChanged(loggedUser => {
      this.setState(
        {
          loggedUser: loggedUser
        },
        () => this.getAvatarUrl()
      );
    });

    this.setState({
      ref
    });
  }

  componentWillUnmount() {
    this.state.ref && this.state.ref();
  }

  render() {
    const { user } = this.props;
    return user ? (
      <div className="userPanel">
        <Grid padded="horizontally">
          <Grid.Row>
            <Grid.Column computer={16} tablet={16} mobile={16}>
              <Image
                src={
                  this.state.avatarUrl
                    ? this.state.avatarUrl
                    : { avatarPlaceholder }
                }
                size="medium"
                circular
                centered
              />
              <div id="upload-container">
                <Input
                  centered
                  size="tiny"
                  type="file"
                  onChange={this.handleInputFileChange}
                />
                <Button size="tiny" onClick={this.handleAddAvatar}>
                  Dodaj zdjęcie
                </Button>
                <Button size="tiny" onClick={this.handleRemoveAvatar}>
                  Usuń zdjęcie
                </Button>
              </div>
            </Grid.Column>

            <Grid.Column tablet={14} mobile={16} computer={14}>
              <UserPanelNav />
              <Route
                exact
                path="/profil/mydata"
                component={() => <MyData user={this.state.user} />}
              />
              <Route
                exact
                path="/profil/myanimals"
                component={() => (
                  <MyAnimals
                    animals={this.state.animals}
                    user={this.state.user}
                  />
                )}
              />
              <Route
                exact
                path="/profil/favorites"
                component={() => (
                  <Favorites
                    animals={this.state.animals}
                    user={this.state.user}
                  />
                )}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPanel);
