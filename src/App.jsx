import React from 'react';
import Home from '../src/layout/pages/Home';
import Layout from './components/layout';
// import Login from './pages/login';
// import Register from './pages/register';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Details from './layout/pages/Details/Index';



const App = () => {
  return (
    <Router>

      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}

        {/* Routes with header */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/details" element={<Layout />}>
          <Route index element={<Details />} />
        </Route>

      </Routes>
    </Router>
  );
};

export default App;