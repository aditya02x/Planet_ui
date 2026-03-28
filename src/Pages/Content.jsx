import React from 'react'

const Content = () => {
  return (
    <section className='w-full h-[50vh] flex bg-[#0a0a0a] overflow-hidden'> 
      
      {/* Map/Floor Plan Container */}
      <div className="map h-full w-full max-w-2xl border-r border-white/10">
        <img 
          className='object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity ' 
          src="https://www.ashvilleinc.com/wp-content/uploads/2015/02/floor-plan-2.jpg" 
          alt="Architectural Floor Plan" 
        />
      </div>

      {/* Right Side Info (Optional space for text/details) */}
      <div className="flex-1 h-full flex items-center px-12">
        <div className="text-white">
         
        </div>
      </div>

    </section>
  )
}

export default Content