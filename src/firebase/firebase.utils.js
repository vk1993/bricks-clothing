import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDKIoK4OwdMnhZrotiYxmLSLNPZS9rRyCg",
    authDomain: "crown-shop-58b97.firebaseapp.com",
    databaseURL: "https://crown-shop-58b97.firebaseio.com",
    projectId: "crown-shop-58b97",
    storageBucket: "",
    messagingSenderId: "162245193139",
    appId: "1:162245193139:web:902879121ca57aaa"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider  = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt : 'select_account'});


export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
