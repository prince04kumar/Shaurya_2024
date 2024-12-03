import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const menuLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Team', href: '/team' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-amber-100/95 backdrop-blur-lg shadow-md py-2 border-b border-amber-200' 
        : 'bg-[#deded755] py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/Assets/new.png" 
                alt="Logo" 
                className={`transition-all duration-300 ${
                  scrolled ? 'h-16' : 'h-20'
                } hover:scale-105`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-3 py-2 text-base font-bold transition-all duration-300 group rounded-lg p-2 ${
                  scrolled 
                    ? isActive(link.href)
                      ? 'text-amber-800 bg-[#fafaf9]'
                      : 'text-amber-700 hover:text-amber-900'
                    : isActive(link.href)
                      ? 'text-amber-900 bg-[#fafaf9]'
                      : 'text-amber-800 hover:text-amber-950 '
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 ${
                  scrolled ? 'bg-amber-500' : 'bg-amber-700'
                } group-hover:scale-x-100`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                scrolled 
                  ? 'text-amber-700 hover:bg-amber-200/50' 
                  : 'text-amber-900 hover:bg-amber-100/50 bg-[#fafaf9]'
              }`}
            >
              <span className="sr-only">Open menu</span>
              <div className="w-6 h-6 flex items-center justify-center relative">
                <span 
                  className={`absolute w-6 h-0.5 transform transition-all duration-300 ${
                    scrolled ? 'bg-amber-700' : 'bg-amber-900'
                  } ${isOpen ? 'rotate-45' : '-translate-y-1'}`}
                ></span>
                <span 
                  className={`absolute w-6 h-0.5 ${
                    scrolled ? 'bg-amber-700' : 'bg-amber-900'
                  } ${isOpen ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                ></span>
                <span 
                  className={`absolute w-6 h-0.5 transform transition-all duration-300 ${
                    scrolled ? 'bg-amber-700' : 'bg-amber-900'
                  } ${isOpen ? '-rotate-45' : 'translate-y-1'}`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className={`rounded-lg shadow-lg ring-1 ring-amber-200 ${
            scrolled ? 'bg-amber-50' : 'bg-white'
          } divide-y divide-amber-100`}>
            <div className="pt-4 pb-6 px-5 space-y-6">
              <div className="flex flex-col space-y-4">
                {menuLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 ${
                      scrolled
                        ? isActive(link.href)
                          ? 'text-amber-900 bg-amber-100'
                          : 'text-amber-700 hover:bg-amber-100 hover:text-amber-900'
                        : isActive(link.href)
                          ? 'text-amber-900 bg-amber-100'
                          : 'text-amber-700 hover:bg-amber-100 hover:text-amber-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;