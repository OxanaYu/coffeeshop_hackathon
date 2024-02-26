// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnhubLjPhTVqpFgkBq-yOzZCJFnHVAUw8",
  authDomain: "coffeeshop-5ab59.firebaseapp.com",
  projectId: "coffeeshop-5ab59",
  storageBucket: "coffeeshop-5ab59.appspot.com",
  messagingSenderId: "914837571312",
  appId: "1:914837571312:web:b1718229b1901847c32435",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
