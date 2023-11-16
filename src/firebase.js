// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtI1cP8RW8rSj18Tzira5euc3PNE8iJUM",
  authDomain: "react-chat-app-41bfa.firebaseapp.com",
  projectId: "react-chat-app-41bfa",
  storageBucket: "react-chat-app-41bfa.appspot.com",
  messagingSenderId: "26356879422",
  appId: "1:26356879422:web:05c84fe121990fd7cf816f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
