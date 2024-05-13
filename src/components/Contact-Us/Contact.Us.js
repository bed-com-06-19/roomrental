import React, { Fragment } from "react"; 

const ContactUs = () => {
    return (
        <div>
            <Fragment>WELCOME TO MY CONTACT PAGE</Fragment>
            <div>
                <h1>CONTACT INFORMATION:</h1>
                <h2>Have a quwestion or need an assistant? We are here to help simply fill out the form below and will get back to you as soon as possible</h2>
        
                
            </div>
            <div className="Container">

            <div>
                <form>
                    <div className="form-group"> 
                        <div>SEND US A MESSAGE</div>
                        <input type="text" name="Name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group"> 
                        <input type="text" Email="Name" placeholder="Your Email" required />
                    </div>
                    <div className="form-group"> 
                        <input type="text" name="Name" placeholder="Your Name" required />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
            </div>


        </div>
    );
};

export default ContactUs; // Exporting the component
