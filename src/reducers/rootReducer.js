import { combineReducers } from 'redux'
import sheltersReducer from './sheltersReducer'
import animalsReducer from './animalsReducer'
import authReducer from './authReducer'


export default combineReducers({
  shelters: sheltersReducer,
  animals: animalsReducer,
  auth: authReducer
})
