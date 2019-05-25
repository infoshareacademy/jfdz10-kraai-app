import React, { Component, Fragment } from "react";
import {Link} from 'react-router-dom';
import {Icon} from 'semantic-ui-react';
import {connect} from 'react-redux'
import HeaderCard from "./Header.js";
import ShelterCard from "./ShelterCard.js";
import SpecificationsTable from "./Specifications.js";


class ShelterProfile extends Component {
  state = {
    shelterId: null,
    sheltersList: [],
    shelter: {
      address: {}
    },
    propsRecive: false
  };

  static getDerivedStateFromProps(props, state) {
    if (props.shelters !== state.sheltersList) {
      return {
        shelter: props.shelters.find(shelter => shelter.id === parseFloat(props.match.params.id))
      };
    }
    return null;
  }
  componentDidMount = () => {
    this.setState({
      shelterId: parseFloat(this.props.match.params.id)
    });
      this.setState({
        shelter: this.props.shelters.find(shelter => shelter.id === parseFloat(this.props.match.params.id))
      });
      this.setState({
        propsRecive: true
      })
  };

  render() {
    const {shelter, propsRecive} = this.state;
    return propsRecive && shelter ? (
      <Fragment>
      <Link to="/shelters"><Icon name="arrow left" size="big" float='left'/></Link>
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
      </Fragment>
        ) : ''
    
    }
}

const mapStateToProps =(state) =>({
  shelters: state.shelters.shelters
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ShelterProfile);
