// Import the functions you need from the SDKs you need 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4CehgzxbeMCZicf8-NYwRJLEwGX1S_4g",
  authDomain: "nextjs-auth-a5d48.firebaseapp.com",
  projectId: "nextjs-auth-a5d48",
  storageBucket: "nextjs-auth-a5d48.appspot.com",
  messagingSenderId: "1062591994237",
  appId: "1:1062591994237:web:5f77e1d5c5b1e1dd7b9414"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);