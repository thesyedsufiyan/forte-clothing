import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD-QFx8v4xc9BNfQCOwPUS9IqAzt5eySQk",
    authDomain: "forte-db-8f29b.firebaseapp.com",
    databaseURL: "https://forte-db-8f29b.firebaseio.com",
    projectId: "forte-db-8f29b",
    storageBucket: "forte-db-8f29b.appspot.com",
    messagingSenderId: "341336656898",
    appId: "1:341336656898:web:9f4ff2e2c43b2596f1eb1b",
    measurementId: "G-5YN3VEBXPZ"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
if(!userAuth) return;

const userRef = firestore.doc(`users/${userAuth.uid}`);

const snapShot = await userRef.get();

if(!snapShot.exists){
  const { displayName, email } = userAuth;
  const createdAt = new Date();

  try {
    await userRef.set({
      displayName, 
      email,
      createdAt,
      ...additionalData
    })
  } catch (error){
    console.log('error creating user', error.message);
    
  }
}

return userRef;

};

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;