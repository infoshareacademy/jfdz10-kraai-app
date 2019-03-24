import React from "react";
import { Card } from "semantic-ui-react";

const PetCard = props => (
  <Card
    image={props.avatar}
    header={props.name}
    meta="Pies"
    description={props.description}
  />
);

export default PetCard;
