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
          <Table.Cell>Not Much Usually</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);

export default SpecificationsTable;
