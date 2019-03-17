import _ from "lodash";
import React, { Component, Fragment } from "react";
import {Card, Image, Placeholder } from "semantic-ui-react";

import SheltersFilter from './SheltersFilter';

const shelters = () =>
  fetch(process.env.PUBLIC_URL + "/shelters.json").then(response =>
    response.json()
  );



class SheltersList extends Component {
  state = {
    loading: true,
    shelters: []

  };

  componentDidMount() {
   shelters().then(shelters => this.setState({shelters}));
   setTimeout(() => this.setState({loading: false}))
  }

  render() {
    const { loading , shelters} = this.state;
    return (
      <Fragment>
        <SheltersFilter/>
        <Card.Group doubling itemsPerRow={3} stackable >
          {_.map(shelters, shelter => (
            <Card key={shelter.id}>
              {loading ? (
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>
              ) : (
                <Image src={shelter.avatar}/>
              )}
              <Card.Content>
                {loading ? (
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length="very short" />
                      <Placeholder.Line length="medium" />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length="short" />
                    </Placeholder.Paragraph>
                  </Placeholder>
                ) : (
                  <Fragment>
                    <Card.Header>{shelter.name}</Card.Header>
                    <Card.Meta>{shelter.address.region}</Card.Meta>
                    <Card.Description>{shelter.address.city}</Card.Description>
                  </Fragment>
                )}
              </Card.Content>

             
            </Card>
          ))}
        </Card.Group>
      </Fragment>
    );
  }
}

export default SheltersList;
