import firebase from "firebase/app";
import "firebase/firestore";

var config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.envVUE_APP_MEASUREMENT_ID,
};

const db = firebase.initializeApp(config).firestore();

// export default db;

const { GeoPoint } = firebase.firestore
export { db, GeoPoint }
