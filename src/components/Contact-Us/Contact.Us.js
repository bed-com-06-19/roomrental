import React, { Fragment } from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faPhone, faEnvelope } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons';


const ContactUs = () => {
    return (
        <div>
            <Fragment>
                WELCOME TO MY CONTACT PAGE
            </Fragment>
            <div>
                <h1>CONTACT INFORMATION:</h1>
                <h2>Have a question or need an assistant? We are here to help. Simply fill out the form below, and we will get back to you as soon as possible.</h2>
            </div>
            <section className="Contact">
                <div className="Container">
                    <h2>Contact Us</h2>
                    <div className="contact-wrapper">
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
                        <div className="contact-info">
                            <h4>CONTACT INFORMATION</h4>
                            <h5><FontAwesomeIcon icon={farEnvelope} /> Emailexample@gmail.com</h5>
                            <h5>+2653287094</h5>
                            <h5><FontAwesomeIcon icon={faTelegram} /> faTelegram</h5>
                            <h5><FontAwesomeIcon icon={faInstagram} /> instagram</h5>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
