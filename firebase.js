// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpClNK66B9zhB0j-M6Szq_qvSR4xM44qU",
  authDomain: "twitter-clone-e9917.firebaseapp.com",
  projectId: "twitter-clone-e9917",
  storageBucket: "twitter-clone-e9917.appspot.com",
  messagingSenderId: "504192380510",
  appId: "1:504192380510:web:74f88cf1bcf54b07468ecf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
