import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer_section">
            <footer>
                <Link to="/"><span>B</span>IPLO<span>B</span></Link>
                <div className="footer_info">
                    <a href="https://www.facebook.com/md.biplob.31508076" target="_blank"><i className="fab fa-facebook"></i></a>
                    <a href="#" ><i className="fab fa-google-plus"></i></a>
                    <a href="#"><i className="fab fa-whatsapp"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                </div>
                <p>All rights reserved 2021 biplobhossain.com</p>
            </footer>
        </div>
    );
};

export default Footer;