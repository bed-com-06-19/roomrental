import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function LandingPage() {                      
  return (
    <div className="w-full min-h-screen max-h-fit bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn-img.readytotrip.com/t/1024x768/content/c7/ab/c7ab31afd0a2c2691366f622696039f645a41d71.jpeg)' }}>
      <div className='flex flex-col bg-gradient-to-t from-black via-black/30 h-screen items-center'>
        <header className="w-full h-12 p-4 flex flex-row bg-black text-white items-center">
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
        </header>
        <div className='w-7/10 h-[70vh] mt-12 flex flex-col justify-center items-center text-white'>
          <h1 className='text-8xl mb-0'>ROOMRENTAL</h1>
          <h2 className='text-5xl m-0'>Fast and Reliable</h2>
          <p className='text-lg font-bold m-0'>This is the most reliable and efficient way for students to book rooms and landloards to post their available hostels.</p>
          <p className='text-lg font-bold m-0'>It offers the best way for every student around universty of malawi to find accommodation.</p>
          <div>
            <Link to="" className='no-underline w-32 h-12 bg-green-500 text-black flex justify-center items-center rounded-full mt-16 hover:bg-white hover:text-black'>
              <p className='font-bold'>View Hostels</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

