import React from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import 'tailwindcss/tailwind.css';
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";



const ContactUs = () => {
    return (
        <div className="bg-gray-500">
            <h1 className=" flex justify-center text-xl mb-4 font-bold">
                  WELCOME TO MY CONTACT PAGE
            </h1>
            <div>
                <h1>CONTACT INFORMATION:</h1>
                <h2>Have a question or need an assistant? We are here to help. Simply fill out the form below, and we will get back to you as soon as possible.</h2>
            </div>
            <section className="Contact">
                <div className="Container">
                        <div className="contact-info">
                         <h2>Contact Us</h2>
                            <h4 className="text-l mb-4">CONTACT INFORMATION</h4>
                            <h5 className="flex items-center mb-2"><FontAwesomeIcon icon={faEnvelopeSquare} className="mr-2" /> Emailexample@gmail.com</h5>
                            <h5 className="flex items-center mb-2"><FontAwesomeIcon icon={faPhone} className="mr-2" /> +2653287094</h5>
                            <h5 className="flex items-center mb-2"><FontAwesomeIcon icon={faTwitter} className="mr-2" /> faTwitter</h5>
                            <h5 className="flex items-center mb-2"><FontAwesomeIcon icon={faInstagram} className="mr-2" /> instagram</h5>
                        </div>
                        <div className="contact-Form">
    
                                <form>
                                    <div className="form-group"> 
                                        <div>SEND US A MESSAGE</div>
                                        <input type="text" name="Name" placeholder="Enter your Name" required />
                                    </div>
                                    <div className="form-group"> 
                                        <input type="text" name="Email" placeholder="Enter Your Email" required />
                                    </div>
                                    <div className="form-group"> 
                                        <input type="text" name="Message" placeholder="Type your message" required />
                                    </div>
                                    <button type="submit">Submit</button>
                                </form>
                          </div>
                    </div>
            </section>
        </div>
    );
};
export default ContactUs;
