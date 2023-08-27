import React, { useState } from 'react';
import { Input } from '@/components/ui/input';

const Step1 = ({ name, setName, incrementStep }) => {
  return (
    <div className="flex flex-col w-1/2">
      <h1 className="mb-4">Step 1</h1>
      <p className="text-xl my-4">What is the name of your Block?</p>
      <Input
        type="text"
        placeholder="Enter Block Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        type="button"
        className={
          (name === '' ? 'bg-[#686868]' : 'bg-[#333333]') +
          ' text-white w-24 mt-2 self-end'
        }
        disabled={name === ''}
        onClick={() => {
          if (name !== '') {
            incrementStep();
          }
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
