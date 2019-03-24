import React, { Component, Fragment } from "react";
import { Card, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import AnimalsFilter from "./AnimalsFilter";

const animals = () =>
  fetch(process.env.PUBLIC_URL + "/animals.json").then(response =>
    response.json()
  );

class AnimalsList extends Component {
  state = {
    loading: true,
    animals: [],
    filter: {
      name: "",
      kind: "",
    }
  };

  componentDidMount() {
    animals().then(animals => this.setState({ animals: animals }));
  }
  getFilteredAnimals() {
    return this.state.animals.filter(animal => {
      const animalNameLowercase = animal.name.toLowerCase();
      const nameFilteredLowercase = this.state.filter.name.toLowerCase();
      const animalKind = animal.kindId
      const kindFilter = this.state.filter.kind;
      console.log(animalKind);
      return (
        animalNameLowercase.includes(nameFilteredLowercase) &&
        animalKind === kindFilter
      );
    });
  }

  render() {
    const { animals } = this.state;
    return (
      <Fragment>
        <AnimalsFilter onFilterChange={filter => this.setState({ filter })} />
        <Card.Group doubling itemsPerRow={3} stackable>
          {this.getFilteredAnimals().map(animal => (
            <Card key={animal.id}>
              <NavLink to={`animals/${animal.id}`}>
                <Image style={{ textAlign: "center" }} src={animal.avatar} />
              </NavLink>

              <Card.Content>
                <Fragment>
                  <Card.Header>{animal.name}</Card.Header>
                  <Card.Description>{animal.description}</Card.Description>
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
