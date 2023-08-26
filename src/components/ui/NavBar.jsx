import React from 'react';
import Logo from '../../assets/logo.png';
import ProfileUser from '../../assets/ProfileUser.png'
import Hamburger from '../../assets/Hamburger.png'
const Navbar = () => {
    return (
            <div className='border-b border-black w-full fixed top-0'>
                <div className='flex flex-row items-center justify-between h-full px-10'>
                    <div className='flex flex-row items-center'>
                        <img src={Hamburger} alt="Hamburger Icon" className='h-5 block md:hidden mt-3' />
                        <img src={Logo} alt="Auth Background" className="ml-3 my-3 w-40" />
                        <h2 className='mx-10 hidden md:block'>Marketplace</h2>
                        <h2 className='mx-5 hidden md:block'>Chat</h2>
                    </div>
                    <div className='md:mr-5 flex flex-row items-center'>
                        <h2 className='hidden md:block'>Hello, John</h2>
                        <img src={ProfileUser} alt="Profile Icon" className='h-5 ml-10 sm:ml-5' />
                    </div>
                </div>
            </div>
    
    );
};

export default Navbar;