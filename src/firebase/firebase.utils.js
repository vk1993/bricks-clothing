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

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return ;
    const userRef = await firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,email,createdAt,...additionalData
            })
        }catch(error) {
            console.log('error creating user:-',error.message)
        }
    }
    return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider  = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt : 'select_account'});


export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
