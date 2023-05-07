// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_ewCpUbLgw-aPPBYar6gCf2bHHw8BHys",
  authDomain: "streaksapp-35462.firebaseapp.com",
  projectId: "streaksapp-35462",
  storageBucket: "streaksapp-35462.appspot.com",
  messagingSenderId: "896539128568",
  appId: "1:896539128568:web:2c9c965f36b38f4676410d",
  measurementId: "G-F9JW9TEDQD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);