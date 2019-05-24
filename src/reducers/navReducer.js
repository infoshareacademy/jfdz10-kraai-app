import {ACTIVE_ITEM} from '../actions/nav'

const initialState = {
     activeItem: ''
 }

 export default function auth(state = initialState, action) {
    switch(action.type) {
      case ACTIVE_ITEM: {
        return {
          ...state,
          activeItem: action.name
          }
        }
        
      default: {
        return state
      }
    }
  }