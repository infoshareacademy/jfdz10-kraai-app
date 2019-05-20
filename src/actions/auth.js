import firebase from 'firebase'
import { userInfo } from 'os';

export const SIGN_IN_UP = 'SIGN_IN_UP'
export const EMAIL_INPUT_CHANGE = 'EMAIL_INPUT_CHANGE'
export const PASSWORD_INPUT_CHANGE = 'PASSWORD_INPUT_CHANGE'
export const CLEAR_INPUTS = 'CLEAR_INPUTS'

export const signIn = () => (dispatch, getState) => {
    firebase
        .auth()
        .signInWithEmailAndPassword(getState().auth.emailInput, getState().auth.passwordInput)
        .then(value => dispatch({
            type: SIGN_IN_UP,
            user: value.user
        }))
        .catch(function(error) {
          return alert(`Nie znaleziono użytkownika.`);
        })
  };

  export const emailInputChange = (value) => ({
    type: EMAIL_INPUT_CHANGE,
    value
  })

  export const passwordInputChange = (value) => ({
    type: PASSWORD_INPUT_CHANGE,
    value
  })

  export const clearInputs = () =>({
      type: CLEAR_INPUTS
  })