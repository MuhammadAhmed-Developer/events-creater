// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApPjJUdB8cbbS8D4RHseA9BODYV1DuAxQ",
  authDomain: "events-net.firebaseapp.com",
  projectId: "events-net",
  storageBucket: "events-net.appspot.com",
  messagingSenderId: "1008530751959",
  appId: "1:1008530751959:web:26b306b27d00328b44cb92",
  measurementId: "G-MSKW3TG25H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app)

export{analytics, auth, firestore}
