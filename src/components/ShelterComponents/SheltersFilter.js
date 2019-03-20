import React, { Component, Fragment } from "react";
import {Input, Dropdown} from "semantic-ui-react";

const polandRegions = fetch('https://api-v3.mojepanstwo.pl/dane/wojewodztwa')
.then(resp => resp.json())

const shelters = fetch('/shelters.json').then(resp => resp.json())


class SheltersFilter extends Component{
    state = {
        regionOptions: [],
        citiesOptions: [],
        citiesWithRegions: [],
        regionFilter: '',
        cityFilter: '',
        nameFilter: ''
    }

    componentDidMount(){
        polandRegions
        .then(data => data.Dataobject.map(region => region.data['wojewodztwa.nazwa']))
        .then(regionNames => regionNames.map((region, i) => ({key: i, text: region, value: region})))
        .then(regionOptions => this.setState({regionOptions}));

        shelters
        .then(shelters => shelters.map((shelter,i) => ({city: shelter.address.city, region: shelter.address.region} )))
        .then(cities => this.setState({citiesWithRegions: cities}));
    }

    getCitiesInRegion(){
        const {regionFilter, citiesWithRegions} = this.state;

         
        const filteredCities = regionFilter ? citiesWithRegions.filter(({region}) => region === regionFilter) : citiesWithRegions;
        const uniqCities = [...new Set(filteredCities.map(({city})=> city))];
        
        return uniqCities.map((city, i) => ({key: i, text: city, value: city})) ;
    }

    render(){
        const {regionFilter , cityFilter, nameFilter} = this.state;
        return (
            <Fragment>
                <Input placeholder='Nazwa...' value={nameFilter} onChange={(e,{value}) =>this.setState({nameFilter: value})}/>
                <Dropdown clearable options={this.state.regionOptions} selection search placeholder='Województwo...' value={regionFilter} onChange={(e,{value}) =>this.setState({regionFilter: value, cityFilter:''})}/>
                <Dropdown clearable options={this.getCitiesInRegion()} selection search placeholder='Miasto...' value={cityFilter} onChange={(e,{value}) =>this.setState({cityFilter: value})}/>


            </Fragment>
        )}}

export default SheltersFilter;