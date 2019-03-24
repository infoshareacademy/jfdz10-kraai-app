import React from "react";
import { Header, Icon } from "semantic-ui-react";
import "./PetProfile.css";

const HeaderCard = props => (
  <Header as="h2" icon>
    <Icon name="paw" />
    {props.name}
    <Header.Subheader>Poznaj bliżej swojego move!</Header.Subheader>
  </Header>
);

export default HeaderCard;
