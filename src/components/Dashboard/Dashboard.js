import React, { Component } from "react";
import "./Dashboard.css";
import firebase from "firebase";
import "./Dashboard.css";
import Particles from "react-particles-js";
import Chart from "react-apexcharts";
import { refAnimals } from "../../config/firebase";
import { refKind } from "../../config/firebase";

class Dashboard extends Component {
    state = {
        optionsAnimals: {
            chart: {
                type: "donut"
            },
            labels: ["Kot", "Pies"],
            legend: {
                position: "bottom",
                labels: {
                    colors: "#fff"
                },
                fontSize: "16px",
                fontFamily: "Lato"
            },
            theme: {
                mode: "light",
                palette: "palette3",
                monochrome: {
                    enabled: false,
                    color: "#255aee",
                    shadeTo: "light",
                    shadeIntensity: 0.65
                }
            }
        },
        optionsShelter: {
            chart: {
                type: "donut"
            },
            labels: ["Warszawa", "Gdynia", "Katowice"],
            plotOptions: {},
            legend: {
                position: "bottom",
                labels: {
                    colors: "#fff"
                },
                fontSize: "16px",
                fontFamily: "Lato"
            },
            theme: {
                mode: "light",
                palette: "palette3",
                monochrome: {
                    enabled: false,
                    color: "#255aee",
                    shadeTo: "light",
                    shadeIntensity: 0.65
                }
            }
        },
        animals: [3, 3],
        shelters: [3, 2, 1],
        animalsId: [],
        kind: []
    };

    componentDidMount() {
        refAnimals.on("value", snapshot =>
            this.setState({
                animalsId: snapshot.val().map(animal => animal.kindId)
            })
        );

        refKind.on("value", snapshot =>
            this.setState({
                kind: snapshot.val()
            })
        );
    }

    render() {
        return (
            <div className="dash__wrapper">
                <div className="particles__wrapper">
                    <Particles
                        params={{
                            particles: {
                                number: {
                                    value: 80,
                                    density: {
                                        enable: true,
                                        value_area: 800
                                    }
                                },
                                color: {
                                    value: "#ffffff"
                                },
                                shape: {
                                    type: "triangle",
                                    stroke: {
                                        width: 0,
                                        color: "#000000"
                                    },
                                    polygon: {
                                        nb_sides: 9
                                    },
                                    image: {
                                        src: "img/github.svg",
                                        width: 100,
                                        height: 100
                                    }
                                },
                                opacity: {
                                    value: 0.5,
                                    random: false,
                                    anim: {
                                        enable: false,
                                        speed: 1,
                                        opacity_min: 0.1,
                                        sync: false
                                    }
                                },
                                size: {
                                    value: 1,
                                    random: true,
                                    anim: {
                                        enable: true,
                                        speed: 34.107242916656496,
                                        size_min: 7.308694910712106,
                                        sync: false
                                    }
                                },
                                line_linked: {
                                    enable: true,
                                    distance: 150,
                                    color: "#ffffff",
                                    opacity: 0.4,
                                    width: 1
                                },
                                move: {
                                    enable: true,
                                    speed: 6,
                                    direction: "none",
                                    random: true,
                                    straight: false,
                                    out_mode: "out",
                                    bounce: false,
                                    attract: {
                                        enable: false,
                                        rotateX: 600,
                                        rotateY: 1200
                                    }
                                }
                            },
                            interactivity: {
                                detect_on: "canvas",
                                events: {
                                    onhover: {
                                        enable: true,
                                        mode: "repulse"
                                    },
                                    onclick: {
                                        enable: true,
                                        mode: "push"
                                    },
                                    resize: true
                                },
                                modes: {
                                    grab: {
                                        distance: 400,
                                        line_linked: {
                                            opacity: 1
                                        }
                                    },
                                    bubble: {
                                        distance: 400,
                                        size: 40,
                                        duration: 2,
                                        opacity: 8,
                                        speed: 3
                                    },
                                    repulse: {
                                        distance: 200,
                                        duration: 0.4
                                    },
                                    push: {
                                        particles_nb: 4
                                    },
                                    remove: {
                                        particles_nb: 2
                                    }
                                }
                            },
                            retina_detect: true
                        }}
                    />
                </div>

                <div className="stats">
                    <Chart
                        options={this.state.optionsAnimals}
                        series={this.state.animals}
                        type="donut"
                        width="500"
                        height="400"
                    />
                </div>
                <div className="stats_2">
                    <Chart
                        options={this.state.optionsShelter}
                        series={this.state.shelters}
                        type="donut"
                        width="500"
                        height="400"
                    />
                </div>
            </div>
        );
    }
}

export default Dashboard;
