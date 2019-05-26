import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Table , Input, Button, Dropdown} from "semantic-ui-react";
import {changeUserData} from '../../actions/auth'

const polandRegions = fetch("https://api-v3.mojepanstwo.pl/dane/wojewodztwa")
  .then(resp => resp.json())
  
class MyData extends Component {
state= {
  regionOptions: [],
  isEdited: false,
  nickInput: this.props.user.displayName,
  selectedRegion: this.props.user.region,
}
  componentDidMount() {
    polandRegions
      .then(data =>
        data.Dataobject.map(region => region.data["wojewodztwa.nazwa"])
      )
      .then(regionNames =>
        regionNames.map((region, i) => ({
          key: i,
          text: region,
          value: region
        }))
      )
      .then(regionOptions => this.setState({ regionOptions }));
  }
  render() {
    const { user , changeUserData} = this.props;
    const {regionOptions, isEdited, nickInput, selectedRegion} = this.state
    return (
      <div>
        <h1>Moje dane</h1>
        {isEdited ? <Button primary={true} onClick={() => {this.setState({isEdited: false});
     changeUserData(nickInput, selectedRegion) }}>ZAPISZ</Button> : <Button onClick={() => this.setState({isEdited: true})}>EDYTUJ</Button>}
        <Table celled>
          <Table.Body>
            <Table.Row>
              <Table.Cell width={4}>
                <strong>Email:</strong>
              </Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
            </Table.Row>
            
            <Table.Row>
              <Table.Cell>
                <strong>Nick:</strong>
              </Table.Cell>
              <Table.Cell>{isEdited? <Input type='text' value={nickInput} onChange={(e) => this.setState({nickInput: e.target.value})}/> : user.displayName}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <strong>Województwo:</strong>
              </Table.Cell>
              <Table.Cell>{isEdited? <Dropdown
          clearable
          options={regionOptions}
          selection
          search
          placeholder="Województwo..."
          value={selectedRegion}
          onChange={(event, { value }) => this.setState({selectedRegion: value})}
        /> : user.region}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

const mapDispatchToProps = {
  changeUserData
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps, mapDispatchToProps)(MyData);
