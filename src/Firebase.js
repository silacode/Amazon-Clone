import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAbuTgZ_PDNVhEJ7pQYv7tn0ZYPdGyg-Bk",
    authDomain: "my-clone-1ad47.firebaseapp.com",
    databaseURL: "https://my-clone-1ad47.firebaseio.com",
    projectId: "my-clone-1ad47",
    storageBucket: "my-clone-1ad47.appspot.com",
    messagingSenderId: "18340876052",
    appId: "1:18340876052:web:ecfbf1208e0f1739997c01",
    measurementId: "G-TKWBRBHM5C"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth};