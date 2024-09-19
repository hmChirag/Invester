// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkx3frI6q7FmY9FWBKG1sr0tMpzSMEUoc",
  authDomain: "invester-56b88.firebaseapp.com",
  projectId: "invester-56b88",
  storageBucket: "invester-56b88.appspot.com",
  messagingSenderId: "93258092317",
  appId: "1:93258092317:web:315cbca16a900cdb895bf4",
  measurementId: "G-J7ZFBZ9S2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);