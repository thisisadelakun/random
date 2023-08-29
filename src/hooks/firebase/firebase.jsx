import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import "firebase/compat/auth";
import "firebase/compat/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAK7M3XebF6XbsYIyvpIC5I4yyjSRXz4eE",
    authDomain: "adelakunportfolio.firebaseapp.com",
    projectId: "adelakunportfolio",
    storageBucket: "adelakunportfolio.appspot.com",
    messagingSenderId: "905977734655",
    appId: "1:905977734655:web:021d3255b1d70b8f0db3ca",
    measurementId: "G-GD6QXE4TXH"
};


firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const analytics = firebase.analytics();


export {
    firebase,
    analytics,
    auth,
    firestore,
    storage,
}