import React, { useEffect, useState } from 'react';
import Step1 from '../shared/step1';
import Step2 from '../shared/step2';
import Step3 from '../shared/step3';
import Step4 from '../shared/step4';

const AddBlock = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);

  const incrementStep = () => {
    setStep(step + 1);
  };

  const decrementStep = () => {
    setStep(step - 1);
  };

  const submit = () => {
    console.log('submitted');
  };

  useEffect(() => {
    console.log(file);
  }, [file]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1 name={name} setName={setName} incrementStep={incrementStep} />
        );
      case 2:
        return (
          <Step2
            description={description}
            setDescription={setDescription}
            incrementStep={incrementStep}
            decrementStep={decrementStep}
          />
        );
      case 3:
        return (
          <Step3
            incrementStep={incrementStep}
            decrementStep={decrementStep}
            category={category}
            setCategory={setCategory}
          />
        );
      case 4:
        return (
          <Step4
            decrementStep={decrementStep}
            file={file}
            submit={submit}
            setFile={setFile}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full bg-[#FFB55E] flex items-center justify-center">
      {renderStep()}
    </div>
  );
};

export default AddBlock;
