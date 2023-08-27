import React, { useState } from 'react';
import { Input } from '../ui/input';
import { blockPicker, chosenBlock } from '../../utils/gateway';
import MessageLeft from '../shared/messageLeft';
import MessageRight from '../shared/messageRight';

const Chatroom = () => {
  const [prompt, setPrompt] = useState('');
  const [history, setHistory] = useState([]);

  const sendPrompt = async (e) => {
    e.preventDefault();
    const { chosen_block } = await blockPicker(prompt);
    const { output } = await chosenBlock(chosen_block, prompt);
    setHistory([...history, { prompt, output }]);
    setPrompt('');
  };

  return (
    <>
      <div className="h-full w-full flex flex-row">
        <div className="bg-slate-900 h-full w-64">
          <div className="flex flex-col items-center place-content-center">
            <button className="bg-slate-900 mt-5 mb-2 w-56 h-10 items-center flex hover:bg-slate-700 focus:outline-none focus:bg-slate-600">
              <p className="text-white">Chat #1</p>
            </button>
            <button className="bg-slate-900 my-2 w-56 h-10 items-center flex hover:bg-slate-700 focus:outline-none">
              <p className="text-white">Chat #2</p>
            </button>
            <button className="bg-slate-900 my-2 w-56 h-10 items-center flex hover:bg-slate-700 focus:outline-none">
              <p className="text-white">Chat #2</p>
            </button>
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex flex-col flex-grow">
            <div className="mt-10"></div>
            {/*Robot bubble */}
            <MessageLeft />
            {history.map((item, index) => (
              <div key={index}>
                <MessageRight message={item.prompt} />
                <MessageLeft message={item.output} />
              </div>
            ))}
            <div className="fixed bottom-10 ml-20 w-4/6">
              <form onSubmit={sendPrompt}>
                <Input
                  className="w-full"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatroom;
