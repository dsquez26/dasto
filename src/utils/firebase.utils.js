import { initializeApp } from "firebase/app";


import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC9BhWVfG8Co36UiVvPwXUuMx1WxoSVoMs",
  authDomain: "dasto-db.firebaseapp.com",
  projectId: "dasto-db",
  storageBucket: "dasto-db.appspot.com",
  messagingSenderId: "806753100310",
  appId: "1:806753100310:web:bb43fad7ec32bf00cb0b37",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log("HELLLOOOOOOO", userDocRef)
}