import React from 'react';
import Logo from '../../assets/Logo.png';
import RememberMe from './rememberme';
import { motion as m } from 'framer-motion';
import InputBox from './inputBox';

const Register = ({ changeMode }) => {
  return (
    <m.div
      className="mr-auto w-1/2 h-full bg-white flex flex-col items-center justify-center"
      initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      transition={{ duration: 0.5 }}
    >
      <img src={Logo} alt="Auth Background" className="mb-8" />
      <m.form
        className="px-32 w-full flex flex-col justify-center items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <InputBox name="Email" type="email" />
        <InputBox name="Password" type="password" />
        <InputBox name="Confirm Password" type="password" />
        <RememberMe />
        <button className="w-full bg-[#5B9BD5] text-white rounded-lg my-2">
          Sign Up
        </button>
        <p className="text-lg">
          Already have an account?&nbsp;
          <span className="text-blue-500 cursor-pointer" onClick={changeMode}>
            Sign In
          </span>
        </p>
      </m.form>
    </m.div>
  );
};

export default Register;
