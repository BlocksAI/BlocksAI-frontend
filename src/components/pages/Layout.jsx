import React from 'react';
import Navbar from '../ui/NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="overflow-y-hidden w-full h-full">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
