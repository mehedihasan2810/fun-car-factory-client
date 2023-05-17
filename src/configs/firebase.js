// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGWxkWekGd8RTPRzbQbhB45dbDkiPxf7c",
  authDomain: "fun-car-factory.firebaseapp.com",
  projectId: "fun-car-factory",
  storageBucket: "fun-car-factory.appspot.com",
  messagingSenderId: "466540186149",
  appId: "1:466540186149:web:865a593747e728cdc74dcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);