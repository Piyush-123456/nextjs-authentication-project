import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCvvcrvM9U5vMP28V6GyAhgQiGR9O1jU5I",
  authDomain: "final-f1a04.firebaseapp.com",
  projectId: "final-f1a04",
  storageBucket: "final-f1a04.appspot.com",
  messagingSenderId: "232718409495",
  appId: "1:232718409495:web:8575bb69546f4d19d5a152"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);