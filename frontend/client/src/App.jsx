import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Body from './components/Body'
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
    return (
        <div>
            <Router>
                <Routes>
                    
                    <Route path='/' element={<Home/>}/> 
                    <Route path='/about' element={<About/>}/>
                    <Route path='/whatwedo' element={<Body/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/account' element={<Account/>}/>
                    <Route path='/shipment' element={<Shipment/>}></Route>
                    <Route path='/admin' element={<Admin/>}></Route>
                    <Route path='/adminlogin' element={<AdminLogin/>}></Route>
                    <Route path='/adminsignup' element={<AdminSignup/>}></Route>
                    <Route path='/adminprofile' element={<AdminProfile/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
