import React from 'react';
import img1 from '../assets/body-1.jpg'
import hero from '../assets/hero-image.png'
import air from '../assets/flight.png'
import logi from '../assets/logi.png'
import land from '../assets/land.png'
import sea from '../assets/sea.png'
import gml from '../assets/gml.avif'
import kgm from '../assets/kgm.png'
import ship from '../assets/ship.jpg'
import { Link } from 'react-router-dom';
// import footer from '../assets/footer.png'
import nightport from '../assets/capture-3.png'
import TruckLoader from './TruckLoader';
import Button from './Button';
import { ArrowUpRight } from 'lucide-react';
// import blueback from '../assets/blue-back.png'

import heroship from '../assets/hero-ship.mp4'

import numberOne from '../assets/image-1.png'
import numberTwo from '../assets/image-2.png'
import numberThree from '../assets/image-3.png'
import numberFour from '../assets/image-4.png'
import { useState } from 'react';

const Body = () => {
    const logos = [gml,kgm,gml,kgm,gml,kgm,gml,kgm,gml]
    const [loading,setLoading] = useState(false)
    return (
        <div className='font-serif bg-white'>
            

                <div className='relative h-screen overflow-hidden'>
                    <div className='hidden sm:block absolute h-[100vh] w-full overflowhidden z-0'>
                         {/* Background Image with Fade-Out */}
                        <img
                        src={nightport}
                        alt="Fallback"
                        className={`absolute w-full h-full object-cover z-0 transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}
                        />

                        {/* Video with Fade-In */}
                        <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        onCanPlayThrough={() => setLoading(true)}
                        className={`absolute w-full h-full object-cover z-0 transition-opacity duration-1000 ${loading ? 'opacity-100' : 'opacity-0'}`}
                        >
                        <source src="/port-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                        {/* <img src={nightport} className='absolute z-0 w-full h-full object-cover' alt="" /> */}
                        <div className="absolute top-0 left-0 w-full h-full  z-10 bg-black opacity-35"></div>

                    </div>

                    

                        <div className='block sm:hidden absolute h-[100vh] w-full '>
                            <img src={img1} alt=""  className='absolute z-0 w-full h-full object-cover'/>
                            <div className='absolute w-full h-full text-white opacity-60 bg-black'></div>
                        </div>
                 

                    <div className='hidden sm:flex flex-col gap-11 relative p-20 max-w-4xl text-white z-10' >
                        <div className=''>
                            <h1 className='text-6xl mt-10 z-10 tracking-wide'>A Comprehensive logistics company,
                            Carrying out the Freight Forwarding Business.</h1>
                        </div>
                        
                        <div className='text-xl mt-3 '>
                            <p><span style={{fontWeight: 530, fontSize: "30px"}}>I</span>nter <span style={{fontWeight: 530, fontSize: "30px"}}>F</span>reight <span style={{fontWeight: 530, fontSize: "30px"}}>F</span>orwarders Logistics offers solutions for all international logistics needs, including international multi-mode
                                transportation with a combination of land, ocean and air, trilateral transportation, air/ocean consolidation services, customs
                                services, storage, delivery and Packing.</p>
                        </div>

                        <div className='flex flex-row'>
        
                            <Link to='/signup'><Button/>    </Link>
                        </div>                                                                                                                                                                                                                                                                              
                    </div>

                    {/* For Mobile */}

                    <div className='sm:hidden text-5xl mt-16 flex flex-col items-center justify-center relative p-20 w-screen  text-white z-10 gap-5'>
                        <h1 className='text-5xl text-center'>Welcome to</h1>
                        <h1>IFF</h1>
                        <h3 className='text-lg text-center '>A Comprehensive logistics company, Carrying out the Freight Forwarding Business.</h3>
                        <div className='flex flex-row'>
                            <Link to='/signup'><button className="flex items-center gap-1 px-5 py-2 whitespace-nowrap text-white text-base tracking-wide uppercase font-medium rounded-md transition duration-500 bg-[#008dff] shadow-[0_0_25px_#008cff] hover:shadow-[0_0_5px_#00ffff,0_0_25px_#00c8ff,0_0_50px_#008cff,0_0_100px_#008cff]">
      Ship Now
      <ArrowUpRight className="w-6 h-6 font-light" />
    </button></Link>
                        </div>  
                    </div>
                </div>
            {/* <img src={hero} alt="" /> */}

                <div  className="overflow-hidden py-8 ">
                    <h2 className="text-lg  text-center sm:text-sm md:text-1xl md:text-2xl tracking-wider font-light mb-4">Trusted by Top Clients</h2>
                    <div className="overflow-hidden mx-auto w-[850px] flex justify-center items-center">
                        <div className="whitespace-nowrap animate-slide flex gap-10 px-4">
                        {logos.map((logo, i) => (
                            <img
                                key={i}
                                src={logo}
                                alt="Client Logo"
                                className="h-6 sm:h-10 md:h-10 lg:h-16 w-auto max-w-[170px] object-contain inline-block"
                                />

                        ))}
                        </div>
                    </div>
                </div>

            <div
                className="w-full bg-white"
                style={{
                    backgroundImage: `
                    radial-gradient(#64b5f6 1.3px, transparent 1.3px),
                    radial-gradient(#64b5f6 1.3px, transparent 1.3px)
                    `,
                    backgroundSize: '25px 25px',
                    backgroundPosition: '0 0, 12.5px 12.5px'
                }}
                >
    
            
                {/* One */}
                <div className='max-w-7xl mx-auto flex justify-center items-center sm:gap-8 md:gap-10 px-2 sm:px-8 z-10 lg:gap-20 flex-nowrap'>
                    <div className='hidden sm:block w-[200px] sm:w-[100px] md:w-[200px] lg:w-[200px]'>
                        <img src={numberOne} alt="" className='w-full h-auto opacity-65'/>
                    </div>
                    <div className='w-[200px] sm:w-[80px] md:w-[200px] lg:w-[250px]'>
                        <img src={sea} alt="" className='w-full h-auto'/>
                    </div>

                    {/* desktop */}
                    <div className='hidden sm:flex flex-col gap-5 p-10'>
                        <div>
                            <h1 style={{textShadow: "2.2px 2px 1.3px gray"}} className='text-2xl text-gray-800 font-medium sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl mt-4 sm:mt-6 tracking-wide'>Sea Freight</h1>

                        </div>
                        <div className='text-xs sm:text-sm md:text-base lg:text:lg mt-3 space-y-2'>
                            <li>Proven expertise in autoparts and garments logistics.</li>
                            <li>Air transport for machinery and semiconductor parts.</li>
                            <li>Custom solutions for urgent freight requirements.</li>
                            <li>Fast, reliable air cargo support for businesses.</li>
                        </div>
                    </div>


                    {/* mobile */}
                    <div className='flex flex-col justify-center items-center sm:hidden p-10'>
                        <div>
                            <h1 style={{textShadow: "2.2px 2px 1.3px gray"}} className='text-2xl text-gray-800 font-medium sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl mt-4 sm:mt-6 tracking-wide'>Sea Freight</h1>

                        </div>
                        <div className='text-[12.5px] sm:text-sm md:text-base lg:text:lg mt-3 space-y-2'>
                            <li style={{textShadow: "2.2px 2px 1.3px gray"}} className='whitespace-nowrap'>Expert in autoparts</li>
                            <li style={{textShadow: "2.2px 2px 1.3px gray"}} className='whitespace-nowrap'>Machinery air freight</li>
                            <li style={{textShadow: "2.2px 2px 1.3px gray"}} className='whitespace-nowrap'>Urgent freight help</li>
                            <li style={{textShadow: "2.2px 2px 1.3px gray"}} className='whitespace-nowrap'>Reliable air cargo</li>

                        </div>
                    </div>
                </div>

                {/* Two */}
                <div className='max-w-7xl mx-auto flex items-center justify-start sm:gap-8 md:gap-10 px-2 sm:px-8 z-10 lg:gap-20 flex-nowrap'>
                    
                    {/* desktop */}
                    <div className='hidden sm:flex flex-col gap-5 p-10'>
                        <div>
                            <h1 style={{textShadow: "2.2px 2px 1.3px gray"}} className='text-2xl text-gray-800 font-medium sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl mt-4 sm:mt-6 tracking-wide'>Road Cargo</h1>

                        </div>
                        <div className='text-xs sm:text-sm md:text-base lg:text:lg mt-3 space-y-2'>
                            <li>Proven expertise in autoparts and garments logistics.</li>
                            <li>Air transport for machinery and semiconductor parts.</li>
                            <li>Custom solutions for urgent freight requirements.</li>
                            <li>Fast, reliable air cargo support for businesses.</li>
                        </div>
                    </div>
                    
                    {/* mobile */}
                    <div className='flex flex-col justify-between sm:hidden p-10'>
                        
                        <div>
                            <h1 style={{textShadow: "2.2px 2px 1.3px gray"}} className='text-2xl text-gray-800 font-medium sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl mt-4 sm:mt-6 tracking-wide whitespace-nowrap'>Road Cargo</h1>
                            
                        </div>
                        
                        <div className='text-[12.5px] sm:text-sm md:text-base lg:text:lg mt-3 space-y-2'>
                            <li style={{textShadow: "2.2px 2px 1.3px gray"}} className='whitespace-nowrap'>Expert in autoparts</li>
                            <li style={{textShadow: "2.2px 2px 1.3px gray"}} className='whitespace-nowrap'>Machinery air freight</li>
                            <li style={{textShadow: "2.2px 2px 1.3px gray"}} className='whitespace-nowrap'>Urgent freight help</li>
                            <li style={{textShadow: "2.2px 2px 1.3px gray"}} className='whitespace-nowrap'>Reliable air cargo</li>
                        </div>
                    </div>

                    <div className=' w-[200px] sm:w-[80px] md:w-[200px] lg:w-[250px]'>
                        <img src={land} alt="" className='w-full h-auto'/>
                    </div>
                    <div className='hidden sm:block w-[200px] sm:w-[100px] md:w-[200px] lg:w-[200px]'>
                        <img src={numberTwo} alt="" className='w-full h-auto  opacity-65'/>
                    </div>
                </div>
                
                {/* Three */}
                <div className='max-w-7xl mx-auto flex items-center justify-start sm:gap-8 md:gap-10 px-2 sm:px-8 z-10 lg:gap-20 flex-nowrap'>
                    <div className='hidden sm:block w-[200px] sm:w-[100px] md:w-[200px] lg:w-[200px]'>
                        <img src={numberThree} alt="" className='w-full h-auto opacity-65'/>
                    </div>
                    <div className=' w-[200px] sm:w-[80px] md:w-[200px] lg:w-[250px]'>
                        <img src={logi} alt="" className='w-full h-auto'/>
                    </div>

                    {/* desktop */}
                    <div className='hidden sm:flex flex-col gap-5 p-10'>
                        <div>
                            <h1 style={{textShadow: "2.2px 2px 1.3px gray"}} className='text-2xl text-gray-800 font-medium sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl mt-4 sm:mt-6 tracking-wide whitespace-nowrap'>Customs Aid</h1>

                        </div>
                        <div className='text-xs sm:text-sm md:text-base lg:text:lg mt-3 space-y-2'>
                            <li>Proven expertise in autoparts and garments logistics.</li>
                            <li>Air transport for machinery and semiconductor parts.</li>
                            <li>Custom solutions for urgent freight requirements.</li>
                            <li>Fast, reliable air cargo support for businesses.</li>
                        </div>
                    </div>


                    {/* mobile */}
                    <div className='flex flex-col sm:hidden p-10'>
                        <div>
                            <h1 style={{textShadow: "2.2px 2px 1.3px gray"}} className='text-2xl text-gray-800 font-medium sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl mt-4 sm:mt-6 tracking-wide whitespace-nowrap'>Customs Aid</h1>

                        </div>
                        <div className='text-[12.5px] sm:text-sm md:text-base lg:text:lg mt-3 space-y-2'>
                            <li style={{textShadow: "2.2px 2px 1.3px gray"}} className='whitespace-nowrap'>Expert in autoparts</li>
                            <li style={{textShadow: "2.2px 2px 1.3px gray"}} className='whitespace-nowrap'>Machinery air freight</li>
                            <li style={{textShadow: "2.2px 2px 1.3px gray"}} className='whitespace-nowrap'>Urgent freight help</li>
                            <li style={{textShadow: "2.2px 2px 1.3px gray"}} className='whitespace-nowrap'>Reliable air cargo</li>
                        </div>
                    </div>
                </div>

                {/* Four */}
                <div className='max-w-7xl mx-auto flex items-center justify-start sm:gap-8 md:gap-10 px-2 sm:px-8 z-10 lg:gap-20 flex-nowrap'>
                    
                    {/* desktop */}
                    <div className='hidden sm:flex flex-col gap-5 p-10'>
                        <div>
                            <h1 style={{textShadow: "2.2px 2px 1.3px gray"}} className='text-2xl text-gray-800 font-medium sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl mt-4 sm:mt-6 tracking-wide'>Air Freight</h1>

                        </div>
                        <div className='text-xs sm:text-sm md:text-base lg:text:lg mt-3 space-y-2 list-disc list-inside'>
                            <li>Proven expertise in autoparts and garments logistics.</li>
                            <li>Air transport for machinery and semiconductor parts.</li>
                            <li>Custom solutions for urgent freight requirements.</li>
                            <li>Fast, reliable air cargo support for businesses.</li>
                        </div>
                    </div>


                    {/* mobile */}
                    <div className='flex flex-col sm:hidden p-10'>
                        <div>
                            <h1 style={{textShadow: "2.2px 2px 1.3px gray"}} className='text-2xl text-gray-800 font-medium sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl mt-4 sm:mt-6 tracking-wide'>Air Freight</h1>
                        </div>
                        <div className='text-[12.5px] sm:text-sm md:text-base lg:text:lg mt-3 space-y-2'>
                            <li style={{textShadow: "2.2px 2px 1.3px gray"}} className='whitespace-nowrap'>Expert in autoparts</li>
                            <li style={{textShadow: "2.2px 2px 1.3px gray"}} className='whitespace-nowrap'>Machinery air freight</li>
                            <li style={{textShadow: "2.2px 2px 1.3px gray"}} className='whitespace-nowrap'>Urgent freight help</li>
                            <li style={{textShadow: "2.2px 2px 1.3px gray"}} className='whitespace-nowrap'>Reliable air cargo</li>
                        </div>
                    </div>

                    <div className=' w-[200px] sm:w-[80px] md:w-[200px] lg:w-[250px]'>
                        <img src={air} alt="" className='w-full h-auto'/>
                    </div>

                    <div className='hidden sm:block w-[200px] sm:w-[100px] md:w-[200px] lg:w-[200px]'>
                        <img src={numberFour} alt="" className='w-full h-auto opacity-65'/>
                    </div>
                    
                </div>

            </div>

            <div className="relative  bg-[url('./assets/footer.png')] bg-cover bg-center bg-no-repeat text-white">
      
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-80 z-10"></div>

            {/* Footer Content */}
            <footer className="relative z-10 h-full flex flex-col justify-end px-6 py-10">
                <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-sm">
                    <div>
                    <h3 className="font-semibold mb-3">Company</h3>
                    <ul className="space-y-2">
                        <li className='hover:underline'><span className="text-orange-400">→ </span><Link to="/about">About Us</Link></li>
                        
                        <li>  <span className="text-orange-400">→ </span><Link to="/mission">Our Mission</Link></li>
                        <li><span className="text-orange-400">→ </span><Link to="/team">Leadership Team</Link></li>
                        <li><span className="text-orange-400">→ </span><Link to="/careers">Careers</Link></li>
                        <li><span className="text-orange-400">→ </span><Link to="/testimonials">Testimonials</Link></li>
                        <li><span className="text-orange-400">→ </span><Link to="/awards">Awards & Certifications</Link></li>
                    </ul>
                    </div>

                    <div>
                    <h3 className="font-semibold mb-3">Services</h3>
                    <ul className="space-y-2">
                        <li><span className="text-orange-400">→ </span><Link to="/services/ocean-freight">Ocean Freight</Link></li>
                        <li><span className="text-orange-400">→ </span><Link to="/services/air-freight">Air Freight</Link></li>
                        <li><span className="text-orange-400">→ </span><Link to="/services/road-rail">Road & Rail Transport</Link></li>
                        <li><span className="text-orange-400">→ </span><Link to="/services/customs">Customs Clearance</Link></li>
                        <li><span className="text-orange-400">→ </span><Link to="/services/warehousing">Warehousing</Link></li>
                        <li><span className="text-orange-400">→ </span><Link to="/services/project-cargo">Project Cargo</Link></li>
                    </ul>
                    </div>

                    <div>
                    <h3 className="font-semibold mb-3">Industries</h3>
                    <ul className="space-y-2">
                        <li><span className="text-orange-400">→ </span><Link to="/industries/automotive">Automotive</Link></li>
                        <li><span className="text-orange-400">→ </span><Link to="/industries/pharma">Pharmaceuticals</Link></li>
                        <li><span className="text-orange-400">→ </span><Link to="/industries/electronics">Electronics</Link></li>
                        <li><span className="text-orange-400">→ </span><Link to="/industries/retail">Retail & E-commerce</Link></li>
                        <li><span className="text-orange-400">→ </span><Link to="/industries/fmcg">FMCG</Link></li>
                    </ul>
                    </div>

                    <div>
                    <h3 className="font-semibold mb-3">Resources</h3>
                    <ul className="space-y-2">
                        <li><span className="text-orange-400">→ </span><Link to="/tools">Shipping Tools</Link></li>
                        <li><span className="text-orange-400">→ </span><Link to="/incoterms">Incoterms Guide</Link></li>
                        <li><span className="text-orange-400">→ </span><Link to="/track">Container Tracking</Link></li>
                        <li><span className="text-orange-400">→ </span><Link to="/blog">Blog & Insights</Link></li>
                        <li><span className="text-orange-400">→ </span><Link to="/faq">FAQs</Link></li>
                    </ul>
                    </div>

                    <div>
                    <h3 className="font-semibold mb-3">Support</h3>
                    <ul className="space-y-2">
                        <li><span className="text-orange-400">→ </span><Link to="/contact">Contact Us</Link></li>
                        <li><span className="text-orange-400">→ </span><Link to="/quote">Request a Quote</Link></li>
                        <li><span className="text-orange-400">→ </span><Link to="/login">Customer Login</Link></li>
                        <li><span className="text-orange-400">→ </span><Link to="/terms">Terms & Conditions</Link></li>
                        <li><span className="text-orange-400">→ </span><Link to="/privacy">Privacy Policy</Link></li>
                    </ul>
                    </div>

                    <div>
                    <h3 className="font-semibold mb-3">Connect</h3>
                    <ul className="space-y-2">
                        <li><span className="text-orange-400">→ </span><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
                        <li><span className="text-orange-400">→ </span><a href="https://facebook.com" target="_blank">Facebook</a></li>
                        <li><span className="text-orange-400">→ </span><a href="https://instagram.com" target="_blank">Instagram</a></li>
                        <li><span className="text-orange-400">→ </span><a href="https://wa.me/1234567890" target="_blank">WhatsApp</a></li>
                        <li><span className="text-orange-400">→ </span><Link to="/newsletter">Newsletter</Link></li>
                    </ul>
                    </div>

                </div>

                <div className="text-center text-gray-400 text-xs mt-10 border-t border-gray-700 pt-4">
                    &copy; {new Date().getFullYear()} Inter Freight Forwarders Co. All rights reserved.
                </div>
            </footer>
            </div>
        </div>
        
    );
}

export default Body;
