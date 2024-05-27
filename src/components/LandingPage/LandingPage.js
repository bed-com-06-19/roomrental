import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://cdn-img.readytotrip.com/t/1024x768/content/c7/ab/c7ab31afd0a2c2691366f622696039f645a41d71.jpeg)",
      }}
    >
      <div className="flex flex-col bg-gradient-to-t from-black via-black/30 h-screen items-center">
        <div className="w-11/12 md:w-4/5 lg:w-3/5 xl:w-2/5 h-[70vh] mt-12 flex flex-col justify-center items-center text-white text-center p-4">
          <h1 className="text-4xl md:text-6xl lg:text-8xl mb-2">ROOMRENTAL</h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl mb-2">
            Fast and Reliable
          </h2>
          <p className="text-sm md:text-lg lg:text-xl font-bold mb-2">
            The most reliable and efficient way for students to book rooms and
            landlords to post their available hostels.
          </p>
          <p className="text-sm md:text-lg lg:text-xl font-bold mb-2">
            It offers the best way for every student around University of Malawi
            to find accommodation.
          </p>
          <div>
            <Link
              to="/Hostel"
              className="no-underline w-32 h-12 bg-green-500 text-black flex justify-center items-center rounded-full mt-8 hover:bg-white hover:text-black"
            >
              <p className="font-bold">View Hostels</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

{
  /* <header className="w-full h-12 p-4 flex flex-row bg-black text-white items-center">
          <h2 className='mr-8 font-bolder text-2xl'>RoomRental</h2> 
          <Link to="Home" className='no-underline text-lg ml-20 text-white font-bold                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                       hover:text-aqua hover:text-green-500'>Home</Link>
          <Link to="" className='no-underline text-lg ml-20 text-white font-bold hover:text-aqua hover:text-green-500'>Hostels</Link>
          <Link to="" className='no-underline text-lg ml-20 text-white font-bold hover:text-aqua hover:text-green-500'>About</Link>
          <Link to="" className='no-underline text-lg ml-20 text-white font-bold hover:text-aqua hover:text-green-500'>Contact</Link>
          <Link to="" className='no-underline text-lg ml-20 text-white font-bold hover:text-aqua hover:text-green-500'>Login</Link>
          <div className="ml-auto flex space-x-4">
            <FontAwesomeIcon icon={faInstagram} size="lg hover:text-green-500" />
            <FontAwesomeIcon awqqwn icon={faFacebook} size="lg hover:text-green-500" />
            <FontAwesomeIcon icon={faTwitter} size="lg hover:text-green-500" />
          </div>
        </header> */
}
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
