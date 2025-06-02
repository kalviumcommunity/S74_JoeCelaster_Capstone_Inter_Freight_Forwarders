import React, { useState ,useEffect} from 'react';
import Body from './Body';
import { Link } from 'react-router-dom';
const Home = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
    const potential = window.innerHeight * 1
    if (window.scrollY > potential){
      setScrolled(true)
    }
    else{
      setScrolled(false)
    }
  }

  window.addEventListener('scroll',handleScroll)
    return () => {
      window.removeEventListener('scroll',handleScroll)
      
    };
  }, []);
  
  return (
    <div className="bg-gray-100">
       <nav className={`fixed top-0 left-0 w-full shadow-md transition-all duration-500 ${scrolled ? "bg-blue-500 p-4" :"bg-white-400 bg-opacity-50 z-50 backdrop-blur-md p-4"} ` }
        
        >
            <div className="max-w-6xl mx-auto flex items-center justify-start font-serif font-light tracking-wide">
                <div className=" text-xl text-white">
                    <h2>Inter Freight Forwarders</h2>
                </div>
                <ul className="list-none flex gap-8 text-white font-medium ml-auto">
                <Link to = '/' className="hover:text-gray-200 cursor-pointer">Home</Link>
                <Link to = '/about' className="hover:text-gray-200 cursor-pointer">About us</Link>
                <Link to = '/whatwedo' className="hover:text-gray-200 cursor-pointer">What we do</Link>
                <Link to = '/login' className="hover:text-gray-200 cursor-pointer">Login</Link>
                <Link to = '/signup' className="hover:text-gray-200 cursor-pointer">Signup</Link>
                </ul>
            </div>
       </nav>
      <Body/>
    </div>
  );
};

export default Home;
