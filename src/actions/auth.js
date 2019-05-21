import { authRef } from "../config/firebase";

export const SIGN_IN_UP = "SIGN_IN_UP";
export const EMAIL_INPUT_CHANGE = "EMAIL_INPUT_CHANGE";
export const PASSWORD_INPUT_CHANGE = "PASSWORD_INPUT_CHANGE";
export const CLEAR_INPUTS = "CLEAR_INPUTS";
export const LOG_OUT = "LOG_OUT";

export const startListeningToAuthChange = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: SIGN_IN_UP,
        user
      });
    } else {
      dispatch({
        type: LOG_OUT
      });
    }
  });
};

export const signIn = () => (dispatch, getState) => {
  authRef
    .signInWithEmailAndPassword(
      getState().auth.emailInput,
      getState().auth.passwordInput
    )
    .then(value =>
      dispatch({
        type: SIGN_IN_UP,
        user: value.user
      })
    )
    .catch(function(error) {
      return alert(`Nie znaleziono użytkownika.`);
    });
};

export const signUp = () => (dispatch, getState) => {
  authRef
    .createUserWithEmailAndPassword(getState().auth.emailInput, getState().auth.passwordInput)
    .then(function() {
      alert(`Zarejestrowano pomyślnie`);
    }).then(() => authRef
    .signInWithEmailAndPassword(
      getState().auth.emailInput,
      getState().auth.passwordInput
    )
    .then(value =>
     dispatch({
        type: SIGN_IN_UP,
        user: value.user
      })
    )
    .catch(function(error) {
      return alert(`Nie znaleziono użytkownika.`);
    }) )
    .catch(function(error) {
      return alert(`Adres email w użyciu. Wpisz inny adres.`);
    });
};

export const emailInputChange = value => ({
  type: EMAIL_INPUT_CHANGE,
  value
});

export const passwordInputChange = value => ({
  type: PASSWORD_INPUT_CHANGE,
  value
});

export const clearInputs = () => ({
  type: CLEAR_INPUTS
});

export const logOut = () => dispatch => {
  authRef.signOut().then(() =>
    dispatch({
      type: LOG_OUT
    })
  );
};
