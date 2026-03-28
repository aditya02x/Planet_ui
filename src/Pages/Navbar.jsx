import React from 'react'

const Navbar = () => {
  return (
    <>
      {/* Navigation Links - Left Side */}
      <div className="fixed top-6 left-10 z-50">
        <div className="flex items-center gap-8 px-8 py-3 
                        bg-white/10 backdrop-blur-md
                        border border-white/20 rounded-full 
                        shadow-lg shadow-black/5">
          
          <a href="#home" className="text-sm font-medium text-white hover:text-white/70 transition-all">
            Home
          </a>
          <a href="#services" className="text-sm font-medium text-white hover:text-white/70 transition-all">
            Services
          </a>
          <a href="#contact" className="text-sm font-medium text-white hover:text-white/70 transition-all">
            Contact
          </a>
        </div>
      </div>
      
      {/* Action Button - Right Side */}
      <div className='fixed top-6 right-10 z-50'>
        <div className='flex items-center px-8 py-3 
                        bg-white/10 backdrop-blur-md 
                        border border-white/20 rounded-full 
                        shadow-lg shadow-black/10 transition-all hover:bg-white/20'>
          <a href="#Book" className='text-sm font-medium text-white'>
            Book Viewing
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar