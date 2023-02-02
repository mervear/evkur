// Import the functions you need from the SDKs you need

import firebase from "firebase/app";
import 'firebase/firebase-firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7L3XILzn821lE19uNQ4WB9NUZqyY6LtE",
  authDomain: "evkurfb.firebaseapp.com",
  projectId: "evkurfb",
  storageBucket: "evkurfb.appspot.com",
  messagingSenderId: "338899625534",
  appId: "1:338899625534:web:5bda528d9ab7446a65136f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()