import React, { useState } from 'react';
import Register from './Register'; // Adjust the import path as needed
import Login from './Login'; // Adjust the import path as needed
import './Auth.css';

function Auth() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className='xx'>
      {showLogin ? (
        <>
          <Login />
          <button onClick={() => setShowLogin(false)}>Go to Register</button>
        </>
      ) : (
        <>
          <Register />
          <button onClick={() => setShowLogin(true)}>Go to Login</button>
        </>
      )}
    </div>
  );
}

export default Auth;
