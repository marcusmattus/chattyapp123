import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDrGKbr4r8m228b1D3m0hYv2gEnf3vwAwM",
  authDomain: "chattyapp-3365e.firebaseapp.com",
  databaseURL: "https://chattyapp-3365e.firebaseio.com",
  projectId: "chattyapp-3365e",
  storageBucket: "chattyapp-3365e.appspot.com",
  messagingSenderId: "338279886997",
  appId: "1:338279886997:web:78eaae2f94569deb0b6b9c",
  measurementId: "G-1YHKEX3XV6"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const authentication = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { database, authentication, provider };
