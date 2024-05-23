import React from 'react';
import about from "./aboutUS.jpg"

const AboutUs = () => {
  return (
    <>
      <div className="border">
        <div className="border grid grid-cols-2 bg-black">
          <div className="textDiv col-span-1 bg-black">
            <main className="container mx-auto px-4 py-16 bg-black">
              <div className="bg-black rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-white mb-4">About Us</h1>
                <p className="text-white mb-4">
                  Welcome to Room Rental, your number one source for all things related to room rentals. We're dedicated to providing you the best of room rental services, with a focus on dependability, customer service, and uniqueness.
                </p>
                <br />
                <br />
                <p className="text-white mb-4">
                  Discover convenient, comfortable, and affordable housing options tailored to your needs. Our mission is to provide safe, inclusive living spaces near campus, fostering academic success and lifelong friendships. Choose from a variety of accommodation styles, all maintained to the highest standards. Benefit from competitive rates, flexible payment options, and a supportive community atmosphere. With our dedicated team ready to assist you, your university experience starts here. Explore our offerings and find your perfect home away from at University of Malawi Room Rentals.
                </p>
                <br />
                <br />
                <p className="text-white font-bold">GET IN TOUCH!!!</p>
                <br />
                <p className="text-white mb-4">
                  Explore our range of accommodation options and discover your ideal living space today. For inquiries or assistance, don't hesitate to contact our friendly team. We're here to help you make the most of your university experience!
                </p>       
                <br /> 
                <br />
                <p className="text-white mb-4">
                  We enjoy offering our services to you. If you have any questions or comments, please don't hesitate to contact us.
                </p>
              </div>
            </main>
          </div>
          <div className="rightDiv col-span-1 flex justify-center items-center">
            <img src={about} alt="About Us" className="rounded-3xl"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

