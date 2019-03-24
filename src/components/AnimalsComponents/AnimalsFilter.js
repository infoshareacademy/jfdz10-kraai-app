import React, { Component } from "react";
import { Input, Dropdown, Form } from "semantic-ui-react";
import "./AnimalsFilter.css";

const kind = fetch("/kind.json").then(res => res.json());

class AnimalsFilter extends Component {
  state = {
    kindFilter: "",
    nameFilter: "",
    kindOptions: [],
    animalOptions: []
  };

  componentDidMount() {
    kind
      .then(kind =>
        kind.map(kind => ({
          key: kind.id,
          text: kind.pl,
          value: kind.id
        }))
      )
      .then(kindArr => this.setState({ kindOptions: kindArr }));
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
    const { kindFilter, nameFilter, kindOptions } = this.state;
    return (
      <Form>
        <Input
          placeholder="Nazwa..."
          value={nameFilter}
          onChange={this.onInputNameChange}
        />
        <Dropdown
          clearable
          options={kindOptions}
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
