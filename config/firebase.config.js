import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";  
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBb0cSeGt80QBqVrFxaV8LkU50FEdBGrC0",
  authDomain: "vetforall-e2d3b.firebaseapp.com",
  projectId: "vetforall-e2d3b",
  storageBucket: "vetforall-e2d3b.appspot.com",
  messagingSenderId: "747005082763",
  appId: "1:747005082763:web:c76557cfec2c75e518a88e",
  measurementId: "G-K221129WLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { app, db, auth}