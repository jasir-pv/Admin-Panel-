// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXqvw5xm6Hwqug5EZe4XECD8ZgIrnMqpQ",
  authDomain: "shop-aeba7.firebaseapp.com",
  projectId: "shop-aeba7",
  storageBucket: "shop-aeba7.appspot.com",
  messagingSenderId: "68018289752",
  appId: "1:68018289752:web:08fe5dab2bb960d8b09e2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app