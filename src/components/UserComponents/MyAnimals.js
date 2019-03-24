import React, { Component } from "react";

import { List, Image } from "semantic-ui-react";

class MyAnimals extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Moje Zwierzęta</h1>
        <div>
          <List celled size='huge' >
            {this.props.animals
              .filter(({ id }) =>
                this.props.user.createdAnimalId.some(uId => uId === id)
              )
              .map(animal => (
                <List.Item key={animal.id}  >
                  <Image avatar src={animal.avatar}/>
                  <List.Content >
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

export default MyAnimals;
