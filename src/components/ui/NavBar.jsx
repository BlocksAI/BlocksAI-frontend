import React, { useEffect } from 'react';
import Logo from '../../assets/Logo.png';
import ProfileUser from '../../assets/ProfileUser.png';
import Hamburger from '../../assets/Hamburger.png';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '' || location.pathname === '/') {
      navigate('/chat');
    }
  }, [location]);

  return (
    <div className="border-b border-black sticky top-0 z-10 bg-white">
      <div className="flex flex-row items-center justify-between h-full px-10">
        <div className="flex flex-row items-center">
          <img
            src={Hamburger}
            alt="Hamburger Icon"
            className="h-5 block md:hidden mt-3"
          />
          <img src={Logo} alt="Auth Background" className="ml-3 my-3 w-40" />
          <Link
            to="/market"
            className={
              (location.pathname === '/market' ? 'active ' : '') +
              'mx-5 hidden md:block text-black'
            }
          >
            Marketplace
          </Link>
          <Link
            to="/chat"
            className={
              (location.pathname === '/chat' ? 'active ' : '') +
              'mx-5 hidden md:block text-black'
            }
          >
            Chat
          </Link>
        </div>
        <div className="md:mr-5 flex flex-row items-center">
          <h2 className="hidden md:block">Hello, John</h2>
          <img
            src={ProfileUser}
            alt="Profile Icon"
            className="h-5 ml-10 sm:ml-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
