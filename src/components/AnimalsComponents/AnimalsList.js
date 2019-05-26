import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Card, Image, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import AnimalsFilter from "./AnimalsFilter";
import { fetchAnimals } from "../../actions/animals";
import { addToFavorite, removeFromFavorite } from "../../actions/auth";
import "./Animals.css";

class AnimalsList extends Component {
    state = {
        filter: {
            name: "",
            kind: "",
            size: null,
            sex: ""
        },

        userFavoriteAnimals: []
    };

    componentDidMount() {
        this.props.fetchAnimals();
    }

    getFilteredAnimals() {
        return this.props.animals.filter(animal => {
            const animalNameLowercase = animal.name.toLowerCase();
            const nameFilteredLowercase = this.state.filter.name.toLowerCase();
            const animalKind = [animal.kindId];
            const kindFilter = this.state.filter.kind;
            const animalSize = animal.metrics.sizeId;
            const sizeFilter = this.state.filter.size;
            const animalSex = animal.metrics.sexId;
            const sexFilter = this.state.filter.sex;
            const animalId = animal.id;
            const favAnimals = this.props.favAnimals;

            return (
                animalNameLowercase.includes(nameFilteredLowercase) &&
                (!kindFilter || animalKind.includes(kindFilter)) &&
                (!sizeFilter || animalSize === sizeFilter) &&
                (!sexFilter || animalSex === sexFilter) &&
                (this.props.userPanel
                    ? favAnimals
                          .map(({ animalID }) => animalID)
                          .includes(animalId)
                    : true)
            );
        });
    }

    render() {
        const {
            user,
            addToFavorite,
            removeFromFavorite,
            favAnimals
        } = this.props;
        const { userFavoriteAnimals } = this.state;
        return (
            <div className="animals__wrapper">
                <AnimalsFilter
                    onFilterChange={filter => this.setState({ filter })}
                />
                <Card.Group doubling itemsPerRow={5} stackable>
                    {this.getFilteredAnimals().map(animal => (
                        <Card key={animal.id}>
                            <NavLink to={`/animals/${animal.id}`}>
                                <Image src={animal.avatar} height="300px" />
                            </NavLink>

                            <Card.Content>
                                <Fragment>
                                    <div className="content__wrapper">
                                        <Card.Header textAlign="center">
                                            {animal.name}
                                        </Card.Header>
                                    </div>

                                    {user ? (
                                        !favAnimals.some(
                                            favAnimal =>
                                                favAnimal.animalID === animal.id
                                        ) ? (
                                            <Icon
                                                style={{
                                                    cursor: "pointer",
                                                    float: "right"
                                                }}
                                                name="heart outline"
                                                color="black"
                                                size="big"
                                                onClick={e =>
                                                    addToFavorite(
                                                        user.uid,
                                                        animal.id
                                                    )
                                                }
                                            />
                                        ) : (
                                            <Icon
                                                style={{
                                                    cursor: "pointer",
                                                    float: "right"
                                                }}
                                                name="heart"
                                                color="red"
                                                size="big"
                                                onClick={e =>
                                                    removeFromFavorite(
                                                        user.uid,
                                                        animal.id
                                                    )
                                                }
                                            />
                                        )
                                    ) : (
                                        ""
                                    )}
                                </Fragment>
                            </Card.Content>
                        </Card>
                    ))}
                </Card.Group>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    animals: state.animals.animals,
    user: state.auth.user,
    favAnimals: state.auth.favAnimals
});

const mapDispatchToProps = {
    fetchAnimals,
    addToFavorite,
    removeFromFavorite
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnimalsList);
