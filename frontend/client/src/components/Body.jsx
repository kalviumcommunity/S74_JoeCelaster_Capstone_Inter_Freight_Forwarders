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
import footer from '../assets/footer.png'
import nightport from '../assets/capture-3.png'

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
        <div className='font-serif'>
            

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
                        <div className="absolute top-0 left-0 w-full h-full  z-10"></div>

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

                        <div className=''>
                            
                            <Link className='border-2 bg-blue-500 text-lg rounded-3xl p-4 hover:bg-blue-600 hover:p-5 transition-all duration-300' to='/signup'>Start your Shipment!</Link>
                        </div>
                    </div>

                    {/* For Mobile */}

                    <div className='sm:hidden text-5xl mt-16 flex flex-col items-center justify-center relative p-20 w-screen  text-white z-10 gap-5'>
                        <h1 className='text-5xl text-center'>Welcome to</h1>
                        <h1>IFF</h1>
                        <h3 className='text-lg text-center '>A Comprehensive logistics company, Carrying out the Freight Forwarding Business.</h3>
                        <Link className='text-[15px] bg-blue-500 p-4 rounded-xl border-[1px] shadow-md' to='/signup'>Start your Shipment</Link>
                    </div>


                    

                </div>
            {/* <img src={hero} alt="" /> */}
                <div className="overflow-hidden py-8 bg-gray-50">
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


            <div>

           
            <div className='max-w-5xl mx-auto flex justify-center items-center sm:gap-8 md:gap-10 px-2 sm:px-8 z-10 lg:gap-20 flex-nowrap'>
                <div className='hidden sm:block w-[200px] sm:w-[100px] md:w-[200px] lg:w-[200px]'>
                    <img src={numberOne} alt="" className='w-full h-auto'/>
                </div>
                <div className=' w-[200px] sm:w-[80px] md:w-[200px] lg:w-[250px]'>
                    <img src={sea} alt="" className='w-full h-auto'/>
                </div>
                <div className='p-10'>
                    <div>
                        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl mt-4 sm:mt-6 tracking-wide'>Sea Cargo</h1>
                    </div>
                    <div className='text-xs sm:text-sm md:text-base lg:text:lg mt-3 space-y-2'>
                        <li>Proven expertise in autoparts and garments logistics.</li>
                        <li>Air transport for machinery and semiconductor parts.</li>
                        <li>Custom solutions for urgent freight requirements.</li>
                        <li>Fast, reliable air cargo support for businesses.</li>
                    </div>
                </div>
            </div>


            <div className='max-w-5xl mx-auto flex items-center justify-start sm:gap-8 md:gap-10 px-2 sm:px-8 z-10 lg:gap-20 flex-nowrap'>
                
                
                <div className='p-10'>
                    <div>
                        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl mt-4 sm:mt-6 tracking-wide'>Sea Cargo</h1>
                    </div>
                    <div className='text-xs sm:text-sm md:text-base lg:text:lg mt-3 space-y-2'>
                        <li>Proven expertise in autoparts and garments logistics.</li>
                        <li>Air transport for machinery and semiconductor parts.</li>
                        <li>Custom solutions for urgent freight requirements.</li>
                        <li>Fast, reliable air cargo support for businesses.</li>

                    </div>
                </div>
                <div className=' w-[200px] sm:w-[80px] md:w-[200px] lg:w-[250px]'>
                    <img src={land} alt="" className='w-full h-auto'/>
                </div>
                <div className='hidden sm:block w-[200px] sm:w-[100px] md:w-[200px] lg:w-[200px]'>
                    <img src={numberTwo} alt="" className='w-full h-auto'/>
                </div>
            </div>
            
            <div className='max-w-5xl mx-auto flex items-center justify-start sm:gap-8 md:gap-10 px-2 sm:px-8 z-10 lg:gap-20 flex-nowrap'>
                <div className='hidden sm:block w-[200px] sm:w-[100px] md:w-[200px] lg:w-[200px]'>
                    <img src={numberThree} alt="" className='w-full h-auto'/>
                </div>
                <div className=' w-[200px] sm:w-[80px] md:w-[200px] lg:w-[250px]'>
                    <img src={logi} alt="" className='w-full h-auto'/>
                </div>
                <div className='p-10'>
                    <div>
                        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl mt-4 sm:mt-6 tracking-wide'>Sea Cargo</h1>
                    </div>
                    <div className='text-xs sm:text-sm md:text-base lg:text:lg mt-3 space-y-2'>
                        <li>Proven expertise in autoparts and garments logistics.</li>
                        <li>Air transport for machinery and semiconductor parts.</li>
                        <li>Custom solutions for urgent freight requirements.</li>
                        <li>Fast, reliable air cargo support for businesses.</li>

                    </div>
                </div>
            </div>

            <div className='max-w-5xl mx-auto flex items-center justify-start sm:gap-8 md:gap-10 px-2 sm:px-8 z-10 lg:gap-20 flex-nowrap'>
                
                <div className='p-10'>
                    <div>
                        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl mt-4 sm:mt-6 tracking-wide'>Sea Cargo</h1>
                    </div>
                    <div className='text-xs sm:text-sm md:text-base lg:text:lg mt-3 space-y-2'>
                        <li>Proven expertise in autoparts and garments logistics.</li>
                        <li>Air transport for machinery and semiconductor parts.</li>
                        <li>Custom solutions for urgent freight requirements.</li>
                        <li>Fast, reliable air cargo support for businesses.</li>

                    </div>
                </div>
                <div className=' w-[200px] sm:w-[80px] md:w-[200px] lg:w-[250px]'>
                    <img src={air} alt="" className='w-full h-auto'/>
                </div>
                <div className='hidden sm:block w-[200px] sm:w-[100px] md:w-[200px] lg:w-[200px]'>
                    <img src={numberFour} alt="" className='w-full h-auto'/>
                </div>
                
            </div>
            </div>
            <div className='relative h-screen overflow-hidden'>

            <div className='absolute h-[100vh] w-full '>
                <img src={footer} alt=""  className='absolute z-0 w-full h-full object-cover'/>
                <div className='absolute w-full h-full text-white opacity-70 bg-black'></div>
            </div>
            </div>

        </div>
        
    );
}

export default Body;
