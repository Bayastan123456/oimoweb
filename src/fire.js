// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyDzWDE0vMLSpETyimN_9J8cmNzAkB0uPio",
  authDomain: "hackaton-cff72.firebaseapp.com",
  projectId: "hackaton-cff72",
  storageBucket: "hackaton-cff72.appspot.com",
  messagingSenderId: "839834064442",
  appId: "1:839834064442:web:d7b1109c551c019787c703",
  measurementId: "G-LTZ4887W8C",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
