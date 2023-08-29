import React, { useEffect, useRef, useState } from 'react';
import { Input } from '../ui/input';
import { blockPicker, chosenBlock } from '../../utils/gateway';
import MessageLeft from '../shared/messageLeft';
import MessageRight from '../shared/messageRight';
import { Skeleton } from '@/components/ui/skeleton';
import robot from '../../assets/robot.png';
import { chatHistory } from '../../utils/auth';

const Chatroom = () => {
  const messagesEnd = useRef();
  const [prompt, setPrompt] = useState('');
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendPrompt = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setPrompt('');
    setHistory([...history, { prompt, output: null }]);
    const { chosen_block } = await blockPicker(prompt);
    const { output } = await chosenBlock(chosen_block, prompt);
    setHistory([...history.slice(0, history.length), { prompt, output }]);
    setIsLoading(false);
  };

  useEffect(() => {
    const getHistory = async () => {
      const chats = await chatHistory(1);
      let historyChat = [];
      for (let x = 0; x < chats.length; x += 2) {
        historyChat.push({
          prompt: chats[x].message,
          output: chats[x + 1].message,
        });
      }
      setHistory(historyChat);
    };
    getHistory();
  }, []);

  useEffect(() => {
    messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="h-screen w-screen flex flex-row pt-12">
      <div className="bg-slate-900 h-full w-64">
        <div className="flex flex-col items-center place-content-center">
          <button className="bg-slate-900 mt-5 mb-2 w-56 h-10 items-center flex hover:bg-slate-700 focus:outline-none focus:bg-slate-600">
            <p className="text-white">Chat #1</p>
          </button>
          <button className="bg-slate-900 my-2 w-56 h-10 items-center flex hover:bg-slate-700 focus:outline-none">
            <p className="text-white">Chat #2</p>
          </button>
          <button className="bg-slate-900 my-2 w-56 h-10 items-center flex hover:bg-slate-700 focus:outline-none">
            <p className="text-white">Chat #3</p>
          </button>
        </div>
      </div>
      <div className="flex justify-center flex-col w-full">
        <div className="flex flex-col h-[90%] overflow-y-scroll">
          <div className="mt-10"></div>
          {/*Robot bubble */}
          <MessageLeft message="Hello, how can I help you?" />
          {history.map((item, index) => (
            <div key={index}>
              <MessageRight message={item.prompt} />
              <MessageLeft
                message={
                  item.output &&
                  (item.output.toLowerCase().includes('file') ||
                    item.output.toLowerCase().includes('upload') ||
                    item.output.toLowerCase().includes('submit'))
                    ? 'Please upload a file!'
                    : item.output
                }
                htmlCode={
                  item.output &&
                  (item.output.toLowerCase().includes('file') ||
                    item.output.toLowerCase().includes('upload') ||
                    item.output.toLowerCase().includes('submit'))
                }
              />
            </div>
          ))}
          {isLoading && (
            <div>
              <div className="flex items-center ml-10">
                <img src={robot} alt="robot" className="w-16" />
                <Skeleton className="relative rounded-r-lg rounded-tl-lg px-3 w-1/3 h-16" />
              </div>
            </div>
          )}
          <div className="h-32 w-1" ref={messagesEnd} />
        </div>
        <div className=" mx-auto w-full flex items-center mt-4 justify-center">
          <form
            onSubmit={sendPrompt}
            className="flex items-center justify-center m-0 w-5/6"
          >
            <Input
              className="w-full"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatroom;
