import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1muvpvRmV7qhCYmCGe0xSqkE44LO9IQo",
  authDomain: "food-truck-market.firebaseapp.com",
  projectId: "food-truck-market",
  storageBucket: "food-truck-market.appspot.com",
  messagingSenderId: "769777889712",
  appId: "1:769777889712:web:5f0845f5680efb132b2675"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();