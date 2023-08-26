import React from 'react';
import Logo from '../../assets/Logo.png';
import Google from '../../assets/Google.png';
import Github from '../../assets/GitHub.png';
import { Input } from '@/components/ui/input';
import RememberMe from './rememberme';
import { motion as m } from 'framer-motion';
import InputBox from './inputBox';
const Login = ({ changeMode }) => {
  return (
    <m.div
      className="w-1/2 h-full bg-white flex flex-col items-center justify-center"
      initial={{ x: '0%' }}
      animate={{ x: '100%' }}
      transition={{ duration: 0.5 }}
    >
      <img src={Logo} alt="Auth Background" className="mb-16" />
      <m.form
        className="px-32 w-full flex flex-col justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <InputBox type="email" name="Email" />
        <br className="pt-2 m-0" />
        <InputBox type="password" name="Password" />
        <RememberMe />
        <button className="w-full bg-[#ED7D31] text-white rounded-lg mt-8">
          Sign In
        </button>
        <div className="flex w-full items-center justify-center px-32 py-4 gap-2">
          <hr className="w-full border-gray-300" />
          <p>or</p>
          <hr className="w-full border-gray-300" />
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
      </m.form>
    </m.div>
  );
};

export default Login;
