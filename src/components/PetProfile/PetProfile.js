import React, { Fragment } from "react";
import HeaderCard from "./Header.js";
import PetCard from "./PetCard.js";
import SpecificationsTable from "./Specifications.js";

const PetProfile = () => (
  <Fragment>
    <div className="PetProfile">
      <HeaderCard />
    </div>
    <div className="main">
      <PetCard />
      <SpecificationsTable />
    </div>
  </Fragment>
);

export default PetProfile;
