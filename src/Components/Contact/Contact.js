import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact_section">
            <div className="container">
                <div className="contact">
                    <div className="contact_info">
                        <h2>Contact For More Information</h2>
                        <p><i className="fas fa-location"></i>Location: Sakhipur, Tangail</p>
                        <p><i className="fas fa-phone"></i>Phone: 01302480286</p>
                        <p><i className="fas fa-envelope"></i>Gmail: biplobhossain356751@gmail.com</p>
                    </div>
                    <div className="contact_input">
                        <form action="#">
                            <input type="email" placeholder="Enter Your Email" />
                            <textarea placeholder="Massage"></textarea>
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;