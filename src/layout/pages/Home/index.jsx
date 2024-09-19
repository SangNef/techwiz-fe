// src/components/Header.js
import React from 'react';
import Slider from '../Home/Slider';
import Home2 from './Home2';
import Home3 from './Home3';
import Home3_5 from './Home3_5';
import Home4 from './Home4';
const Home = () => {
    return (
        <>
        <Slider />
        <Home2 />
        <Home3/>
        <Home3_5/>
        <Home4/>
        </>
    );
};

export default Home;