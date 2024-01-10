// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_27FL4wWFphLqhGR4PTkla8M2gqDFiK4",
  authDomain: "ecom-redux-9be02.firebaseapp.com",
  projectId: "ecom-redux-9be02",
  storageBucket: "ecom-redux-9be02.appspot.com",
  messagingSenderId: "403686386333",
  appId: "1:403686386333:web:3899280a9fcb9376de0274",
  measurementId: "G-EZLRBRSL0N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
