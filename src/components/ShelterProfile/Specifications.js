import React from "react";
import { Divider, Header, Icon, Table } from "semantic-ui-react";

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
  </div>
);

export default SpecificationsTable;
