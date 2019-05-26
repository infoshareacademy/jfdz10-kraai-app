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
            <Menu pointing primary className='user_nav'>
            <Menu.Item
              name="Moje Dane"
              active={activeItem === "Moje Dane"}
              onClick={this.handleItemClick}
              as={NavLink}
              to="./mydata"
            />
            <Menu.Item
              name="Ulubione"
              active={activeItem === "Ulubione"}
              onClick={this.handleItemClick}
              as={NavLink}
              to="./favorites"
            />
            <Menu.Item
              name="Zarezerwowane"
              active={activeItem === "Zarezerwowane"}
              onClick={this.handleItemClick}
              as={NavLink}
              to="./myanimals"
            />
          </Menu>
        )
    }
}

export default UserPanelNav;