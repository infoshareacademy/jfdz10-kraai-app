import React from "react";
import ViewsLabel from "./ViewsLabel";
import "./Dashboard.css";
import firebase from "firebase";
import DogAnimals from "./DogAnimals"

class Dashboard extends React.Component {
    state = {
        animals: [],
        kinds: [],
        shelters: [],
        animData: [],
        animOptions: [],
        sheltersData: [],
        sheltersOptions: []
    };

    componentDidMount() {
        const animalsRef = firebase.database().ref("animals");
        animalsRef
            .once("value")
            .then(snapshot => this.setState({ animals: snapshot.val() }));
        animalsRef.on("value", snapshot =>
            this.setState({ animals: snapshot.val() })
        );

        const sheltersRef = firebase.database().ref("shelters");
        sheltersRef
            .once("value")
            .then(snapshot => this.setState({ shelters: snapshot.val() }));
        sheltersRef.on("value", snapshot =>
            this.setState({ shelters: snapshot.val() })
        );

        fetch("kind.json")
            .then(r => r.json())
            .then(kinds => this.setState({ kinds }));
    }

    async handleData() {
        await this.AnimalState;
        await this.ShelterState;
        await this.AnimalsDoughnut;
        await this.SheltersDoughnut;
    }

    get AnimalState() {
        const animals = [];

        this.state.kinds.forEach(kind => {
            const kindsLenght = this.state.animals.filter(
                animal => animal.kindId === kind.id
            ).length;

            animals.push({
                value: kindsLenght,
                label: kind.pl
            });
        });

        return animals;
    }

    get ShelterState() {
        const shelters = [];

        const shelterCities = new Set(
            this.state.shelters.map(shelter => shelter.address.city)
        );
        shelterCities.forEach(city => {
            shelters.push({
                value: this.state.shelters.filter(
                    shelter => shelter.address.city === city
                ).length,
                labels: city
            });
        });

        return shelters;
    }

    setAnimalsDoughnut(animals) {
        const data = {
            labels: animals.map(i => i.label),
            datasets: [
                {
                    data: animals.map(i => i.value),
                    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                    hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
                }
            ]
        };

        this.setState({
            animData = data
        })

        const options = {
            legend: {
                display: true,
                position: "top",
                fullWidth: true,
                reverse: false,
                labels: {
                    fontColor: "rgb(255, 99, 132)"
                }
            }
        };
       this.setState({
           animOptions = options
       })
    }

    render() {
        this.handleData();
        return (
            <div className="dashboard wrapper">
            <DogAnimals data={this.animData} options={this.animOptions}/>
                <ViewsLabel />
            </div>
        );
    }
}

export default Dashboard;
