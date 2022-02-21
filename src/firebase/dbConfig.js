// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHbbUWLkeGA-2h32O4560K3a0cd9AcVDY",
  authDomain: "proyecto-react-lautaro-caceres.firebaseapp.com",
  projectId: "proyecto-react-lautaro-caceres",
  storageBucket: "proyecto-react-lautaro-caceres.appspot.com",
  messagingSenderId: "564536233257",
  appId: "1:564536233257:web:2944e83326293a84b63b38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp= () => {
    return app
}