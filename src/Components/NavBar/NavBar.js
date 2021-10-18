import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="nav_bar">
            <div className="container">
                <div className="main_menu">
                    <div className="logo">
                        <Link to="/"><span>B</span>IPLO<span>B</span></Link>
                    </div>
                    <div className="menu_item">
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/project">Project</Link></li>
                                <li><Link to="/pricing">Pricing</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="bar_icon">
                        <i className="fa fa-bars"></i>
                        <i id="times_icon" className="fa fa-times"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;