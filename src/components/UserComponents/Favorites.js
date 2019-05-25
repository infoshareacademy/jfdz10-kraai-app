import React, { Component, Fragment } from "react";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import AnimalList from '../AnimalsComponents/AnimalsList'
import {Button} from 'semantic-ui-react'

class Favorites extends Component {
  

  render() {
    const {favAnimals} = this.props
    return favAnimals.length ===0 ? (<div style={{margin: 'auto', width: '100%', textAlign: 'center'}}><span>Nie masz ulubionych zwierząt</span><br/><Link to='/animals'><Button primary icon='search' content='SZUKAJ'/> </Link></div>): (
      <React.Fragment>
        <h1>Ulubione</h1>
        <div>
        <AnimalList userPanel={true}/>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  favAnimals: state.auth.favAnimals
})

export default connect(mapStateToProps)(Favorites);
