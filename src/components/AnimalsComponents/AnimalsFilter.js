import React, { Component } from "react";
import { Input, Dropdown, Form } from "semantic-ui-react";
import "./Animals.css";

const kind = fetch("https://petlove-454b4.firebaseio.com/kind.json").then(res =>
    res.json()
);
const size = fetch(
    "https://petlove-454b4.firebaseio.com/animal-size.json"
).then(res => res.json());
const sex = fetch("https://petlove-454b4.firebaseio.com/animal-sex.json").then(
    res => res.json()
);

class AnimalsFilter extends Component {
    state = {
        kindFilter: "",
        nameFilter: "",
        sizeFilter: null,
        sexFilter: "",
        kindOptions: [],
        animalOptions: [],
        sizeOptions: [],
        sexOptions: []
    };

    componentDidMount() {
        kind.then(kind =>
            kind.map(kind => ({
                key: kind.id,
                text: kind.pl,
                value: kind.id
            }))
        ).then(kindArr => this.setState({ kindOptions: kindArr }));

        size.then(size =>
            size.map(size => ({
                key: size.id,
                text: size.pl,
                value: size.id
            }))
        ).then(sizeArr => this.setState({ sizeOptions: sizeArr }));

        sex.then(sex =>
            sex.map(sex => ({
                key: sex.id,
                text: sex.pl,
                value: sex.id
            }))
        ).then(sexArr => this.setState({ sexOptions: sexArr }));
    }

    filterCollection = () => ({
        kind: this.state.kindFilter,
        name: this.state.nameFilter,
        size: this.state.sizeFilter,
        sex: this.state.sexFilter
    });

    onInputNameChange = event => {
        this.setState({ nameFilter: event.target.value }, () => {
            this.props.onFilterChange(this.filterCollection());
        });
    };

    onDropdownKindChange = (event, { value }) => {
        this.setState({ kindFilter: value }, () =>
            this.props.onFilterChange(this.filterCollection())
        );
    };

    onDropdownSizeChange = (event, { value }) => {
        this.setState({ sizeFilter: value }, () =>
            this.props.onFilterChange(this.filterCollection())
        );
    };

    onDropdownSexChange = (event, { value }) => {
        this.setState({ sexFilter: value }, () =>
            this.props.onFilterChange(this.filterCollection())
        );
    };

    render() {
        const {
            kindFilter,
            nameFilter,
            kindOptions,
            sizeOptions,
            sizeFilter,
            sexFilter,
            sexOptions
        } = this.state;
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
                <Dropdown
                    clearable
                    options={sizeOptions}
                    selection
                    search
                    placeholder="Wielkość zwierzaka..."
                    value={sizeFilter}
                    onChange={this.onDropdownSizeChange}
                />
                <Dropdown
                    clearable
                    options={sexOptions}
                    selection
                    search
                    placeholder="Płeć zwierzaka..."
                    value={sexFilter}
                    onChange={this.onDropdownSexChange}
                />
            </Form>
        );
    }
}

export default AnimalsFilter;
