
import React, { Component, Fragment } from "react";
import { Card, Image, Placeholder, Icon } from "semantic-ui-react";

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
    if(localStorage.getItem('userFav')){
      this.setState({userFavoriteAnimals: JSON.parse(localStorage.getItem('userFav'))})
    }

  }
  componentWillUnmount() {
    localStorage.setItem("userFav", JSON.stringify(this.state.userFavoriteAnimals));
  }

  render() {
    const { animals, user , userFavoriteAnimals} = this.state;
    return (
      <Fragment>
        <Card.Group doubling itemsPerRow={3} stackable>
          {animals.map(animal => (
            <Card key={animal.id}>
              
                <Image src={animal.avatar} />
              
              <Card.Content>
                
                  <Fragment>
                    <Card.Header>{animal.name}</Card.Header>
                    <Card.Meta>{animal.description}</Card.Meta>
                    <Card.Description>
                      Aktualnie przebywa w {animal.shelterId}
                    </Card.Description>
                    {!userFavoriteAnimals.some(
                      favAnimal => favAnimal === animal.id
                    ) ? (
                      <Icon
                        name="heart outline"
                        color="black"
                        size='big'
                        onClick={e =>
                          this.setState(
                            ({userFavoriteAnimals:[
                              ...userFavoriteAnimals,
                              animal.id
                            ]})
                          )
                        }
                      />
                    ) : (
                      <Icon
                        name="heart"
                        color="red"
                        size='big'
                        onClick={e =>
                          this.setState(
                            ({userFavoriteAnimals: userFavoriteAnimals.filter(
                              id => id !== animal.id
                            )})
                          )
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
