import React from 'react';
import { Link } from 'react-router-dom'
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import image1 from '../../Assets/Images/oh-dee-hostel-habitacion-244d58a.jpg';
import image2 from '../../Assets/Images/gloomy-dark-corridor-closed-doors-600nw-1763607740.webp';
import image3 from '../../Assets/Images/hostel_dark.jpg';

const Hero = () => {
  // slideshow
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Slide 1" className="w-full h-auto max-h-screen" />
        </div>
        <div>
          <img src={image2} alt="Slide 2" className="w-full h-auto max-h-screen" />
        </div>
        <div>
          <img src={image3} alt="Slide 3" className="w-full h-auto max-h-screen" />
        </div>
      </Slider>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to RoomRental</h1>
        <p className="text-lg mb-4">Find your perfect hostel accommodation.</p>
        <Link to="/Hostel">
        <button className="bg-gray-500 hover:bg-blue-600 text-[#00df9a] font-bold py-2 px-4 rounded">
          View Hostels
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;



