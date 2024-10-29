import React, { useEffect, useRef } from 'react';
import '../styles/ImageCarousel.css'; // Import your custom CSS

const ImageCarousel2 = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;

    const scrollImages = () => {
      scrollAmount += 1; // Adjust this value for speed
      if (scrollAmount >= carousel.scrollWidth / 2) {
        scrollAmount = 0; // Reset scroll to loop seamlessly
      }
      carousel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth', // Smooth scrolling
      });
    };

    // Determine the scroll speed based on window size
    const isMobile = window.innerWidth <= 600; // You can adjust the breakpoint as needed
    const intervalSpeed = isMobile ? 70 : 20; // Slower speed for mobile, faster for laptop

    const interval = setInterval(scrollImages, intervalSpeed); // Set the scrolling speed
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="carousel-container m-4" ref={carouselRef}>
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
