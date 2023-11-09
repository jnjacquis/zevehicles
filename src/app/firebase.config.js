import firebase from 'firebase';
import { initializeApp } from "firebase/app";

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

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export default firebase;