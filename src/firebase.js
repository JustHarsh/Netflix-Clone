import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// from firebase
const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "domain",
  projectId: "projectId",
  storageBucket: "bucket",
  messagingSenderId: "senderId",
  appId: "appId",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
