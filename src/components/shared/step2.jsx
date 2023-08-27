import React from 'react';
import { Textarea } from '@/components/ui/textarea';

const Step2 = ({
  description,
  setDescription,
  decrementStep,
  incrementStep,
}) => {
  return (
    <div className="flex flex-col w-1/2">
      <h1 className="mb-4">Step 2</h1>
      <p className="text-xl my-4">What does your block do?</p>
      <Textarea
        type="text"
        placeholder="Enter Block Name"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <div className="flex items-center justify-center gap-4 self-end">
        <button
          type="button"
          className={'bg-[#333333] text-white w-32 mt-2'}
          onClick={decrementStep}
        >
          Previous
        </button>
        <button
          type="button"
          className={
            (description === '' ? 'bg-[#686868]' : 'bg-[#333333]') +
            ' text-white w-24 mt-2'
          }
          disabled={description === ''}
          onClick={() => {
            if (description !== '') {
              incrementStep();
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
