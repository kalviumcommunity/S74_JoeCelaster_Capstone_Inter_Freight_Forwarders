import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Body from './components/Body';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/UserProfile';
import Account from './components/Account';
import Shipment from './components/Shipment';
import Admin from './components/Admin';
import AdminLogin from './components/AdminLogin';
import AdminSignup from './components/AdminSignup';
import AdminProfile from './components/AdminProfile';

const App = () => {
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can later replace this with asset/video load completion)
    const timer = setTimeout(() => setAppLoading(false), 1500); // 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (appLoading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50">
        <div className="text-white text-3xl animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/whatwedo' element={<Body />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/account' element={<Account />} />
        <Route path='/shipment' element={<Shipment />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/adminsignup' element={<AdminSignup />} />
        <Route path='/adminprofile' element={<AdminProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
