import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' }, // Update if you create an About page
    { name: 'Events', href: '/events' },
    { name: 'Team', href: '/team' },
    { name: 'Contact Us', href: '/contact' }, // Update if you create a Contact page
  ];

  return (
    <nav className="bg-amber-100 bg-opacity-30 backdrop-blur-lg shadow-lg py-0 pr-16 border-2 border-amber-600 animate-rotate-border">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src="/Assets/new.png" alt="Logo" className="w-68 h-24" />

        {/* Menu links for larger screens */}
        <div className="hidden md:flex space-x-12 text-gray-600 font-semibold font-serif text-mdl">
          {menuLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href} // Use Link instead of a tag
              className="hover:text-amber-800 hover:underline hover:underline-offset-8 transition duration-300 ease-in-out transform hover:scale-105"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger icon for smaller screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-amber-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-10 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown menu for smaller screens */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 text-gray-600 font-semibold text-mdl font-serif">
          {menuLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href} // Use Link instead of a tag
              className="hover:text-amber-900 hover:underline hover:underline-offset-8 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={toggleMenu} // Close menu on link click
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;