// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBKM85HxZ7N3f9ORpJLqvXNpeYzN4Kr_MU',
  authDomain: 'netflix-redesign-436db.firebaseapp.com',
  projectId: 'netflix-redesign-436db',
  storageBucket: 'netflix-redesign-436db.appspot.com',
  messagingSenderId: '1036388701372',
  appId: '1:1036388701372:web:0bcea548eb07cb1665acb9',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
