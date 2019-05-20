import {FETCH_SHELTERS} from '../actions/shelters'

const initialState = {
    shelters: []
  }
  
  export default function sheltersReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_SHELTERS: {
        return {
          ...state,
          shelters: Object.keys(action.shelters).map(key => ({
            ...action.shelters[key]
          }))
        }
      }
      default: {
        return state
      }
    }
  }