import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
// import Hero from '../components/Hero/Hero';
// import FeaturedHostels from '../components/FeaturedHostels/FeaturedHostels';
//import ContactUs from "../components/Contact/ContactUs";
import AboutUs from "../components/About/AboutUs";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <AboutUs />
      </div>
      {/* <div className="my-0">
        <FeaturedHostels />
      </div> */}
      <Footer />
    </>
  );
};

export default About;
