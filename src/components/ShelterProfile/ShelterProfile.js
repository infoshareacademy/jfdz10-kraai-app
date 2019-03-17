import React, { Fragment } from "react";
import HeaderCard from "./Header.js";
import ShelterCard from "./ShelterCard.js";
import SpecificationsTable from "./Specifications.js";

const ShelterProfile = () => (
  <Fragment>
    <div className="PetProfile">
      <HeaderCard />
    </div>
    <div className="main">
      <ShelterCard />
      <SpecificationsTable />
    </div>
  </Fragment>
);

export default ShelterProfile;
