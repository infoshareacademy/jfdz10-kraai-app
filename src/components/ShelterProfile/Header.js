import React from "react";
import { Header, Icon } from "semantic-ui-react";
import "./ShelterProfile.css";

const HeaderCard = props => (
  <Header as="h2" icon>
    <Icon name="home" />
    <span>{props.name}</span>
  </Header>
);

export default HeaderCard;
