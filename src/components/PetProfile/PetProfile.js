import React, { Fragment, Component } from "react";
import HeaderCard from "./Header.js";
import PetCard from "./PetCard.js";
import SpecificationsTable from "./Specifications.js";

const pets = () =>
  fetch(process.env.PUBLIC_URL + "/animals.json").then(response =>
    response.json()
  );
const kind = () =>
  fetch(process.env.PUBLIC_URL + "/kind.json").then(response =>
    response.json()
  );
const size = () =>
  fetch(process.env.PUBLIC_URL + "/animal-size.json").then(response =>
    response.json()
  );
const sex = () =>
  fetch(process.env.PUBLIC_URL + "/animal-sex.json").then(response =>
    response.json()
  );
const catBread = () =>
  fetch(process.env.PUBLIC_URL + "/cat-bread.json").then(response =>
    response.json()
  );
const dogBread = () =>
  fetch(process.env.PUBLIC_URL + "/dog-bread.json").then(response =>
    response.json()
  );

class PetProfile extends Component {
  state = {
    pet: {
      metrics: {}
    },
    petId: null,
    kind: {},
    size: {},
    sex: {},
    catBread: {},
    dogBread: {}
  };

  componentDidMount = () => {
    this.setState({
      petId: parseFloat(this.props.match.params.id)
    });

    pets().then(resolved =>
      this.setState({
        pet: resolved.find(pet => pet.id === this.state.petId)
      })
    );

    kind().then(resolved =>
      this.setState({
        kind: resolved.find(kind => this.state.pet.kindId === kind.id)
      })
    );

    size().then(resolved =>
      this.setState({
        size: resolved.find(size => size.id === this.state.pet.metrics.sizeId)
      })
    );

    sex().then(resolved =>
      this.setState({
        sex: resolved.find(sex => sex.id === this.state.pet.metrics.sexId)
      })
    );

    catBread().then(resolved =>
      this.setState({
        catBread: resolved
      })
    );

    dogBread().then(resolved =>
      this.setState({
        dogBread: resolved
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
            kind={this.state.kind.pl}
          />
          <SpecificationsTable
            size={this.state.size.pl}
            description={pet.description}
            age={pet.metrics.age}
            sex={this.state.sex.pl}
          />
        </div>
      </Fragment>
    );
  }
}

export default PetProfile;
