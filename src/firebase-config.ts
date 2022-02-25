// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth,GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXxHw2BG9rY_xW4wp1A33T2sHl5BQSzas",
  authDomain: "meetup-4fd8a.firebaseapp.com",
  projectId: "meetup-4fd8a",
  storageBucket: "meetup-4fd8a.appspot.com",
  messagingSenderId: "803299682889",
  appId: "1:803299682889:web:82266b08c1e5a427cc2d98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider()