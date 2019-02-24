import React, { Component } from "react";

import { Grid, Image } from "semantic-ui-react";
import "./UserPanel.css";

class UserPanel extends Component {
  render() {
    return (
      <div className="userPanel">
        <Grid divided>
          <Grid.Row>
            <Grid.Column width={6}>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptem4x_Kmyr0PWXo-EDnGzME30xo2JzsWgaVXUHp-hIh53QiFaw' fluid />
              <ul>
                  <li>Moje dane</li>
                  <li>Moje zwierzęta</li>
                  <li>Ulubione</li>
                  <li></li>
              </ul>
            </Grid.Column>
            <Grid.Column width={10}>
              <img />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default UserPanel;
