import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "firebase";
import {usersRef} from '../../config/firebase'

import UserPanelNav from "./UserPanelNav";
import MyData from "./MyData";
import MyAnimals from "./MyAnimals";
import Favorites from "./Favorites";
import "./UserPanel.css";


import { Grid, Image, Button, Input , Icon} from "semantic-ui-react";

const avatarPlaceholder = "/avatar-placeholder.png";

class UserPanel extends Component {
  state = {
    file: '',
  };

  handleInputFileChange = event => {
    this.setState({
      file: event.target.files[0]
    });
  };

  handleAddAvatar = () => {
    const user =this.props.user
    if (user) {
      firebase
        .storage()
        .ref("/avatars/" + user.uid)
        .put(this.state.file)
        .then(() => firebase.storage().ref("/avatars/" + user.uid).getDownloadURL().then(url => usersRef.child(user.uid).update({avatarUrl: url})))
        .catch(error => console.error(error));
        this.setState({file: ''})
    }
  };

  handleRemoveAvatar = () => {
    const user = this.props.user
    if (user) {
      firebase
        .storage()
        .ref("/avatars/" + user.uid)
        .delete()
        .then(() => {
          usersRef.child(user.uid).update({avatarUrl: null})
          })
        .catch(error => console.error(error));
    }
  };

  clearInputFile = () => {
    this.setState({
      file: null
    });
  };



  render() {
    const {file} = this.state
    const { user } = this.props;
    return user ? (
      <div className="userPanel">
        <Grid padded="horizontally">
          <Grid.Row>
            <Grid.Column computer={16} tablet={16} mobile={16}>
              <Image
                src={
                  user.avatarUrl
                    ? `${user.avatarUrl}`
                    :  avatarPlaceholder 
                }
                size="medium"
                circular
                centered
              />
              <div id="upload-container">
              <Input
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            type="file"
            files={file}
            onChange={this.handleInputFileChange}
          />
          
            {file? <Button
              as="a"
              basic
              color="blue"
              content="SAVE"
              icon="save"
              onClick={this.handleAddAvatar}
            /> : <label htmlFor="raised-button-file"><Button
            as="a"
            basic
            color="blue"
            content="Upload image"
            icon="upload"
          /></label>}
          
          {file ? (
            <div>
              {file.name}{" "}
              <Icon
                style={{ cursor: "pointer" }}
                circular
                color="red"
                name="delete"
                onClick={this.clearInputFile}
              />
            </div>
          ) : (
            ""
          )}
          {user.avatarUrl ? <Button
              as="a"
              basic
              color="blue"
              content="Usuń zdjęcie"
              icon="delete"
              onClick={this.handleRemoveAvatar}/>: ''}
              </div>
            </Grid.Column>

            <Grid.Column tablet={16} mobile={16} computer={16}>
              <UserPanelNav />
              <Route
                exact
                path="/profil/mydata"
                component={() => <MyData/>}
              />
              {/* <Route
                exact
                path="/profil/myanimals"
                component={() => (
                  <MyAnimals/>
                )}
              /> */}
              <Route
                exact
                path="/profil/favorites"
                component={() => (
                  <Favorites
                    animals={this.props.animals}
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
  user: state.auth.user,
  animals: state.animals.animals
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPanel);
