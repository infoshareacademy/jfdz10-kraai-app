import React from "react";
import { Card } from "semantic-ui-react";

const ShelterCard = props => (
  <Card
    image={props.img}
    header={props.name}
    meta={props.city}
    description={props.region}
  />
);

export default ShelterCard;
