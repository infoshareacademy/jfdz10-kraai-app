import { combineReducers } from 'redux'
import sheltersReducer from './sheltersReducer'
import animalsReducer from './animalsReducer'
import authReducer from './authReducer'
import navReducer from './navReducer'


export default combineReducers({
  shelters: sheltersReducer,
  animals: animalsReducer,
  auth: authReducer,
  nav: navReducer
})
