// src/components/Header.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

const Layout = () => {
  const dispatch = useDispatch();

  return (
    <div className='relative'>
        <Header />
        <Outlet />
    </div>
  );
};

export default Layout;
