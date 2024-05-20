import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import FeaturedHostels from '../components/FeaturedHostels/FeaturedHostels';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mt-10">
        <Hero />
      </div>
      <div className="my-0">
        <FeaturedHostels />
      </div>
      <Footer />
    </>
  );
};

export default Home;
