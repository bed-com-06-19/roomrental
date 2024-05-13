import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HardHostelCards from '../components/Hostels/HostelCard';

const Hostels = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-600">
        <div className="container mx-auto">
          <HardHostelCards />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hostels;

