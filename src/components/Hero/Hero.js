import React from 'react';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import image1 from '../../Assets/Images/taiga-ishii-mukO8Po_LZ8-unsplash.jpg';
import image2 from '../../Assets/Images/shobhit-sharma-8TrcnRMap90-unsplash.jpg';
import image3 from '../../Assets/Images/fernando-santander-rNN8leuLnU4-unsplash.jpg';

const Hero = () => {
  // slideshow
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative overflow-hidden" style={{ minHeight: '80vh' }}>
     
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Slide 1" className="w-full h-auto max-h-[80vh]" />
        </div>
        <div>
          <img src={image2} alt="Slide 2" className="w-full h-auto max-h-[80vh]" />
        </div>
        <div>
          <img src={image3} alt="Slide 3" className="w-full h-auto max-h-[80vh]" />
        </div>
      </Slider>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to RoomRental</h1>
        <p className="text-lg mb-4">Find your perfect hostel accommodation.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          View Hostels
        </button>
      </div>
    </div>
  );
};

export default Hero;


