import {FETCH_ANIMALS} from '../actions/animals'

const initialState = {
    animals: []
  }
  
  export default function animalReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_ANIMALS: {
        return {
          ...state,
          animals: Object.keys(action.animals).map(key => ({
            ...action.animals[key]
          }))
        }
      }
      default: {
        return state
      }
    }
  }