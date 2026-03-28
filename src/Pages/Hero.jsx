import React from 'react'

const Hero = () => {
  return (
    <section className='main h-screen w-full relative bg-[#0a0a0a]'>
        {/* The 65% height container */}
        <div className="con w-full h-[65%] overflow-hidden relative">
            
            <img 
              className='object-cover w-full h-full object-center' 
              // New verified Unsplash link (Modern Architecture)
              src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop" 
              alt="Modern house exterior" 
              // Basic error handling just in case
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2000&auto=format&fit=crop" }}
            />

            {/* Subtle top overlay to help your glassmorphism nav visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent"></div>
            
        </div>
    </section>
  )
}

export default Hero