import React from "react";
import { Header, Icon } from "semantic-ui-react";
import "./ShelterProfile.css";

const HeaderCard = () => (
  <Header as="h2" icon>
    <Icon name="paw" />
    Ciapkowo
    <Header.Subheader>Schronisko OTOZ Animals</Header.Subheader>
  </Header>
);

export default HeaderCard;
