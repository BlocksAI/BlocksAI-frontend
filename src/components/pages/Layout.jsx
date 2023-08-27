import React from 'react';
import Navbar from '../ui/NavBar';
import { Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';

const Layout = () => {
  return (
    <div className="overflow-y-hidden w-full h-full">
      <Navbar />
      <Outlet />
      <Toaster />
    </div>
  );
};

export default Layout;
