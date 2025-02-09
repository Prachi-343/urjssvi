import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Bread from '../components/Breadcrumb.jsx';
import Login from '../components/Login.jsx';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to the desired page after successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Header />
      <Bread />
      <Login 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        error={error}
      />
      <Footer />
    </div>
  );
};

export default Auth;