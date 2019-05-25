import React, {Component, Fragment} from "react";
import { Card , Icon, Image} from "semantic-ui-react";
import {connect} from 'react-redux'
import {addToFavorite,
  removeFromFavorite} from '../../actions/auth'


class PetCard extends Component {




render(){
const props = this.props

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
      
    {props.user ?  !props.favAnimals.some(
                    favAnimal => favAnimal.animalID === props.petId
                  ) ? (
                    <Icon
                      style={{cursor:'pointer', float: 'right'}}
                      name="heart outline"
                      color="black"
                      size="big"
                      onClick={e =>
                        props.addToFavorite(props.user.uid, props.petId)
                      }
                    />
                  ) : (
                    <Icon
                      style={{cursor:'pointer', float: 'right'}}
                      name="heart"
                      color="red"
                      size="big"
                      onClick={e =>
                        props.removeFromFavorite(props.user.uid, props.petId)
                      }
                    />
                  ): ''}
      
    </Card.Content>
  </Card>
  
  </Fragment>
)
}
};

const mapDispatchToProps ={
  addToFavorite,
  removeFromFavorite
}

const mapStateToProps = state => ({
  user: state.auth.user,
  favAnimals: state.auth.favAnimals
})

export default connect(mapStateToProps, mapDispatchToProps)(PetCard);
