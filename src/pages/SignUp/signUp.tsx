// src/LoginPage.tsx
import React from 'react';
import './signUp.css'; // Importar o arquivo CSS
const signUp: React.FC = () => {
  return (
    <div className="background">
    <div className="overlay">
      <h1>Audio</h1>
      <p>It's modular and designed to last</p>
      <form>
        <input  type="email"  placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
        <button type="button">Sign in with Google</button>
      </form>
      <p> If you have an account? <a href="#">Sign Up here</a></p>
    </div>
    </div> 
  );
};


export default signUp;


