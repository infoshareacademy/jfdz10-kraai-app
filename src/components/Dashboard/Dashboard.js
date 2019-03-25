import React from "react";
import ViewsLabel from "./ViewsLabel";
import "./Dashboard.css";
import { Pie, Doughnut } from "react-chartjs-2";

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

    const testData = {
      labels: ["Koty", "Psy"],
      datasets: [
        {
          data: [1, 2]
        }
      ]
    };

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

    const options = {
      legend: {
        position: "top",
        display: true
      }
    };
    return (
      <div className="dashboard wrapper">
        <Doughnut data={testData} options={options} />
        <ViewsLabel />
      </div>
    );
  }
}

export default Dashboard;
