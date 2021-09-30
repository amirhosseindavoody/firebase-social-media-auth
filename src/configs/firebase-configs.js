import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyf1hO8T29xILZPtDaZEHf8FR5EkTCHw8",
  authDomain: "angular-theorem-170815.firebaseapp.com",
  projectId: "angular-theorem-170815",
  storageBucket: "angular-theorem-170815.appspot.com",
  messagingSenderId: "466053256382",
  appId: "1:466053256382:web:2e08585e9cd0db7f0c3aef"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;