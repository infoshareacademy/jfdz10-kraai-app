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
    return (
      <Fragment>
        {console.log(this.state.shelter)}
        <div className="PetProfile">
          <HeaderCard name={this.state.shelter.name} />
        </div>
        <div className="main">
          <ShelterCard
            img={this.state.shelter.avatar}
            name={this.state.shelter.name}
            city={this.state.shelter.address.city}
            region={this.state.shelter.address.region}
          />
          <SpecificationsTable />
        </div>
      </Fragment>
    );
  }
}
export default ShelterProfile;
