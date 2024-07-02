import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDkOkyUOfpqD8kytiCJigfSELHN9AIUfZs",
  authDomain: "ethioplus-dad06.firebaseapp.com",
  projectId: "ethioplus-dad06",
  storageBucket: "ethioplus-dad06.appspot.com",
  messagingSenderId: "909296039559",
  appId: "1:909296039559:web:99d19fcc8ce7d962b1ea22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
auth.languageCode = 'it';
const db = getFirestore(app); 
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage, db };
