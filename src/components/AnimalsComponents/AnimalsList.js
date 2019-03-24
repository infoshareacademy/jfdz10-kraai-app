import React, { Component, Fragment } from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "./AnimalsList.css";

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
  componentWillUnmount() {
    localStorage.setItem(
      "userFav",
      JSON.stringify(this.state.userFavoriteAnimals)
    );
  }

  render() {
    const { animals, userFavoriteAnimals } = this.state;
    return (
      <Fragment>
        <Card.Group doubling itemsPerRow={3} stackable>
          {animals.map(animal => (
            <Card key={animal.id}>
              <NavLink to={`animals/${animal.id}`}>
                <Image src={animal.avatar} height="300px" />
              </NavLink>

              <Card.Content>
                <Fragment>
                  <div className="content__wrapper">
                    <Card.Header>{animal.name}</Card.Header>
                    <Card.Meta>{animal.description}</Card.Meta>
                    <Card.Description>
                      Aktualnie przebywa w {animal.shelterId}
                    </Card.Description>
                  </div>

                  {!userFavoriteAnimals.some(
                    favAnimal => favAnimal === animal.id
                  ) ? (
                    <Icon
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
