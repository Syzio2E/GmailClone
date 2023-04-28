import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaT2VpkjMBldVyNiAWi95MKYYPhdGtmiA",
  authDomain: "auth-f188c.firebaseapp.com",
  databaseURL: "https://auth-f188c-default-rtdb.firebaseio.com",
  projectId: "auth-f188c",
  storageBucket: "auth-f188c.appspot.com",
  messagingSenderId: "646989562553",
  appId: "1:646989562553:web:4e8add26d0051ae3e41168",
  measurementId: "G-N86YGJVQWW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, db, provider };
