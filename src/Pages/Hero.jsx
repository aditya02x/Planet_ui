import React from 'react'

const Hero = () => {
  return (
    <section className='main h-screen w-full relative '>
        {/* The 65% height container */}
        <div className="con w-full h-screen overflow-hidden relative">
            
            <img 
              className='object-cover w-full h-full object-center' 
              // New verified Unsplash link (Modern Architecture)
              src="/images/bg.jpg" 
              alt="Modern house exterior" 
              // Basic error handling just in case
             
            />

            {/* Subtle top overlay to help your glassmorphism nav visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>

            <div className='absolute inset-0  z-10 flex m-auto tracking-tighter text-white'>
                <h1 className='text-[40vh] font-bold tracking-tighter uppercase '>PLANETICS</h1>
               
            </div>
            <div className='absolute inset-0 top-150 max-w-2xl p-4  z-10 tracking-tighter text-white'>
                <p className='text-2xl leading-6 text-gray-50 ' >A vision transparent property and peace where unmatched craftsman inspire eligance innovationto enrich lives</p>
            </div>



            
        </div>
        
    </section>
  )
}

export default Hero