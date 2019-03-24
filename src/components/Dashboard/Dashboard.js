import React from "react";
import ViewsLabel from "./ViewsLabel";
import "./Dashboard.css";

const PieChart = require("react-chartjs").Pie;

class Dashboard extends React.Component {
  state = {
    animals: [],
    kinds: [],
    shelters: []
  };

  componentDidMount() {
    fetch("animals.json")
      .then(results => {
        return results.json();
      })
      .then(animals => this.setState({ animals }));

    fetch("kind.json")
      .then(r => r.json())
      .then(kinds => this.setState({ kinds }));

    fetch("shelters.json")
      .then(results2 => {
        return results2.json();
      })
      .then(shelters => this.setState({ shelters }));
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

    const shelterCities = this.state.shelters.map(
      shelter => shelter.address.city
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
