import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBL0iD6DCmDL6B_iozrJ43BCdALus2Ox8Q",
  authDomain: "teammate-393d7.firebaseapp.com",
  projectId: "teammate-393d7",
  storageBucket: "teammate-393d7.appspot.com",
  messagingSenderId: "247282133843",
  appId: "1:247282133843:web:acaa930916b4bfea664fa6",
  measurementId: "G-WQDHVX345S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const database = getDatabase(app)
export const storage = getStorage(app)
export const auth = getAuth()
const analytics = getAnalytics(app);
export const googleProvider = new GoogleAuthProvider()