import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Content = () => {
  return (
    <section className='w-full h-[50vh] flex bg-gray-400/20 overflow-hidden'> 
      
      {/* Left Side: Floor Plan */}
      <div className="map h-full w-full max-w-2xl border-r border-white/10 hidden md:block">
        <img 
          className='object-cover w-full h-full  opacity-100 transition-opacity' 
          src="https://www.ashvilleinc.com/wp-content/uploads/2015/02/floor-plan-2.jpg" 
          alt="Architectural Floor Plan" 
        />
      </div>

      {/* Right Side: Swiper Container */}
      <div className="flex-1 h-full relative min-w-0"> {/* min-w-0 is CRITICAL for Swiper in Flex */}
        <Swiper 
          navigation={true} 
          modules={[Navigation]} 
          className="mySwiper h-full w-full"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <SwiperSlide key={num}>
              <div className="flex flex-col items-center justify-center h-full text-white px-20 text-center">
                <h3 className="text-orange-500 uppercase tracking-widest text-sm mb-2">Feature {num}</h3>
                <h2 className="text-4xl font-light mb-4 italic">Modern Oasis Room {num}</h2>
                <p className="text-zinc-400 text-sm max-w-xs">
                  Premium finishes and minimalist design integration for a seamless living experience.
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom CSS to make Swiper arrows visible on dark background */}
        <style dangerouslySetInnerHTML={{ __html: `
          .swiper-button-next, .swiper-button-prev {
            color: white !important;
            transform: scale(0.7);
          }
          .swiper-button-next:after, .swiper-button-prev:after {
            font-size: 24px !important;
          }
        `}} />
      </div>

    </section>
  )
}

export default Content