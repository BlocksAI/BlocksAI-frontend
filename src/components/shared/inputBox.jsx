import React from 'react';
import { Input } from '@/components/ui/input';

const InputBox = ({ name, type }) => {
  return (
    <>
      <label className="text-2xl font-bold mr-auto">{name}</label>
      <Input type={type} placeholder={name} />
    </>
  );
};

export default InputBox;
