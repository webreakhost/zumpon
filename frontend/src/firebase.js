import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyDr8em_V1Wn3g_vaOhSEHbO3CQpYa1JFCM",
    authDomain: "makeustrip-996a0.firebaseapp.com",
    projectId: "makeustrip-996a0",
    storageBucket: "makeustrip-996a0.firebasestorage.app",
    messagingSenderId: "772359025373",
    appId: "1:772359025373:web:27b4426333a61ddafea134",
    measurementId: "G-3613YRGN3P"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export { auth, provider, signInWithPopup };
