import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";

import { Grid, Image, Menu, List } from "semantic-ui-react";
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
    activeItem: "home",
    user: {},
    animals: []
  };

  componentDidMount() {
    fetchUser().then(user => this.setState({ user }));
    fetchAnimals().then(animal => this.setState({ animals: animal }));
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
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
              <Menu pointing secondary>
                <Menu.Item
                  name="Moje Dane"
                  active={activeItem === "Moje Dane"}
                  onClick={this.handleItemClick}
                  as={NavLink}
                  to="/profil/mydata"
                />
                <Menu.Item
                  name="Moje zwierzęta"
                  active={activeItem === "Moje zwierzęta"}
                  onClick={this.handleItemClick}
                  as={NavLink}
                  to="/profil/myanimals"
                />
                <Menu.Item
                  name="favorites"
                  active={activeItem === "favorites"}
                  onClick={this.handleItemClick}
                  as={NavLink}
                  to="/profil/favorites"
                />
              </Menu>
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
                component={() => (
                  <React.Fragment>
                    <h1>Moje Zwierzęta</h1>
                    <div>
                      <List celled>
                        {this.state.animals
                          .filter(({ id }) =>
                            this.state.user.createdAnimalId.some(
                              uId => uId === id
                            )
                          )
                          .map(animal => (
                            <List.Item key={animal.id}>
                              <Image avatar src={animal.avatar} />
                              <List.Content>
                                <List.Header>{animal.name}</List.Header>
                              </List.Content>
                            </List.Item>
                          ))}
                      </List>
                    </div>
                  </React.Fragment>
                )}
              />
              <Route
                exact
                path="/profil/favorites"
                component={() => 
                  <React.Fragment>
                <h1>Ulubione</h1>
                  <div>
                  <List celled>
                    {this.state.animals
                      .filter(({ id }) =>
                        this.state.user.favAnimalId.some(
                          uId => uId === id
                        )
                      )
                      .map(animal => (
                        <List.Item key={animal.id}>
                          <Image avatar src={animal.avatar} />
                          <List.Content>
                            <List.Header>{animal.name}</List.Header>
                          </List.Content>
                        </List.Item>
                      ))}
                  </List>
                </div>
              </React.Fragment>}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default UserPanel;
