import React, { Fragment, Component } from "react";
import HeaderCard from "./Header.js";
import ShelterCard from "./ShelterCard.js";
import SpecificationsTable from "./Specifications.js";

const shelters = () =>
  fetch(process.env.PUBLIC_URL + "/shelters.json").then(response =>
    response.json()
  );
class ShelterProfile extends Component {
  state = {
    shelterId: null,
    shelter: {
      address: {}
    }
  };
  componentDidMount = () => {
    this.setState({
      shelterId: parseFloat(this.props.match.params.id)
    });
    shelters().then(shelters =>
      this.setState({
        shelter: shelters.find(shelter => shelter.id === this.state.shelterId)
      })
    );
  };
  render() {
    let shelter = this.state.shelter;
    return (
      <>
        <div className="PetProfile">
          <HeaderCard name={shelter.name} />
        </div>
        <div className="main">
          <ShelterCard
            img={shelter.avatar}
            name={shelter.name}
            city={shelter.address.city}
            region={shelter.address.region}
          />
          <SpecificationsTable
            city={shelter.address.city}
            region={shelter.address.region}
            street={shelter.address.street}
            streetNumber={shelter.address.streetNumber}
            postCode={shelter.address.postCode}
          />
        </div>
      </>
    );
  }
}
export default ShelterProfile;
