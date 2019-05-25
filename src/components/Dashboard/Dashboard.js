import React from "react";
import ViewsLabel from "./ViewsLabel";
import "./Dashboard.css";
import firebase from "firebase";
import "./Dashboard.css";
import Particles from "react-particles-js";

const Dashboard = () => {
    return (
        <div className="dash__wrapper">
            <Particles
                params={{
                    polygon: {
                        type: "outside",
                        move: {
                            radius: 10
                        }
                    }
                }}
            />
            <div className="content">
                <h1>dupa</h1>
            </div>
        </div>
    );
};

export default Dashboard;
