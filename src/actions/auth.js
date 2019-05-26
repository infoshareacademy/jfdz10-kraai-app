import { authRef, usersRef, providerGoogle } from "../config/firebase";

export const SIGN_IN_UP = "SIGN_IN_UP";
export const EMAIL_INPUT_CHANGE = "EMAIL_INPUT_CHANGE";
export const PASSWORD_INPUT_CHANGE = "PASSWORD_INPUT_CHANGE";
export const CLEAR_INPUTS = "CLEAR_INPUTS";
export const LOG_OUT = "LOG_OUT";
export const CHANGE_USER_DATA = "CHANGE_USER_DATA"


export const startListeningToAuthChange = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
      usersRef.child(user.uid).on("value", snapshot =>
        dispatch({
          type: SIGN_IN_UP,
          user: { ...user, ...snapshot.val() }
        })
      );
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
      usersRef.child(value.user.uid).on("value", snapshot =>
        dispatch({
          type: SIGN_IN_UP,
          user: { ...value.user, ...snapshot.val() }
        })
      )
    )
    .catch(function(error) {
      return alert(`Nie znaleziono użytkownika.`);
    });
};
export const signInGoogle = () => (dispatch, getState) => {
  authRef
    .signInWithPopup(providerGoogle)
    .then(result => {
      const user = result.user;
      usersRef.child(`${user.uid}`).set({ id: user.uid });
      usersRef.child(user.uid).on("value", snapshot =>
        dispatch({
          type: SIGN_IN_UP,
          user: { ...user, ...snapshot.val() }
        })
      );
    })
    .catch(function(error) {
      alert("błąd logowania");
    });
};

export const signUp = () => (dispatch, getState) => {
  authRef
    .createUserWithEmailAndPassword(
      getState().auth.emailInput,
      getState().auth.passwordInput
    )
    .then(snapshot =>
      usersRef.child(`${snapshot.user.uid}`).set({ id: snapshot.user.uid })
    )
    .catch(() => alert("Email już zarejestrowany"));
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

export const addToFavorite = (userID, animalID) => (dispatch, getState) => {
  const userFavAnimals = getState().auth.favAnimals;
  if(userFavAnimals.length === 0 || !userFavAnimals.map(({animalID}) => animalID).includes(animalID)) {
   usersRef.child(userID + '/favAnimalId' ).push(animalID)
  }

}

export const removeFromFavorite = (userID, animalID) => (dispatch, getState) => {
  const userFavAnimals = getState().auth.favAnimals
  console.log('TEST1', userFavAnimals, animalID)
  if(userFavAnimals.length > 0 ){
  const animalToDelete = userFavAnimals.find(animalInFav => animalInFav.animalID === animalID)
  console.log('TEST2', animalToDelete)
  usersRef.child(userID + '/favAnimalId/' + animalToDelete.id).remove()
  }
}

export const changeUserData = ( nick, region) => (dispatch, getState) => {
  usersRef.child(getState().auth.user.uid).update({displayName: nick, region})
  
} 