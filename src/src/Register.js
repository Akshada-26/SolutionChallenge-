import React, { useState } from 'react';
import { auth, db } from './firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import './Register.css'; // Ensure CSS styles are defined as previously shared

const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
    //   const result = await signInWithPopup(auth, provider);
      window.alert("Logged in with Google!");
      // saveUserData(result.user); Uncomment or modify according to your userData handling logic
    } catch (error) {
      console.error(error.message);
    }
  };

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const register = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCredential.user.uid), {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: displayName,
      });
      window.alert("You're registered and user data saved in Firestore!");
    } catch (error) {
      window.alert("Error during registration: ", error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={register}>
        <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Display Name" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Register</button>
        <button onClick={signInWithGoogle}className='ss' >Login with Google</button> 
      </form>
    </div>
  );
}

export default Register;
