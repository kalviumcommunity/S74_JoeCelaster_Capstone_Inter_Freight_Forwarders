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
import bgVideo from '../assets/port-video.mp4'
import heroship from '../assets/hero-ship.mp4'

import numberOne from '../assets/image-1.png'
import numberTwo from '../assets/image-2.png'
import numberThree from '../assets/image-3.png'
import numberFour from '../assets/image-4.png'

const Body = () => {
    const logos = [gml,kgm,gml,kgm,gml,kgm,gml,kgm,gml]
    return (
        <div className='font-serif'>
            

                <div className='relative h-screen overflow-hidden'>
                    <div className='absolute h-[100vh] w-full overflowhidden z-0'>

                        <video autoPlay muted loop className='absolute z-0'>
                            <source src={bgVideo}/>
                        </video>
                    </div>

                    <div className='relative p-20 max-w-4xl text-white z-10' >
                        <div>
                            <h1 className='text-6xl mt-10 z-10 tracking-wide '>A Comprehensive logistics company,
                            Carrying out the Freight Forwarding Business.</h1>
                        </div>
                        
                        <div className='text-xl mt-3 '>
                            <p><span style={{fontWeight: 530, fontSize: "30px"}}>I</span>nter <span style={{fontWeight: 530, fontSize: "30px"}}>F</span>reight <span style={{fontWeight: 530, fontSize: "30px"}}>F</span>orwarders Logistics offers solutions for all international logistics needs, including international multi-mode
                                transportation with a combination of land, ocean and air, trilateral transportation, air/ocean consolidation services, customs
                                services, storage, delivery and Packing.</p>
                        </div>
                    </div>

                </div>
            {/* <img src={hero} alt="" /> */}
                <div className="overflow-hidden py-8 bg-gray-50 ">
                    <h2 className="text-center text-2xl tracking-wider font-light mb-4">Trusted by Top Clients</h2>
                    <div className="overflow-hidden mx-auto w-[850px] flex justify-center items-center">
                        <div className="whitespace-nowrap  animate-slide flex gap-10 px-4">
                        {logos.map((logo, i) => (
                            <img key={i} src={logo} alt="Client Logo" className="h-16 inline-block" />
                        ))}
                    </div>
                </div>
</div>


            <div>

           
            <div className=' max-w-6xl mx-auto flex items-center justify-start gap-20 z-'>
                <div>
                    <img src={numberOne} alt="" className='w-[600px]'/>
                </div>
                <div>
                    <img src={sea} alt="" className='w-[700px]'/>
                </div>
                <div className='p-10 max-w-4xl'>
                    <div>
                        <h1 className='text-6xl mt-6 tracking-wide'>Sea Cargo</h1>
                    </div>
                    <div className='text-xl mt-3 '>
                        <li>
                            Solid track record in areas requiring a high level of expertise, including autoparts, Garments
                        </li>
                        <li>
                            Machinery spare parts transported by air, and semiconductor manufacturing equipment.
                        </li>
                        <li>
                            According to the special needs of the cargo,and appropriate responses to urgent Air freight requests.
                        </li>
                        <li>
                            High-quality transportation services optimizing the speed advantage of Aircargo to support the needs of our customers businesses.
                        </li>
                    </div>
                </div>
            </div>

            <div className='max-w-6xl mx-auto flex items-center justify-start gap-20'>
                
                <div className='p-10 max-w-4xl'>
                    <div>
                        <h1 className='text-6xl mt-6 tracking-wide'>Logistics Service</h1>
                    </div>
                    <div className='text-xl mt-3 '>
                        <li>
                            Solid track record in areas requiring a high level of expertise, including autoparts, Garments
                        </li>
                        <li>
                            Machinery spare parts transported by air, and semiconductor manufacturing equipment.
                        </li>
                        <li>
                            According to the special needs of the cargo,and appropriate responses to urgent Air freight requests.
                        </li>
                        <li>
                            High-quality transportation services optimizing the speed advantage of Aircargo to support the needs of our customers businesses.
                        </li>
                    </div>
                </div>
                <div>
                    <img src={logi} alt="" className='w-[700px]'/>
                    
                </div>
                <div>
                    <img src={numberTwo} alt="" className='w-[600px]'/>
                </div>
            </div>

            <div className='max-w-6xl mx-auto flex items-center justify-start gap-20'>
                <div>
                    <img src={numberThree} alt="" className='w-[600px]'/>
                </div>
                <div>
                    <img src={air} alt="" className='w-[700px]'/>
                    
                </div>
                <div className='p-10 max-w-4xl'>
                    <div>
                        <h1 className='text-6xl mt-6 tracking-wide'>Air Cargo</h1>
                    </div>
                    <div className='text-xl mt-3 '>
                        <li>
                            Solid track record in areas requiring a high level of expertise, including autoparts, Garments
                        </li>
                        <li>
                            Machinery spare parts transported by air, and semiconductor manufacturing equipment.
                        </li>
                        <li>
                            According to the special needs of the cargo,and appropriate responses to urgent Air freight requests.
                        </li>
                        <li>
                            High-quality transportation services optimizing the speed advantage of Aircargo to support the needs of our customers businesses.
                        </li>
                    </div>
                </div>
            </div>

            <div className='max-w-6xl mx-auto flex items-center justify-start gap-20'>
                
                <div className='p-10 max-w-4xl'>
                    <div>
                        <h1 className='text-6xl mt-6 tracking-wide'>Land Cargo</h1>
                    </div>
                    <div className='text-xl mt-3 '>
                        <li>
                            Solid track record in areas requiring a high level of expertise, including autoparts, Garments
                        </li>
                        <li>
                            Machinery spare parts transported by air, and semiconductor manufacturing equipment.
                        </li>
                        <li>
                            According to the special needs of the cargo,and appropriate responses to urgent Air freight requests.
                        </li>
                        <li>
                            High-quality transportation services optimizing the speed advantage of Aircargo to support the needs of our customers businesses.
                        </li>
                    </div>
                </div>
                <div>
                    <img src={land} alt="" className='w-[700px]'/>
                </div>
                <div>
                    <img src={numberFour} alt="" className='w-[600px]'/>
                    
                </div>
            </div>  

             </div>


            <div>
                <img src={img1} alt=""  className='w-full'/>
            </div>

        </div>
        
    );
}

export default Body;
