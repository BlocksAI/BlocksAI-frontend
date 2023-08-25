import React, { useState } from 'react';

const Auth = () => {
  const [logIn, setLogIn] = useState(true);

  return (
    <div className="w-screen h-screen bg-black">
      {logIn ? <h1>Login Page</h1> : <h1>Register Page</h1>}
    </div>
  );
};

export default Auth;
