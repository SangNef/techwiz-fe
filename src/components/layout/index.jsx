// src/components/Header.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';

const Layout = () => {
  const dispatch = useDispatch();

  return (
    <div className='relative'>
        <Header />
        <Outlet />
        <Footer/>
    </div>
  );
};

export default Layout;