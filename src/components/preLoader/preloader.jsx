import React, { useEffect } from 'react';
import { useState } from 'react';
import './preloader.css';
import logo from '../../assets/shaurya.png';

const PreLoader = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      
      const timer = setTimeout(() => setLoading(false), 3000); 
  
      return () => clearTimeout(timer); 
    }, []);

    return (
        loading && (
        <div className="loader">
            <div className="loader-main">
                <img src={logo} alt="logo"  width='80%'/>
            </div>
            <div className="loader-text">
                Welcome To Shaurya
                <div className="dots">
                  <div className="middle-dot"></div>
                </div>
            </div>
                
        </div>
        )
    );
};
export default PreLoader 