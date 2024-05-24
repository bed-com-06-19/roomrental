import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import 'tailwindcss/tailwind.css';
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import BackgroundImage from "../../Assets/pexels-iriser-1366957.jpg";

const ContactUs = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Your query has been received!!! we will come back to you as soon as possible');
    };

    return (
        <div 
            className="min-h-screen bg-black text-white flex flex-col items-center pt-2"
            style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="text-2xl mb-4 font-bold"> 
                CONTACT US
            </div>
            <h1 className="flex items-center text-center">
                Have a question or need assistance? We're here to help! Simply fill out the form below and we'll get back to you as soon as possible. Your satisfaction is our priority.
            </h1>
            <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-800 bg-opacity-75 p-8 rounded-lg mt-8">
                <div className="contact-info space-y-4">
                    <div className="flex flex-col space-y-10 align-center">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faEnvelopeSquare} className="text-4xl mr-2" />
                            <p>davienyirong97@gmail.com</p>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faPhone} className="text-4xl mr-2" />
                            <p>+2653287093</p>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faTwitter} className="text-4xl mr-2" />
                            <p>Twitter</p>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faInstagram} className="text-4xl mr-2" />
                            <p>Instagram</p>
                        </div>
                    </div>
                </div>
                <div className="contact-Form">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="form-group"> 
                            <div className="text-lg mb-2 text-white">Send a message</div>
                            <input 
                                type="text" 
                                name="Name" 
                                placeholder="Enter your Name" 
                                required 
                                className="w-full p-4 rounded border border-gray-300 text-black"
                            />
                        </div>
                        <div className="form-group"> 
                            <input 
                                type="email" 
                                name="Email" 
                                placeholder="Enter Your Email: example@gmail.com" 
                                required 
                                className="w-full p-4 rounded border border-gray-300 text-black"
                            />
                        </div>
                        <textarea
                            className="w-full p-2 border-b-2 border-gray-300 bg-transparent text-lg text-white outline-none"
                            placeholder="Type message"
                            required
                            rows="6"
                        ></textarea>
                        <button 
                            type="submit" 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
