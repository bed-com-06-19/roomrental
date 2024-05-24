import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
// import Hero from '../components/Hero/Hero';
// import FeaturedHostels from '../components/FeaturedHostels/FeaturedHostels';
//import ContactUs from "../components/Contact/ContactUs";
//import Payments from "../components/Payment/Payments";
//import Login from "../components/Login/Login";
import Signup from "../components/SingUp/Signup";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <Signup />
      </div>
      {/* <div className="my-0">
        <FeaturedHostels />
      </div> */}
      <Footer />
    </>
  );
};
export default SignUp;
