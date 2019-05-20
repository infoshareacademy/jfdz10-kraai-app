import {refAnimals} from '../config/firebase'

export const FETCH_ANIMALS = 'FETCH_ANIMALS'

export const fetchAnimals = () => dispatch => {
    refAnimals.on("value", snapshot => {
      if(snapshot.exists()){
      dispatch({
        type: FETCH_ANIMALS,
        animals: snapshot.val()
      })} ;
    });
  };