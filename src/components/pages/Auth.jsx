import React, { useState } from 'react';
import Register from '../shared/register';
import Login from '../shared/login';

const Auth = () => {
  const [logIn, setLogIn] = useState(true);

  return (
    <div className="w-screen h-screen bg-auth bg-cover bg-center">
      {logIn ? (
        <Login changeMode={() => setLogIn(false)} />
      ) : (
        <Register changeMode={() => setLogIn(true)} />
      )}
    </div>
  );
};

export default Auth;
