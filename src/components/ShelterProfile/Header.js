import React from "react";
import { Header, Icon } from "semantic-ui-react";
import "./ShelterProfile.css";

const HeaderCard = () => (
  <Header as="h2" icon>
    <Icon name="paw" />
    Pies XYZ
    <Header.Subheader>Poznaj bliżej swojego move!</Header.Subheader>
  </Header>
);

export default HeaderCard;
