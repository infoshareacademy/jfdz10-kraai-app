import React, {Component, Fragment} from "react";
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import { Divider, Header, Icon, Table, Card, Image } from "semantic-ui-react";


class SpecificationsTable extends Component{




render(){
  const props = this.props
  const animalShelter = props.shelters.find(shelter => shelter.id === props.shelterId)
  console.log(animalShelter)
  return(
  <div className="SpecTable">
    <Divider horizontal>
      <Header as="h4">
        <Icon name="tag" />
        Opis
      </Header>
    </Divider>

    <p>{props.description}</p>

    <Divider horizontal>
      <Header as="h4">
        <Icon name="bar chart" />
        Specyfikacja
      </Header>
    </Divider>

    <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell width={2}>Rozmiar</Table.Cell>
          <Table.Cell>{props.size}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Wiek</Table.Cell>
          <Table.Cell>{props.age}</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Płeć</Table.Cell>
          <Table.Cell>{props.sex}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Rasa</Table.Cell>
          <Table.Cell>{props.bread}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <Divider horizontal>
      <Header as="h4">
        <Icon name="home" />
        W schronisku
      </Header>
    </Divider>
    {animalShelter ? 
    <Card>
              <NavLink to={`/shelters/${animalShelter.id}`} name="shelter">
                <Image src={animalShelter.avatar} />
              </NavLink>

              <Card.Content>
                <Fragment>
                  <Card.Header>{animalShelter.name}</Card.Header>
                  <Card.Meta>{animalShelter.address.region}</Card.Meta>
                  <Card.Description>{animalShelter.address.city}</Card.Description>
                </Fragment>
              </Card.Content>
            </Card> : 'nie ma schroniska'}
  </div>
  )
}
};

const mapStateToProps = state => ({
  shelters: state.shelters.shelters
})
export default connect(mapStateToProps)(SpecificationsTable);
