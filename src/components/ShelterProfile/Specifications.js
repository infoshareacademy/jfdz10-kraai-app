import React from "react";
import {Link} from 'react-router-dom'
import { Divider, Header, Icon, Table , Button} from "semantic-ui-react";
import AnimalList from "../AnimalsComponents/AnimalsList";

const SpecificationsTable = props => (
  <div className="SpecTable">
    <Divider horizontal>
      <Header as="h4">
        <Icon name="tag" />
        Opis
      </Header>
    </Divider>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, earum?</p>

    <Divider horizontal>
      <Header as="h4">
        <Icon name="bar chart" />
        Adres
      </Header>
    </Divider>

    <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell width={2}>Miasto</Table.Cell>
          <Table.Cell>{props.city}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Ulica</Table.Cell>
          <Table.Cell>{`${props.street} ${props.streetNumber}`}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Region</Table.Cell>
          <Table.Cell>{props.region}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Kod pocztowy</Table.Cell>
          <Table.Cell>{props.postCode}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <Divider horizontal>
      <Header as="h4">
        <Icon name="paw" />
        Zwierzęta w schronisku
      </Header>
    </Divider>
    {props.animalsId && props.animalsId.length === 0 ? (
      <div style={{ margin: "auto", width: "100%", textAlign: "center" }}>
        <span>W schronisku nie ma zwierząt</span>
      </div>
    ) : (
      <AnimalList shelterPanelId={props.id} />
    )}
  </div>
);

export default SpecificationsTable;
