import React from 'react';
import { Input } from '@/components/ui/input';
import Navbar from '../ui/NavBar';
import robot from '../../assets/robot.png'
const Chatroom = () => {
    return (
        <>
            <Navbar />
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
                <div className='flex flex-col'> 
                    <div className='flex items-center ml-10 mt-10'>
                        <img src={robot} alt="robot" className='w-16' />
                        <div className='relative rounded-r-lg bg-slate-900 px-3 text-white'>djkfnskjd speech bubble</div>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Chatroom;