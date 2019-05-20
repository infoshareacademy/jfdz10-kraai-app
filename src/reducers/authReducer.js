import {SIGN_IN_UP, EMAIL_INPUT_CHANGE, PASSWORD_INPUT_CHANGE, CLEAR_INPUTS} from '../actions/auth'

const initialState = {
     emailInput : '',
     passwordInput: '',
     user: null
 }

 export default function auth(state = initialState, action) {
    switch(action.type) {
      case SIGN_IN_UP: {
        return {
          ...state,
          emailInput: '',
          passwordInput: '',
          user: action.user
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
      default: {
        return state
      }
    }
  }