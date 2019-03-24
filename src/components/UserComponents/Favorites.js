import React, { Component } from "react";

import { List, Image } from "semantic-ui-react";

class Favorites extends Component {
  state = {
    userFavoriteAnimals : JSON.parse(localStorage.getItem('userFav')) || []
  }
  render() {
    const {userFavoriteAnimals} = this.state
    return (
      <React.Fragment>
        <h1>Ulubione</h1>
        <div>
          <List celled>
            {this.props.animals
              .filter(({ id }) =>
                userFavoriteAnimals.some(uId => uId === id)
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
    );
  }
}

export default Favorites;
