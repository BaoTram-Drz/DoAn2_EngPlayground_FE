import React from 'react';
import { useState, useEffect} from 'react';
import 'react-slideshow-image/dist/styles.css';
import slide1 from './images/slide1.jpg';
import slide2 from './images/slide2.jpg';
import slide3 from './images/slide3.jpg';
import slide4 from './images/slide4.jpg';
import slide5 from './images/slide5.jpg';
import {SlideshowContainer, Slideshow, } from './Carousel.styled'

const Carousel = () => {

  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [slide1, slide2, slide3, slide4, slide5];

  const handleSlideMouseOn = (index) => {
    setActiveSlide(index);
  };
  const handleSlideMouseLeave = (e) => {
    setActiveSlide(false);
  };

  return (
    <SlideshowContainer bgImage={slide2}>
      {slides.map((slide, index) => (
        <Slideshow
          key={index}
          bgImage={slide}
          onMouseEnter={() => handleSlideMouseOn(index)}
          onMouseLeave={handleSlideMouseLeave}          
          className={index === activeSlide ? 'active' : ''}
          
        >
        </Slideshow>
      ))}

    </SlideshowContainer>
  );
};

export default Carousel;
