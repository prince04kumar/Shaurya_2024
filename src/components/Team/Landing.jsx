import React from 'react';
import assets from '../../assets/assets';

const Landing = () => {
  return (
    <div 
      className='relative h-[70vh] md:h-screen w-screen flex justify-center bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${assets.backgroundImage})` }}
    >
      {/* Fade overlay with reduced exposure */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black opacity-80"></div>
      
      {/* Content */}
      <div className='relative z-20 h-full text-4xl text-white pt-20 flex flex-col gap-8'>
        <h1 className='font-kaushan text-4xl sm:text-6xl md:text-8xl'>TEAM</h1>
        <h1 className='font-kaushan text-6xl sm:text-8xl md:text-10xl'>SHAURYA</h1>
      </div>
    </div>
  );
};

export default Landing;
