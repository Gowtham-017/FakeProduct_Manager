import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Slider.css';
import img2 from '../assets/img2.png';
import image3 from '../assets/image3.png';
const images = [image3,img2,image3,img2];
const SimpleSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };
  return (
    <div className="slider-container">
      <Slider {...settings} beforeChange={() => setCurrentSlide}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div className="arrow arrow-left" onClick={prevSlide}>
      </div>
      <div className="arrow arrow-right" onClick={nextSlide}>
      </div>
    </div>
  );
};
export default SimpleSlider;