import {refShelters} from '../config/firebase'

export const FETCH_SHELTERS = 'FETCH_SHELTERS'

export const fetchShelters = () => dispatch => {
    refShelters.on("value", snapshot => {
      if(snapshot.exists()){
      dispatch({
        type: FETCH_SHELTERS,
        shelters: snapshot.val()
      })} ;
    });
  };