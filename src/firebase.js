// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGVt0-A66KyTsSWzdTvVGHImGqLyNgv3I",
  authDomain: "talk-in-f8a0d.firebaseapp.com",
  projectId: "talk-in-f8a0d",
  storageBucket: "talk-in-f8a0d.appspot.com",
  messagingSenderId: "301844786786",
  appId: "1:301844786786:web:76b683bf18c0cc93d96b3b",
  measurementId: "G-228NXTZZHZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
