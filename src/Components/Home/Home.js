import React from 'react';
import About from '../About/About';
import Project from '../Project/Project';
import Service from '../Service/Service';
import './Home.css'
import Pricing from './../Pricing/Pricing';
import Contact from './../Contact/Contact';
import Img from '../Image/Background.png'

const Home = () => {
    return (
        <>
            <div className="home_section">
                <div className="container">
                    <div className="hero_content_item">
                        <div className="hero_content">
                            <h5>Hey!</h5>
                            <h1>I Am Biplob Hossain</h1>
                            <p>Proffessional Frontend Devloper....</p>
                            <a href="https://www.facebook.com/md.biplob.31508076" target="_blank"><i className="fab fa-facebook"></i></a>
                            <a href="#" ><i className="fab fa-google-plus"></i></a>
                            <a href="#"><i className="fab fa-whatsapp"></i></a>
                            <a href="#"><i className="fab fa-github"></i></a>
                        </div>
                        <div className="hero_content_img">
                            <img src={Img} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_page">
                <About></About>
            </div>
            <div className="service_page">
                <Service></Service>
            </div>
            <div className="project_page">
                <Project></Project>
            </div>
            <div className="pricing_page">
                <Pricing></Pricing>
            </div>
            <div className="contact_page">
                <Contact></Contact>
            </div>
            
        </>
    );
};

export default Home;