import React from 'react';
import User from '../../assets/User.png';

const MessageRight = ({ message }) => {
  return (
    <div className="flex flex-row-reverse items-center ml-10">
      <img src={User} alt="robot" className="w-10 mr-10" />
      <div className="relative rounded-l-lg rounded-tr-lg bg-slate-900 text-white w-2/4 p-4 px-8">
        {message}
      </div>
    </div>
  );
};

export default MessageRight;
