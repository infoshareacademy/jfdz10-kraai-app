import React, { Fragment, Component } from "react";
import HeaderCard from "./Header.js";
import PetCard from "./PetCard.js";
import SpecificationsTable from "./Specifications.js";

const pets = () =>
  fetch(process.env.PUBLIC_URL + "/animals.json").then(response =>
    response.json()
  );
class PetProfile extends Component {
  state = {
    pet: {},
    petId: null
  };

  componentDidMount = () => {
    this.setState({
      petId: parseFloat(this.props.match.params.id)
    });
    pets().then(pets =>
      this.setState({
        pet: pets.find(pet => pet.id === this.state.petId)
      })
    );
  };
  render() {
    const pet = this.state.pet;
    return (
      <Fragment>
        <div className="PetProfile">
          <HeaderCard name={pet.name} />
        </div>
        <div className="main">
          <PetCard
            name={pet.name}
            avatar={pet.avatar}
            description={pet.description}
          />
          <SpecificationsTable />
        </div>
      </Fragment>
    );
  }
}

export default PetProfile;
