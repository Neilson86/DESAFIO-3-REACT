
import React from 'react';
import './App.css'; // Importar o arquivo CSS

const SignIn: React.FC = () => {
  return (
    <div className="background">
      <div className="overlay">
        <h1>Audio</h1>
        <p>It's modular and designed to last</p>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot Password</a>
          <button type="submit">Sign In</button>
          <button type="button">Sign in with Google</button>
        </form>
        <p>Didn't have any account? <a href="#">Sign Up here</a></p>
      </div>
    </div>
  );
};

export default SignIn;

