// components/Carousel.js

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop >
      <div>
        <img src="sports.png" className='h-96' alt="" />
      </div>
      <div>
        <img src="sports.png" className='h-96' alt="" />
      </div>
      <div >
        <img src="Image4.jpg" className='h-96' alt="" />
      </div>
      <div>
        <img src="Independence_01.jpg" className='h-96' alt="" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
