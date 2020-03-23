import firebase from "firebase/app";
import "firebase/firestore";

var config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: "help-maps-party.firebaseapp.com",
  databaseURL: "https://help-maps-party.firebaseio.com",
  projectId: "help-maps-party",
  storageBucket: "help-maps-party.appspot.com",
  messagingSenderId: "775261529087",
  appId: "1:775261529087:web:2b68b7401a42aeddd67dca",
  measurementId: "G-QZ4WN8M6RX"
};

const db = firebase.initializeApp(config).firestore();

export default db;
