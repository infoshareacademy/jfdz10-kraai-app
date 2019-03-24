import React, { Component } from "react";
import { Input, Dropdown, Form } from "semantic-ui-react";
import "./AnimalsFilter.css";

const animals = fetch("/animals.json").then(resp => resp.json());

class AnimalsFilter extends Component {
  state = {
    kindFilter: "",
    nameFilter: "",
    kindOptions: [],
    animalOptions:[]
  };

  componentDidMount() {
    animals.then(animals =>
      animals.map((animals, i) => ({
        kind: animals.kindId,
        name: animals.name
      }))
    );
  }

  filterCollection = () => ({
      kind: this.state.kindFilter,
      name: this.state.nameFilter
  });

  onInputNameChange = event => {
    this.setState({ nameFilter: event.target.value }, () => {
      console.log(this.filterCollection());
      this.props.onFilterChange(this.filterCollection());
    });
  };


  onDropdownKindChange = (event, { value }) => {
    this.setState({ kindFilter: value }, () =>
      this.props.onFilterChange(this.filterCollection())
    );
  };

  render() {
    const { kindFilter, nameFilter } = this.state;
    return (
      <Form>
        <Input
          placeholder="Nazwa..."
          value={nameFilter}
          onChange={this.onInputNameChange}
        />
        <Dropdown
          clearable
          options={this.state.animalOptions}
          selection
          search
          placeholder="Rodzaj zwierzaka..."
          value={kindFilter}
          onChange={this.onDropdownKindChange}
        />
      </Form>
    );
  }
}

export default AnimalsFilter;
