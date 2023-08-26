import React from 'react';
import Navbar from '../ui/NavBar';
import robot from '../../assets/robot.png';
import User from '../../assets/User.png'
import { Input } from '../ui/input';
const Chatroom = () => {
    return (
        <>
            <div className='h-full w-full flex flex-row'>
                <div className='bg-slate-900 h-full w-64'>
                    <div className='flex flex-col items-center place-content-center'>
                        <button className='bg-slate-900 mt-5 mb-2 w-56 h-10 items-center flex hover:bg-slate-700 focus:outline-none focus:bg-slate-600'>
                            <p className='text-white'>Chat #1</p>
                        </button>
                        <button className='bg-slate-900 my-2 w-56 h-10 items-center flex hover:bg-slate-700 focus:outline-none'>
                            <p className='text-white'>Chat #2</p>
                        </button>
                        <button className='bg-slate-900 my-2 w-56 h-10 items-center flex hover:bg-slate-700 focus:outline-none'>
                            <p className='text-white'>Chat #2</p>
                        </button>
                    </div>
                </div>
                <div className='flex-grow'>
                    <div className='flex flex-col flex-grow'>
                        <div className='mt-10'></div>
                        {/*Robot bubble */}
                        <div className='flex items-center ml-10'>
                            <img src={robot} alt="robot" className='w-16' />
                            <div className='relative rounded-r-lg rounded-tl-lg bg-slate-900 px-3 text-white w-1/3'>Hello, how can I help you?</div>
                        </div>

                        {/* User bubble*/}
                        <div className='flex flex-row-reverse items-center ml-10'>
                            <img src={User} alt="robot" className='w-10 mr-10' />
                            <div className='relative rounded-l-lg rounded-tr-lg bg-slate-900 px-3 text-white w-2/4'>Can I upload my report card, and have you identify
                                areas for improvement?</div>
                        </div>
                        {/*Robot bubble */}
                        <div className='flex items-center ml-10 mt-10'>
                            <img src={robot} alt="robot" className='w-16' />
                            <div className='relative rounded-r-lg rounded-tl-lg bg-slate-900 px-3 text-white w-1/3'>Sure, please upload your file(s) here:</div>
                        </div>
                        {/* User bubble*/}
                        <div className='flex flex-row-reverse items-center ml-10'>
                            <img src={User} alt="robot" className='w-10 mr-10' />
                            <div className='relative rounded-l-lg rounded-tr-lg bg-slate-900 px-3 text-white w-2/4'>Can you let me know what are some of the topics I
                                should work on for physics?</div>
                        </div>
                        <div className='fixed bottom-10 ml-20 w-4/6'>
                            <Input className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chatroom;
