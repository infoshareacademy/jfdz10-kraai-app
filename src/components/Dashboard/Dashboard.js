import React from "react";
import ViewsLabel from "./ViewsLabel";
import "./Dashboard.css";
import firebase from 'firebase'

const PieChart = require("react-chartjs").Pie;

class Dashboard extends React.Component {
  state = {
    animals: [],
    kinds: [],
    shelters: []
  };

  componentDidMount() {
    const animalsRef = firebase.database().ref('animals')
    animalsRef.once('value').then(snapshot => this.setState({ animals: snapshot.val() }));
    animalsRef.on('value', snapshot => this.setState({ animals: snapshot.val() }));

    const sheltersRef = firebase.database().ref('shelters')
    sheltersRef.once('value').then(snapshot => this.setState({ shelters: snapshot.val() }));
    sheltersRef.on('value', snapshot => this.setState({ shelters: snapshot.val() }));

    fetch("kind.json")
      .then(r => r.json())
      .then(kinds => this.setState({ kinds }));
  }

  render() {
    const data = [];
    const shelters = [];

    this.state.kinds.forEach(kind => {
      const numberOfKind = this.state.animals.filter(
        animal => animal.kindId === kind.id
      ).length;

      data.push({
        value: numberOfKind,
        label: kind.pl
      });
    });

    const shelterCities = new Set(
      this.state.shelters.map(shelter => shelter.address.city)
    );
    shelterCities.forEach(city => {
      const numberOfShelters = this.state.shelters.filter(
        shelter => shelter.address.city === city
      ).length;

      shelters.push({
        value: numberOfShelters,
        label: city
      });
    });

    return (
      <div className="dashboard wrapper">
        <PieChart data={data} width="250" height="250" />
        <PieChart data={shelters} width="600" height="250" />
        <ViewsLabel />
      </div>
    );
  }
}

export default Dashboard;
