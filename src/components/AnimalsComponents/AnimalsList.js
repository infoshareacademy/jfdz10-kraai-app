import _ from "lodash";
import React, { Component, Fragment } from "react";
import { Card, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import AnimalsFilter from './AnimalsFilter'

const animals = () =>
  fetch(process.env.PUBLIC_URL + "/animals.json").then(response =>
    response.json()
  );

class AnimalsList extends Component {
  state = {
    loading: true,
    animals: []
  };

  componentDidMount() {
    animals().then(animals => this.setState({ animals: animals }));
  }

  render() {
    const { animals } = this.state;
    return (
      <Fragment>
        <AnimalsFilter/>
        <Card.Group doubling itemsPerRow={3} stackable>
          {_.map(animals, animal => (
            <Card key={animal.id}>
              <NavLink to={`animals/${animal.id}`}>
                <Image src={animal.avatar} />
              </NavLink>

              <Card.Content>
                <Fragment>
                  <Card.Header>{animal.name}</Card.Header>
                  <Card.Description>
                    {animal.description}
                  </Card.Description>
                </Fragment>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Fragment>
    );
  }
}

export default AnimalsList;
