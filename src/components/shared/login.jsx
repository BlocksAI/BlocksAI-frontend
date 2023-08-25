import React from 'react';
import Logo from '../../assets/logo.png';
import Google from '../../assets/Google.png';
import Github from '../../assets/GitHub.png';
import { Input } from '@/components/ui/input';
import RememberMe from './rememberme';

const Login = ({ changeMode }) => {
  return (
    <div className="ml-auto w-1/2 h-full bg-white flex flex-col items-center justify-center">
      <img src={Logo} alt="Auth Background" className="mb-24" />
      <form className="px-32 w-full flex flex-col justify-center items-center">
        <label className="text-2xl font-bold mr-auto">Email</label>
        <Input type="email" placeholder="Email" />
        <label className="text-2xl font-bold mr-auto mt-4">Password</label>
        <Input type="password" placeholder="Password" />
        <RememberMe />
        <button className="w-full bg-[#ED7D31] text-white rounded-lg mt-8">
          Sign In
        </button>
        <div className="flex w-full items-center justify-center px-32 py-4 gap-2">
          <hr className="w-1/2 border-gray-300" />
          <p>or</p>
          <hr className="w-1/2 border-gray-300" />
        </div>
        <button className="w-full bg-white border-2 border-black rounded-lg flex items-center justify-center gap-2">
          <img src={Google} /> <span>Sign In with Google</span>
        </button>
        <button className="w-full bg-[#373737] text-white rounded-lg mt-4 flex items-center justify-center gap-2">
          <img src={Github} /> <span>Sign In with GitHub</span>
        </button>
        <p className="text-lg pt-4">
          Don't have an account yet?&nbsp;
          <span className="text-blue-500 cursor-pointer" onClick={changeMode}>
            Register now
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
