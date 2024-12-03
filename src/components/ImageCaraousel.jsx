import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      interval={5000}
      transitionTime={500}
      showStatus={false}
      stopOnHover={true}
      swipeable={true}
      showArrows={true}
      dynamicHeight={false}
      preventMovementUntilSwipeScrollTolerance={true}
      swipeScrollTolerance={50}
      renderArrowPrev={(clickHandler) => (
        <button
          onClick={clickHandler}
          className="absolute left-0 z-10 p-3 bg-black/30 hover:bg-black/50 text-white rounded-r"
          aria-label="Previous slide"
        >
          ←
        </button>
      )}
      renderArrowNext={(clickHandler) => (
        <button
          onClick={clickHandler}
          className="absolute right-0 z-10 p-3 bg-black/30 hover:bg-black/50 text-white rounded-l"
          aria-label="Next slide"
        >
          →
        </button>
      )}
    >
      <div>
        <img src="sports.png"  className='h-screen object-cover' alt="" />
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

