import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
// import Hero from '../components/Hero/Hero';
// import FeaturedHostels from '../components/FeaturedHostels/FeaturedHostels';
//import ContactUs from "../components/Contact/ContactUs";
import Payments from "../components/Payment/Payments";
import MYBACKGROUND from "../Assets/Images/Vintagedeskphone.jpg";

const Payment = () => {
  return (
    <>
      <Navbar />
      <div
        className="mt-16"
        style={{
          backgroundImage: `url(${MYBACKGROUND})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Payments />
      </div>
      {/* <div className="my-0">
        <FeaturedHostels />
      </div> */}
      <Footer />
    </>
  );
};

export default Payment;
