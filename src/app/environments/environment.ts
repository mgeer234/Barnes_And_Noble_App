export const environment = {
    production: false
  };
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAijMjETeJpqV0II3L122JQmVo2LP7g5SI",
  authDomain: "barnes-and-noble-app.firebaseapp.com",
  databaseURL: "https://barnes-and-noble-app-default-rtdb.firebaseio.com",
  projectId: "barnes-and-noble-app",
  storageBucket: "barnes-and-noble-app.appspot.com",
  messagingSenderId: "138153423077",
  appId: "1:138153423077:web:5b7efbaa32e15d7465240c",
  measurementId: "G-RZ254PEM6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);