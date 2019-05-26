import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBlmKoFWb3srpjFo9AQd2TcYamgR-hZckM",
    authDomain: "petlove-454b4.firebaseapp.com",
    databaseURL: "https://petlove-454b4.firebaseio.com",
    projectId: "petlove-454b4",
    storageBucket: "petlove-454b4.appspot.com",
    messagingSenderId: "354540208231"
};
firebase.initializeApp(config);

export const ref = firebase.database();
export const refShelters = ref.ref("shelters/");
export const refAnimals = ref.ref("animals/");
export const refKind = ref.ref("kind/");
export const usersRef = ref.ref("usersInfo/");
export const providerGoogle = new firebase.auth.GoogleAuthProvider();
providerGoogle.addScope("https://www.googleapis.com/auth/contacts.readonly");

export const authRef = firebase.auth();
