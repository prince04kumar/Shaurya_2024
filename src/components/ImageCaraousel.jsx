import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      interval={3000} // 3 seconds between slides
      transitionTime={500} // transition time in milliseconds
      showStatus={false} // hides the status of the carousel (current slide number)
      stopOnHover={false}
    >
      <div>
        <img src="sports.png"  className='h-screen object-cover' alt="Sports" />
      </div>
      <div>
        <img src="Screenshot 2024-10-18 194117.png" className='h-screen object-cover' alt="Sports" />
      </div>
      <div>
        <img src="Image4.jpg" className='h-screen object-cover' alt="Image 4" />
      </div>
      <div>
        <img src="Independence_01.jpg" className='h-screen' alt="Independence" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;

