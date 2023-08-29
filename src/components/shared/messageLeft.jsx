import React, { useEffect, useState } from 'react';
import robot from '../../assets/robot.png';
import { Input } from '../ui/input';
import { uploadFile } from '../../utils/auth';
import { useToast } from '@/components/ui/use-toast';

const MessageLeft = ({ message, htmlCode }) => {
  const [file, setFile] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    const upload = async () => {
      uploadFile(file);
    };
    if (file) {
      upload();
      toast({
        description: 'File uploaded successfully!',
      });
    }
  }, [file]);

  return (
    <>
      {message ? (
        <div className="flex items-center ml-10">
          <img src={robot} alt="robot" className="w-16" />
          <div className="relative rounded-r-lg rounded-tl-lg bg-slate-900 text-white w-1/3 p-4 px-8">
            <p className="mb-4">{message}</p>
            {htmlCode && (
              <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
            )}
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default MessageLeft;
