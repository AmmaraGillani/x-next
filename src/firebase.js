// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-45331.firebaseapp.com",
  projectId: "x-next-45331",
  storageBucket: "x-next-45331.appspot.com",
  messagingSenderId: "653620367780",
  appId: "1:653620367780:web:5be2acedd862870e32f131"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);