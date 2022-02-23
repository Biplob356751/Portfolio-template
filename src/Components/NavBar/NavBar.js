import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {

    // Drop down menu start
    
    const handleBarIcon = () => {
        var menuItem = document.querySelector('.menu_item');
        var timeIcon = document.querySelector('#times_icon');
        var barIcon = document.querySelector('#bar_icon');
        menuItem.style.opacity = '1';
        menuItem.style.visibility = 'visible';
        menuItem.style.transform = 'scaleY(1)';
        timeIcon.style.opacity = '1';
        timeIcon.style.visibility = 'visible';
        barIcon.style.opacity = '0';
        barIcon.style.visibility = 'hidden';
    };
    const handleTimeIcon = () => {
        var menuItem = document.querySelector('.menu_item');
        var timeIcon = document.querySelector('#times_icon');
        var barIcon = document.querySelector('#bar_icon');
        menuItem.style.opacity = '0';
        menuItem.style.visibility = 'hidden';
        menuItem.style.transform = 'scaleY(0)';
        timeIcon.style.opacity = '0';
        timeIcon.style.visibility = 'hidden';
        barIcon.style.opacity = '1';
        barIcon.style.visibility = 'visible';
    }

   // Drop down menu end
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
                        <i onClick={handleBarIcon} id="bar_icon" className="fa fa-bars"></i>
                        <i onClick={handleTimeIcon} id="times_icon" className="fa fa-times"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;