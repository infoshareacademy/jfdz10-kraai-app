import { Doughnut } from "react-chartjs-2";

const DogAnimals = (props) => {
    return <Doughnut data={props.animData} options={props.AnimOptions} />;
};
