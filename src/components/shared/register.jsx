import React from 'react';
import Logo from '../../assets/logo.png';
import { Input } from '@/components/ui/input';
import RememberMe from './rememberme';

const Register = ({ changeMode }) => {
  return (
    <div className="mr-auto w-1/2 h-full bg-white flex flex-col items-center justify-center">
      <img src={Logo} alt="Auth Background" className="mb-16" />
      <form className="px-32 w-full flex flex-col justify-center items-center gap-4">
        <label className="text-2xl font-bold mr-auto">Email</label>
        <Input type="email" placeholder="Email" />
        <label className="text-2xl font-bold mr-auto">Password</label>
        <Input type="password" placeholder="Password" />
        <label className="text-2xl font-bold mr-auto">Confirm Password</label>
        <Input type="password" placeholder="Password" />
        <RememberMe />
        <button className="w-full bg-[#5B9BD5] text-white rounded-lg my-2">
          Sign Up
        </button>
        <p className="text-sm">
          Already have an account?&nbsp;
          <span className="text-blue-500 cursor-pointer" onClick={changeMode}>
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
