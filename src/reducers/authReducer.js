import {SIGN_IN_UP, EMAIL_INPUT_CHANGE, PASSWORD_INPUT_CHANGE, CLEAR_INPUTS, LOG_OUT} from '../actions/auth'

const initialState = {
     emailInput : '',
     passwordInput: '',
     user: null,
     favAnimals: null
 }

 export default function auth(state = initialState, action) {
    switch(action.type) {
      case SIGN_IN_UP: {
        return {
          ...state,
          emailInput: '',
          passwordInput: '',
          user: action.user,
          favAnimals: action.user.favAnimalId ? Object.keys(action.user.favAnimalId).map(key => ({animalID: action.user.favAnimalId[key], id: key})) : []
          }
        }
        case EMAIL_INPUT_CHANGE: {
            return{
                ...state,
                emailInput: action.value
            }
        }
        case PASSWORD_INPUT_CHANGE: {
            return{
                ...state,
                passwordInput: action.value
            }
        }
        case CLEAR_INPUTS: {
            return {
                ...state,
                emailInput: '',
                passwordInput: ''
            }
        }
        case LOG_OUT: {
          return {
              ...state,
              user: null
          }
      }
      default: {
        return state
      }
    }
  }