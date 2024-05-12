import React, { Fragment } from "react";

const ContactUs=()=>{
    return (
        <div>
        <Fragment>WELCOME TO MY CONTACT PAGE </Fragment>
        <div  style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto', padding: '20px' }}>
        <header>
                <h1>Contact Us</h1>
            </header>
            <div>
                    <h2>Contact Information</h2>
                    <p>Email: example@example.com</p>
                    <p>Mobile Number: +1234567890</p>
                    <p>Send a Text Message: <a href="sms:+165993287093">Send SMS</a></p>
                    <p>Instagram: <a href="https://www.instagram.com/example">Message on Instagram</a></p>
               
            </div>
        </div>
        
      </div>
    );
    

};




export default ContactUs;
