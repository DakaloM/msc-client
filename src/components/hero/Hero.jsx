import React from 'react';
import "./hero.scss";
import Navbar from '../navbar/Navbar';
import MultiCarousel from '../carousel/MultiCarousel';

const Hero = () => {
  return (
    <div className='hero'>
        
        <MultiCarousel />
    </div>
  )
}

export default Hero