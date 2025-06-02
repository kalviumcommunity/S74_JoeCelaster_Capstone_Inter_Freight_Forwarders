import React from 'react';
// import Home from '../components/Home'
import Body from '../components/Body'
import hiwave from '../assets/wave.png'
import { Link, useLocation } from 'react-router-dom';
import Avatar from '../components/ProfileAvatar'

const Profile = () => {
    const location = useLocation()
    const Email = location.state?.Email
    const FirstName = location.state?.FirstName
    const SecondName = location.state?.SecondName
    return (
        <div className='font-serif'>

            <div className="bg-gray-100">
                <nav className="fixed top-0 left-0 w-full shadow-md transition-all duration-500  bg-blue-500 p-4">
                        <div className="max-w-6xl mx-auto flex items-center justify-start">
                            <div className=" text-xl text-white">
                                <Link to='/'>Inter Freight Forwarders</Link>
                            </div>
                            <ul className="list-none flex gap-8 text-white font-medium ml-auto">
                            <Link to = '/' className="hover:text-gray-200 cursor-pointer">Home</Link>
                            <Link to = '/tracker' className="hover:text-gray-200 cursor-pointer">Track your Shipment</Link>
                            <Link to = '/shipment' className="hover:text-gray-200 cursor-pointer">Start a new Shipment</Link>
                            <Link to = '/account' className="hover:text-gray-200 cursor-pointer"><Avatar/></Link>
                            </ul> 
                        </div>
                </nav>
            </div>

            {/* BodY */}
            <div className='flex flex-col lg:flex-row gap-10 pt-32 px-10'>

                <div className="flex items-center gap-10">
                    <h1 className="text-6xl lg:text-6xl font-bold">Welcome {FirstName} !</h1>
                    <img src={hiwave} className='w-20 lg:w-24' alt="" /> 
                </div>

                {/* <div className='flex flex-col space-y-6 bg-white p-10 rounded-3xl shadow-2xl border border-gray-300'>
                    
                    <div className='flex flex-col lg:flex-row gap-6'>

                        <div className='p-10 bg-yellow-400 shadow-md border-2 border-black border-solid inline-block rounded-3xl'>
                            <h1 className='text-black text-4xl'>Shipment in Progress </h1> 
                            <h1 className='text-center text-8xl'>5</h1> 
                        </div>
                        <div className='p-10 bg-red-500 shadow-md border-2 border-black  border-solid inline-block rounded-3xl'>
                            <h1 className='text-white text-4xl '>Delayed Shipments</h1>
                            <h1 className='text-center text-8xl'>2</h1>
                        </div>
                    
                    </div>
                    
                    <div>
                        <div className='w-full p-10 bg-green-500 shadow-md border-2 border-black  border-solid inline-block rounded-3xl'>
                            <h1 className='text-white text-4xl'>Cleared Shipments</h1>
                            <h1 className='text-center text-8xl'>7</h1>
                        </div>
                    </div>
            
                </div> */}

            </div>
            <hr />
        </div>

    );
}

export default Profile;
