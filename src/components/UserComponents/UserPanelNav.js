import React , {Component} from "react";
import {NavLink} from "react-router-dom";

import {Menu} from "semantic-ui-react";


class UserPanelNav extends Component{
    state = {
        activeItem: "home",
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render(){
        const { activeItem } = this.state;
        return(
            <Menu pointing secondary>
            <Menu.Item
              name="Moje Dane"
              active={activeItem === "Moje Dane"}
              onClick={this.handleItemClick}
              as={NavLink}
              to="./mydata"
            />
            <Menu.Item
              name="Moje zwierzęta"
              active={activeItem === "Moje zwierzęta"}
              onClick={this.handleItemClick}
              as={NavLink}
              to="./myanimals"
            />
            <Menu.Item
              name="Ulubione"
              active={activeItem === "favorites"}
              onClick={this.handleItemClick}
              as={NavLink}
              to="./favorites"
            />
          </Menu>
        )
    }
}

export default UserPanelNav;