// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8qXictWqSp1-8tHdZ8t9-VtxRocWP3_Q",
  authDomain: "coderhouse-rey-decibel.firebaseapp.com",
  projectId: "coderhouse-rey-decibel",
  storageBucket: "coderhouse-rey-decibel.appspot.com",
  messagingSenderId: "614647513130",
  appId: "1:614647513130:web:167f12d5714fdf37730353"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}