import React, {Component, Fragment} from "react";
import { Card , Icon, Image} from "semantic-ui-react";


class PetCard extends Component {
state ={
  userFavoriteAnimals: JSON.parse(localStorage.getItem('userFav')) || []
}
componentWillUnmount() {
  localStorage.setItem(
    "userFav",
    JSON.stringify(this.state.userFavoriteAnimals)
  );
}

render(){
const props = this.props
const {userFavoriteAnimals} = this.state
return (
  <Fragment>
  <Card>
    <Image src={props.avatar} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span>{props.kind}</span>
      </Card.Meta>
      <Card.Description>{props.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      
    {!userFavoriteAnimals.some(
                    favAnimal => favAnimal === props.petId
                  ) ? (
                    <Icon
                      style={{cursor:'pointer', float: 'right'}}
                      name="heart outline"
                      color="black"
                      size="big"
                      onClick={e =>
                        this.setState({
                          userFavoriteAnimals: [
                            ...userFavoriteAnimals,
                            props.petId
                          ]
                        })
                      }
                    />
                  ) : (
                    <Icon
                      style={{cursor:'pointer', float: 'right'}}
                      name="heart"
                      color="red"
                      size="big"
                      onClick={e =>
                        this.setState({
                          userFavoriteAnimals: userFavoriteAnimals.filter(
                            id => id !== props.petId
                          )
                        })
                      }
                    />
                  )}
      
    </Card.Content>
  </Card>
  
  </Fragment>
)
}
};

export default PetCard;
