import React from "react";
import { Divider, Header, Icon, Table } from "semantic-ui-react";

const SpecificationsTable = () => (
  <div className="SpecTable">
    <Divider horizontal>
      <Header as="h4">
        <Icon name="tag" />
        Opis
      </Header>
    </Divider>

    <p>
      Doggie treats are good for all times of the year. Proven to be eaten by
      99.9% of all dogs worldwide.
    </p>

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
          <Table.Cell>1" x 2"</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Waga</Table.Cell>
          <Table.Cell>6 ounces</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Umaszczenie</Table.Cell>
          <Table.Cell>Yellowish</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Płeć</Table.Cell>
          <Table.Cell>Not Much Usually</Table.Cell>
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
