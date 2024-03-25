// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMgRprneQX3Z97L2oy1R9j1W09XaPMRwk",
  authDomain: "answers-5f49a.firebaseapp.com",
  projectId: "answers-5f49a",
  storageBucket: "answers-5f49a.appspot.com",
  messagingSenderId: "830933167722",
  appId: "1:830933167722:web:e2d749e7c832d2e31ea413"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);