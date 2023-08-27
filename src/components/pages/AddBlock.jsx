import React, { useEffect, useState } from 'react';
import Step1 from '../shared/step1';
import Step2 from '../shared/step2';
import Step3 from '../shared/step3';
import Step4 from '../shared/step4';
import { createBlock, manufactureBlock } from '../../utils/blocks';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const AddBlock = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);

  const navigate = useNavigate();
  const { toast } = useToast();

  const incrementStep = () => {
    setStep(step + 1);
  };

  const decrementStep = () => {
    setStep(step - 1);
  };

  const submit = async () => {
    try {
      await createBlock({ block_name: name, description, category });
      await manufactureBlock(file);
      toast({
        description: 'Block created successfully!',
      });
      navigate('/market');
    } catch (err) {
      console.log(err);
    }
  };

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
            name={name}
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
