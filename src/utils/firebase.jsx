// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPCXidZkf2HRcXBZbtytWyx9vZD7YqD0U",
  authDomain: "netflix-gpt123.firebaseapp.com",
  projectId: "netflix-gpt123",
  storageBucket: "netflix-gpt123.appspot.com",
  messagingSenderId: "1032388993614",
  appId: "1:1032388993614:web:0570b81c6dc3fb8823191f",
  measurementId: "G-JPTG1TT766"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();