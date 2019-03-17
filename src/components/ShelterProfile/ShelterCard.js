import React from "react";
import { Card } from "semantic-ui-react";
import Logo from "../../img/logo.png";

const ShelterCard = () => (
  <Card
    image={Logo}
    header="AZOR"
    meta="Pies"
    description="AZOR jest podopiecznym OTOZ Animals Schroniska Ciapkowo."
  />
);

export default ShelterCard;
