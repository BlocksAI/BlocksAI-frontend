import React from 'react';
import robot from '../../assets/robot.png';

const MessageLeft = ({ message }) => {
  return (
    <div className="flex items-center ml-10">
      <img src={robot} alt="robot" className="w-16" />
      <div className="relative rounded-r-lg rounded-tl-lg bg-slate-900 px-3 text-white w-1/3">
        {message || 'Hello, how can I help you?'}
      </div>
    </div>
  );
};

export default MessageLeft;
