import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/login';
import Register from './pages/register';
import Layout from './components/layout';
import Home from './pages/home';
import ForgotPassword from './pages/forgotPassword';
import Destination from './pages/destination';
import DestinationDetail from './pages/destination/detail';
import Profile from './pages/profile';
import User from './components/layout/user';
import EditProfile from './pages/profile/edit';
import UserTrip from './pages/profile/trip';
import About from './pages/about';
import Contact from './pages/contact';
import ChangePassword from './pages/profile/ChangePassword';
import TripDetail from './pages/profile/TripDetail';

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
                    <Route path="/destinations/:id" element={<DestinationDetail />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path="/user" element={<User />}>
                        <Route index element={<Profile />} />
                        <Route path='/user/edit' element={<EditProfile />} />
                        <Route path='/user/trips' element={<UserTrip />} />
                        <Route path='/user/trip/:id' element={<TripDetail />} />
                        <Route path='/user/change-password' element={<ChangePassword />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
