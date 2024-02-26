import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAIFQ4ej02XsVEPGLkv977iS9RxoQIFKSU",
    authDomain: "farmbotai-b7597.firebaseapp.com",
    projectId: "farmbotai-b7597",
    storageBucket: "farmbotai-b7597.appspot.com",
    messagingSenderId: "1018369724303",
    appId: "1:1018369724303:web:3ffe8ba1ab122bd63385fa",
    measurementId: "G-H6CFVB5JDX"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth };
export { db };