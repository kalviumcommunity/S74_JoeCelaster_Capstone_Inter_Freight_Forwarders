import React, { useState } from 'react';
import Profile from '../components/Profile'
import Google from '../components/ContinuewithGoogle'
import Apple from '../components/ContinueWithApple'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()


    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:5000/users/login',{email,password})
            // localStorage.setItem("token",res.data.token)
            // console.log(res.data)
            console.log(res.data)
            navigate('/profile' , {state : {FirstName : res.data.data.FirstName, SecondName : res.data.data.SecondName, email : res.data.data.email}})
            
        } catch (error) {
            alert('Login Failed')
        }
    }

    return (
        <div className='flex flex-col items-center font-serif justify-evenly min-h-screen bg-blue-500'>
                    <div>
                    <h1 className='text-3xl text-white font-serif tracking-normal' >Inter Freight Forwarders</h1>
                    </div>
                    <div className='space-y-8 border-solid border-2 p-5 border-black inline-block  bg-white  rounded-xl w-[450px] h-[600px] shadow-2xl'>
                        <div className='flex-row space-y-2 font-serif'>
                        <h2 className='text-center font-light text-3xl '>Welcome Again !</h2>
                        </div>
                        <hr />
                        
                        <form onSubmit={handleLogin} action="" className='space-y-6'>
                            {/* <h1 className='font-bold text-center text-4xl'>SignUp</h1> */}
                            <div className='space-y-4'>
                            <Google/>
                            <Apple/>
                            </div>
                            <div className='space-y-6'>
                                <div className='flex gap-6 justify-around'>
                                </div>
                               
                                <input required className= 'w-full bg-gray-300 border-black border-solid border-2 p-3 rounded-[5px] placeholder-gray-500' onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="" id="" placeholder='Email'/><br />
                                <input required className= 'w-full bg-gray-300 border-black border-solid border-2 p-3 rounded-[5px] placeholder-gray-500' onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="" id="" placeholder='Password'/><br />
                                <div>
                                </div>
                            </div>
                            <div>
                                <button className='w-full text-center border-black border-solid border-2 bg-blue-500 rounded-xl p-2 text-white font-light tracking-wide'>Login</button>
                            </div>
                        </form>
                            <div className='space-y-2 text-sm'>
                                <h2 className='text-center underline cursor-pointer'>Forgot Password?</h2>
                                <Link to='/signup'>
                                <h2 className='text-center underline cursor-pointer'>New to IFF? Please Signup here</h2>
                                </Link>
                            </div>
                    </div>
        
                    {/* <div className="w-1/2 h-screen relative bg-white">
          <div className="absolute inset-0 clip-left-border border-l-[10px] border-black"></div>
          <div className="relative z-10 p-6">
            Welcome to IFF
          </div>
        </div> */}
        
                </div>
    );
}

export default Login;
