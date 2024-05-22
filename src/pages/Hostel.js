import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HardHostelCards from '../components/Hostels/HostelCard';

const Hostels = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow mt-16">
        <HardHostelCards />
      </div>
      <Footer />
    </div>
  );
};

export default Hostels;
