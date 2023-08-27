import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import Alert from './alert';

const Step4 = ({ decrementStep, submit, file, setFile }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col w-1/2">
      <h1 className="mb-4">Step 4</h1>
      <p className="text-xl my-4">Upload your python file!</p>
      <Input
        type="file"
        id="filePy"
        className="file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        onChange={(e) => {
          const fileNew = e.target.files[0];
          if (fileNew.name.endsWith('.py')) {
            setFile(fileNew);
            console.log(fileNew);
          } else {
            setOpen(true);
            e.target.value = null;
          }
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
            (file === '' ? 'bg-[#686868]' : 'bg-[#333333]') +
            ' text-white w-24 mt-2'
          }
          disabled={file}
          onClick={() => {
            if (file) {
              submit();
            }
          }}
        >
          Submit
        </button>
        <Alert open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Step4;
