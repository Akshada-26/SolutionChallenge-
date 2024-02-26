import React, { useState } from 'react';
import { auth } from './firebase-config';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import './Register.css'; // Assuming similar styling, else create or import appropriate CSS

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.alert("You're logged in!");
    } catch (error) {
      console.error(error.message);
    }
  };

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

  return (
    <div className="form-container">
      <form onSubmit={signIn}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
        <button onClick={signInWithGoogle}className='ss' >Login with Google</button> 
      </form>
      
    </div>
    
  );
}

export default Login;
