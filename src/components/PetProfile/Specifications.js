import React, { Component } from "react";
import { Divider, Header, Icon, Table } from "semantic-ui-react";

const animalShelter = fetch(
    "https://petlove-454b4.firebaseio.com/shelters.json"
).then(response => response.json());

class SpecificationsTable extends Component {
    state = {
        shelters: []
    };

    componentDidMount() {
        animalShelter.then(shelters => this.setState({ shelters }));
    }

    render() {
        const props = this.props;
        const { shelters } = this.state;

        return (
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
                        <Icon name="home" />W schronisku
                    </Header>
                </Divider>
                <div>
                    {console.log(
                        shelters.find(({ id }) => id === props.shelter)
                    )}
                </div>
            </div>
        );
    }
}

export default SpecificationsTable;
