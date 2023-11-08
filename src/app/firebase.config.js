import firebase from 'firebase';
import firestore from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzuumP1_iJOCJAMEXzm16tIcS3LuU5GLE",
  authDomain: "zevehicles.firebaseapp.com",
  projectId: "zevehicles",
  storageBucket: "zevehicles.appspot.com",
  messagingSenderId: "872207582760",
  appId: "1:872207582760:web:dca5f9e6fa712772da971d",
  measurementId: "G-0EK5MG8TQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase.firestore();