import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/login';
import Register from './pages/register';
import Layout from './components/layout';
import Home from './pages/home';
import ForgotPassword from './pages/forgotPassword';
import Destination from './pages/destination';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/destinations" element={<Destination />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
