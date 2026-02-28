// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwY-LpEh7Qc5KnlI36YazqwXiUTOZgLaM",
  authDomain: "job-portal-a1d60.firebaseapp.com",
  projectId: "job-portal-a1d60",
  storageBucket: "job-portal-a1d60.firebasestorage.app",
  messagingSenderId: "322460892884",
  appId: "1:322460892884:web:1956e79379a20f5ad1c541"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth
