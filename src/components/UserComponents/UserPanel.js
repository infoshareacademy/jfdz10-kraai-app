import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";

import { Grid, Image, Menu } from "semantic-ui-react";
import "./UserPanel.css";

const fetchUser = () =>
  fetch(process.env.PUBLIC_URL + "/user.json").then(response =>
    response.json()
  );
class UserPanel extends Component {
  state = {
    activeItem: "home",
    user: []
  };

  componentDidMount() {
    fetchUser().then(user => this.setState({ user }));
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="userPanel">
        <Grid divided>
          <Grid.Row>
            <Grid.Column width={2}>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptem4x_Kmyr0PWXo-EDnGzME30xo2JzsWgaVXUHp-hIh53QiFaw"
                size="medium"
                circular
              />
              <Menu inverted pointing vertical>
                <Menu.Item
                  name="Moje Dane"
                  active={activeItem === "Moje Dane"}
                  onClick={this.handleItemClick}
                  as={NavLink}
                  to="/profil/mydata"
                />
                <Menu.Item
                  name="Moje zwierzęta"
                  active={activeItem === "messages"}
                  onClick={this.handleItemClick}
                  as={NavLink}
                  to="/profil/myanimals"
                />
                <Menu.Item
                  name="favorites"
                  active={activeItem === "friends"}
                  onClick={this.handleItemClick}
                  as={NavLink}
                  to="/profil/favorites"
                />
              </Menu>
            </Grid.Column>
            <Grid.Column width={14}>
              <Route
                exact
                path="/profil/mydata"
                component={() => {
                  return (
                    <React.Fragment>
                      <h1>Moje dane</h1>
                      <p>Imię: {this.state.user.name}</p>
                      <p>Login: {this.state.user.login}</p>
                      <p>Password: {this.state.user.password}</p>
                    </React.Fragment>
                  );
                }}
              />
              <Route
                exact
                path="/profil/myanimals"
                component={() => <h1>Moje Zwierzęta</h1>}
              />
              <Route
                exact
                path="/profil/favorites"
                component={() => <h1>Ulubione</h1>}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default UserPanel;
