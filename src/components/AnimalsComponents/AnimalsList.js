import _ from "lodash";
import React, { Component, Fragment } from "react";
import { Card, Image, Placeholder, Icon } from "semantic-ui-react";

const animals = () =>
  fetch(process.env.PUBLIC_URL + "/animals.json").then(response =>
    response.json()
  );
const user = () =>
    fetch(process.env.PUBLIC_URL + "/user.json").then(response => response.json())


class AnimalsList extends Component {
  state = {
    loading: true,
    animals: [],
    user: {
      favAnimalId:[],
    }
  };

  componentDidMount() {
   animals().then(animals => this.setState({animals: animals}));
   user().then(user => this.setState({user}))
   setTimeout(() => this.setState({loading: false}))
  }
  componentWillUnmount() {
    localStorage.setItem("userFav", this.state.user.favAnimalId);
  }

  render() {
    const { loading , animals, user} = this.state;
    return (
      <Fragment>
        <Card.Group doubling itemsPerRow={3} stackable >
          {_.map(animals, animal => (
            <Card key={animal.id}>
              {loading ? (
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>
              ) : (
                <Image src={animal.avatar}/>
              )}
              <Card.Content>
                {loading ? (
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length="very short" />
                      <Placeholder.Line length="medium" />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length="short" />
                    </Placeholder.Paragraph>
                  </Placeholder>
                ) : (
                  <Fragment>
                    <Card.Header>{animal.name}</Card.Header>
                    <Card.Meta>{animal.description}</Card.Meta>
                    <Card.Description>Aktualnie przebywa w {animal.shelterId}</Card.Description>
                    {!user.favAnimalId.some(favAnimal => favAnimal === animal.id)? <Icon name='heart outline' color ='black' onClick = {(e) => this.setState(user.favAnimalId = [...user.favAnimalId , animal.id])}/> : <Icon name='heart' color ='red' onClick = {(e) => this.setState(user.favAnimalId = user.favAnimalId.filter(id => id != animal.id))}/>}
                  </Fragment>
                )}
              </Card.Content>

             
            </Card>
          ))}
        </Card.Group>
      </Fragment>
    );
  }
}

export default AnimalsList;
