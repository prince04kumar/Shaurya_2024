import React, { useEffect, useRef, useState } from 'react';
import '../styles/ImageCarousel.css'; // Import your custom CSS

const ImageCarousel2 = () => {
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollAmountRef = useRef(0);  // Use ref to persist scroll position

  useEffect(() => {
    const carousel = carouselRef.current;
    let animationFrameId;

    const scrollImages = () => {
      if (!isPaused) {
        scrollAmountRef.current += 0.5;
        if (scrollAmountRef.current >= carousel.scrollWidth / 2) {
          scrollAmountRef.current = 0;
        }
        carousel.scrollTo({
          left: scrollAmountRef.current,
          behavior: 'auto',
        });
      }
      animationFrameId = requestAnimationFrame(scrollImages);
    };

    animationFrameId = requestAnimationFrame(scrollImages);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <div 
      className="carousel-container m-4" 
      ref={carouselRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel-track">
        {/* Duplicate the images to create an infinite scrolling effect */}
        <img src="Screenshot 2024-10-18 170712.png" className="carousel-image sm:h-96 h-64" alt="Sports 1" />
        <img src="Screenshot 2024-10-18 170731.png" className="carousel-image sm:h-96 h-64" alt="Sports 2" />
        <img src="Screenshot 2024-10-18 170739.png" className="carousel-image sm:h-96 h-64" alt="Image 4" />
        <img src="director.png" className="carousel-image sm:h-96 h-64" alt="Independence " />
        <img src="Screenshot 2024-10-18 170747.png" className="carousel-image sm:h-96 h-64" alt="Sports 3" />
        <img src="Screenshot 2024-10-18 170756.png" className="carousel-image sm:h-96 h-64" alt="Image 5" />

        {/* Duplicate images for looping */}
        <img src="Screenshot 2024-10-18 170712.png" className="carousel-image sm:h-96 h-64" alt="Sports 1" />
        <img src="Screenshot 2024-10-18 170731.png" className="carousel-image sm:h-96 h-64" alt="Sports 2" />
        <img src="Screenshot 2024-10-18 170739.png" className="carousel-image sm:h-96 h-64" alt="Image 4" />
        <img src="director.png" className="carousel-image sm:h-96 h-64" alt="Independence " />
        <img src="Screenshot 2024-10-18 170747.png" className="carousel-image sm:h-96 h-64" alt="Sports 3" />
        <img src="Screenshot 2024-10-18 170756.png" className="carousel-image sm:h-96 h-64" alt="Image 5" />
      </div>
    </div>
  );
};

export default ImageCarousel2;
