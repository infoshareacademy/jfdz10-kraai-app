import React, { Component, Fragment } from "react";
import {connect} from 'react-redux'
import { Card, Image } from "semantic-ui-react";
import SheltersFilter from "./SheltersFilter";
import { NavLink } from "react-router-dom";

import {fetchShelters} from '../../actions/shelters'

class SheltersList extends Component {
  state = {
    filters: {
      name: "",
      region: "",
      city: ""
    }
  };

  componentDidMount() {
    this.props.fetchShelters()
  }

  getFilteredShelters() {
    return this.props.shelters.filter(shelter => {
      const shelterNameLowercase = shelter.name.toLowerCase();
      const nameFiltereLowercase = this.state.filters.name.toLowerCase();
      const shelterRegion = shelter.address.region;
      const regionFilter = this.state.filters.region;
      const shelterCity = shelter.address.city;
      const cityFilter = this.state.filters.city;
      
      

      return (
        shelterNameLowercase.includes(nameFiltereLowercase) &&
        shelterRegion.includes(regionFilter) &&
        shelterCity.includes(cityFilter) 
        
      );
    });
  }
  handleClick = e => {
    return (
      e.preventDefault(),
      window.history.pushState(
        { page: "schronisko" },
        "schronisko",
        "/schronisko"
      )
    );
  };
  render() {
  
    return (
      <Fragment>
        <SheltersFilter
          onFilterChange={filters => this.setState({ filters })}
        />
        <Card.Group doubling itemsPerRow={3} stackable>
          {this.getFilteredShelters().map(shelter => (
            <Card key={shelter.id}>
              <NavLink to={`/shelters/${shelter.id}`} name="shelter">
                <Image src={shelter.avatar} />
              </NavLink>

              <Card.Content>
                <Fragment>
                  <Card.Header>{shelter.name}</Card.Header>
                  <Card.Meta>{shelter.address.region}</Card.Meta>
                  <Card.Description>{shelter.address.city}</Card.Description>
                </Fragment>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  shelters: state.shelters.shelters,
  animals: state.animals.animals
});

const mapDispatchToProps = {
  fetchShelters
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SheltersList);
