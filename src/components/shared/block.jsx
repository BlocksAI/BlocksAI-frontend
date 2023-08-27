import React, { useState } from 'react';
import Confirmation from './confirmation';

const Block = ({ item, index, subscribe }) => {
  const [open, setOpen] = useState(false);

  return (
    <div key={index} className="flex flex-col items-center justify-center">
      <div
        key={index}
        style={{
          backgroundImage: `url(${item.image})`,
        }}
        className="w-64 h-32 rounded-md bg-cover bg-center cursor-pointer"
        onClick={() => setOpen(true)}
      ></div>
      <p>{item.block_name}</p>
      <Confirmation
        open={open}
        setOpen={setOpen}
        name={item.block_name}
        subscribe={() => subscribe(item.id)}
      />
    </div>
  );
};

export default Block;
