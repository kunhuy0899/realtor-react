// Import the functions you need from the SDKs you need

import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj9wctFlBwZ-tpSrJkog4pUi80ExNEqb8",
  authDomain: "react-realtor-bdeb7.firebaseapp.com",
  projectId: "react-realtor-bdeb7",
  storageBucket: "react-realtor-bdeb7.appspot.com",
  messagingSenderId: "589279012444",
  appId: "1:589279012444:web:0c4449189f60591de96899"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db=getFirestore()