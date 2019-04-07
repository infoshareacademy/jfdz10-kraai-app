import React, { Component, Fragment } from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "./AnimalsList.css";

import AnimalsFilter from "./AnimalsFilter";

const animals = () =>
  fetch(process.env.PUBLIC_URL + "/animals.json").then(response =>
    response.json()
  );
const user = () =>
  fetch(process.env.PUBLIC_URL + "/user.json").then(response =>
    response.json()
  );

class AnimalsList extends Component {
  state = {
    loading: true,
    animals: [],
    filter: {
      name: "",
      kind: "",
      size: null,
      sex: ""
    },
    user: {
      favAnimalId: []
    },
    userFavoriteAnimals: []
  };

  componentDidMount() {
    animals().then(animals => this.setState({ animals: animals }));
    user().then(user => this.setState({ user }));
    if (localStorage.getItem("userFav")) {
      this.setState({
        userFavoriteAnimals: JSON.parse(localStorage.getItem("userFav"))
      });
    }
  }

  getFilteredAnimals() {
    return this.state.animals.filter(animal => {
      const animalNameLowercase = animal.name.toLowerCase();
      const nameFilteredLowercase = this.state.filter.name.toLowerCase();
      const animalKind = [animal.kindId];
      const kindFilter = this.state.filter.kind;
      const animalSize = animal.metrics.sizeId;
      const sizeFilter = this.state.filter.size;
      const animalSex = animal.metrics.sexId;
      const sexFilter = this.state.filter.sex;

      return (
        animalNameLowercase.includes(nameFilteredLowercase) &&
        (!kindFilter || animalKind.includes(kindFilter)) &&
        (!sizeFilter || animalSize === sizeFilter) &&
        (!sexFilter || animalSex === sexFilter)
      );
    });
  }

  componentWillUnmount() {
    localStorage.setItem(
      "userFav",
      JSON.stringify(this.state.userFavoriteAnimals)
    );
  }

  render() {
    const { userFavoriteAnimals } = this.state;
    return (
      <Fragment>
        <AnimalsFilter onFilterChange={filter => this.setState({ filter })} />
        <Card.Group doubling itemsPerRow={3} stackable>
          {this.getFilteredAnimals().map(animal => (
            <Card key={animal.id}>
              <NavLink to={`animals/${animal.id}`}>
                <Image src={animal.avatar} height="300px" />
              </NavLink>

              <Card.Content>
                <Fragment>
                  <div className="content__wrapper">
                    <Card.Header>{animal.name}</Card.Header>
                    <Card.Description>{animal.description}</Card.Description>
                  </div>

                  {!userFavoriteAnimals.some(
                    favAnimal => favAnimal === animal.id
                  ) ? (
                    <Icon
                      style={{ cursor: "pointer", float: "right" }}
                      name="heart outline"
                      color="black"
                      size="big"
                      onClick={e =>
                        this.setState({
                          userFavoriteAnimals: [
                            ...userFavoriteAnimals,
                            animal.id
                          ]
                        })
                      }
                    />
                  ) : (
                    <Icon
                      style={{ cursor: "pointer", float: "right" }}
                      name="heart"
                      color="red"
                      size="big"
                      onClick={e =>
                        this.setState({
                          userFavoriteAnimals: userFavoriteAnimals.filter(
                            id => id !== animal.id
                          )
                        })
                      }
                    />
                  )}
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
