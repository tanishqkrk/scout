// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAasAMsJCBwRsu16YBs5AmyuvzO-mHLyOQ",
  authDomain: "scout-e2d25.firebaseapp.com",
  projectId: "scout-e2d25",
  storageBucket: "scout-e2d25.appspot.com",
  messagingSenderId: "472781873437",
  appId: "1:472781873437:web:7b54f5ba9cd55d254b01f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth =
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
