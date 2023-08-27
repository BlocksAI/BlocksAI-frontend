import React, { useState } from 'react';
import Ellipsis from '../../assets/ellipsis.png';
import Add from '../../assets/add.png';
import Edit from '../../assets/edit.png';
import Cross from '../../assets/cross.png';
import { useNavigate } from 'react-router-dom';

const MoreButton = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const navAddBlock = () => {
    navigate('/addblock');
  };

  return (
    <div className="rounded-full text-black fixed bottom-8 right-8 flex items-end justify-center cursor-pointer flex-col gap-4">
      <div
        className={
          (open ? '' : 'hidden ') + 'flex items-center justify-center gap-2'
        }
      >
        <p>Edit your block</p>
        <div className="rounded-full bg-[#2C2C2C] w-12 h-12 flex items-center justify-center cursor-pointer">
          <img src={Edit} alt="edit" className="w-6 h-6" />
        </div>
      </div>
      <div
        className={
          (open ? '' : 'hidden ') + 'flex items-center justify-center gap-2'
        }
        onClick={navAddBlock}
      >
        <p>Add new block</p>
        <div className="rounded-full bg-[#2C2C2C] w-12 h-12 flex items-center justify-center cursor-pointer">
          <img src={Add} alt="add" className="w-6 h-6" />
        </div>
      </div>
      <div
        className="rounded-full bg-black w-16 h-16 flex items-center justify-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <img src={Cross} alt="cross" className="w-8 h-8" />
        ) : (
          <img src={Ellipsis} alt="ellipsis" className="w-16 h-16" />
        )}
      </div>
    </div>
  );
};

export default MoreButton;
