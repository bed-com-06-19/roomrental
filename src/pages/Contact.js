import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
// import Hero from '../components/Hero/Hero';
// import FeaturedHostels from '../components/FeaturedHostels/FeaturedHostels';
import ContactUs from "../components/Contact/ContactUs";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <ContactUs />
      </div>
      {/* <div className="my-0">
        <FeaturedHostels />
      </div> */}
      <Footer />
    </>
  );
};

export default Contact;
