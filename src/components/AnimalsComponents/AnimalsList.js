import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Card, Image, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "./Animals.css";

import AnimalsFilter from "./AnimalsFilter";
import { fetchAnimals } from "../../actions/animals";
import { addToFavorite, removeFromFavorite, addReservation } from "../../actions/auth";

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
            const shelterPanel = this.props.shelterPanelId >= 0
                ? this.props.shelters.find(
                      shelter => shelter.id === this.props.shelterPanelId
                  )
                : false;
                

            return (
                animalNameLowercase.includes(nameFilteredLowercase) &&
                (!kindFilter || animalKind.includes(kindFilter)) &&
                (!sizeFilter || animalSize === sizeFilter) &&
                (!sexFilter || animalSex === sexFilter) &&
                (this.props.userPanel
                    ? favAnimals
                          .map(({ animalID }) => animalID)
                          .includes(animalId)
                    : true) &&
                (!!shelterPanel.animalsId
                    ? shelterPanel.animalsId.includes(animalId)
                    : true)&&
                    !animal.adopted
            );
        });
    }

    render() {
        const {
            user,
            addToFavorite,
            removeFromFavorite,
            favAnimals,
            addReservation
        } = this.props;

        return (
            <Fragment>
                <AnimalsFilter
                    onFilterChange={filter => this.setState({ filter })}
                />
                <Card.Group doubling itemsPerRow={3} stackable>
                    {this.getFilteredAnimals().map(animal => (
                        <Card key={animal.id} >
                        {animal.reserved ? <div style={{width: '100%', height: '100%', backgroundColor: 'red', zIndex: '100', opacity: '0.7', position: 'absolute', textAlign: 'center', paddingTop: '50%', color: 'white', fontSize: '2rem'}}>Rezerwacja</div> : ''}
                            <NavLink to={`/animals/${animal.id}`}>
                                <Image src={animal.avatar} height="300px" />
                            </NavLink>

                            <Card.Content>
                                <Fragment>
                                    <div className="content__wrapper">
                                        <Card.Header>{animal.name}</Card.Header>
                                        <Card.Description>
                                            {animal.description}
                                        </Card.Description>
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
                                    )}{this.props.userPanel && !user.reservation  ? <Icon
                      style={{ cursor: "pointer", float: "left" , width: 'auto'}}
                      name="signup"
                      size="big"
                      onClick={()=> addReservation(animal.id)}
                    > <p style={{float: 'left'}}>Rezerwuj</p></Icon> : ''}
                                </Fragment>
                            </Card.Content>
                        </Card>
                    ))}
                </Card.Group>
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    animals: state.animals.animals,
    user: state.auth.user,
    favAnimals: state.auth.favAnimals,
    shelters: state.shelters.shelters
});

const mapDispatchToProps = {
    fetchAnimals,
    addToFavorite,
    removeFromFavorite,
    addReservation
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnimalsList);
