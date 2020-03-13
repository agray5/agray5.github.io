// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBunIWORlhaGujm13tZx-LQflk8zUSYZfM",
  authDomain: "website-13135.firebaseapp.com",
  databaseURL: "https://website-13135.firebaseio.com",
  projectId: "website-13135",
  storageBucket: "website-13135.appspot.com",
  messagingSenderId: "150359584532",
  appId: "1:150359584532:web:8ba3e5d3add21f94095c01",
  measurementId: "G-30W9PTP77Y"
};

firebase.initializeApp(firebaseConfig);

class Firebase {

  loginWithPopup () {
    return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  getUser () {
    return firebase.auth().currentUser;
  }
}

export default new Firebase();