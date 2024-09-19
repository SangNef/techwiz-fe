import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/login';
import Register from './pages/register';
import Layout from './components/layout';
import Home from './pages/home';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Routes without header */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Routes with header */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
