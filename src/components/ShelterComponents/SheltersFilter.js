import React, { Component, Fragment } from "react";
import {Input} from "semantic-ui-react";

const polandRegions = fetch('https://api-v3.mojepanstwo.pl/dane/wojewodztwa').then(resp => resp.json()).then(data => console.log(data.Dataobject.map(region => region)))

class SheltersFilter extends Component{
    render(){
        return (
            <Fragment>
                <Input placeholder='Imię...'/>

            </Fragment>
        )}}

export default SheltersFilter;