import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import LandingPage from "../components/LandingPage/LandingPage";
import FeaturedHostels from "../components/FeaturedHostels/FeaturedHostels";

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="mt-10">
        <LandingPage />
      </div>
      <div className="my-0">
        <FeaturedHostels />
      </div>
      <Footer />
    </>
  );
};

export default Landing;
