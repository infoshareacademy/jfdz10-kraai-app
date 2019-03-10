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
              to="/profil/mydata"
            />
            <Menu.Item
              name="Moje zwierzęta"
              active={activeItem === "Moje zwierzęta"}
              onClick={this.handleItemClick}
              as={NavLink}
              to="/profil/myanimals"
            />
            <Menu.Item
              name="favorites"
              active={activeItem === "favorites"}
              onClick={this.handleItemClick}
              as={NavLink}
              to="/profil/favorites"
            />
          </Menu>
        )
    }
}

export default UserPanelNav;