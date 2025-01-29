
import React from 'react';
import './App.css'; // Importar o arquivo CSS
import SignIn from './pages/SignIn/signIn';
import SignUp from './pages/SignUp/signUp';
import Home from './pages/Home/home';
import Mob from './pages/Home/components/Mob';

const App: React.FC = () => {
  return (
    <div>
      <SignIn />
      <SignUp />
      <Home />
      <Mob />
    </div>
  );
};

export default App;

