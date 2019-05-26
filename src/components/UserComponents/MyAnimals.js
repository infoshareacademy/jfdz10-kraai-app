import React, { Component } from "react";
import { connect } from "react-redux";

import { List, Image, Button, Table } from "semantic-ui-react";
import {removeReservation, adopt} from '../../actions/auth'

class MyAnimals extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Moje Rezerwacje</h1>
        <p>Możesz zarezerwować maksymalnie jednego zwierzaka</p>
        <div>
          <Table celled>
            <Table.Body>
              {this.props.animals
                .filter(({ id }) => this.props.user.reservation === id)
                .map(animal => (
                  <Table.Row key={animal.id}>
                    <Table.Cell>
                      <Image avatar size="medium" src={animal.avatar} />
                    </Table.Cell>
                    <Table.Cell>{animal.name}</Table.Cell>
                    <Table.Cell>
                      <Button positive onClick={ () => this.props.adopt(animal.id)}>ADOPTUJ</Button>
                      <Button  negative onClick={() => this.props.removeReservation(animal.id)} >ODWOŁAJ REZERWACJĘ</Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  animals: state.animals.animals
});
const mapDispatchToProps = {
  removeReservation,
  adopt
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAnimals);
