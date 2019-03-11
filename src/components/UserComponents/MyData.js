import React, {Component} from "react";


class MyData extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Moje dane</h1>
        <p>Imię: {this.props.user.name}</p>
        <p>Login: {this.props.user.login}</p>
        <p>Password: {this.props.user.password}</p>
      </React.Fragment>
    );
  }
}

export default MyData;
