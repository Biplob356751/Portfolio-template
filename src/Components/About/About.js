import React, { useState } from 'react';
import './About.css'

const About = () => {
    const [tab, setTab] = useState(1);
    const handleTab = (index) => {
        setTab(index);
    }


    return (
        <div className="about_us">
            <div className="container">
                <div className="about_content_item">
                    <div className="profile_image">
                        <img src="https://i.pinimg.com/564x/00/29/cb/0029cb850958605201910c2b3cea031f.jpg" alt="" />
                    </div>
                    <div className="profile_info">
                        <h2>About MySelf</h2>
                        <p>My Name is Biplob Hossain & Frontend Devlopment is my passion.
                            I have 2+ years experience in this sector.</p>
                        <div className="profile_tab">
                            <div className='tab_section'>
                                <div className="tabs">
                                    <div className={tab === 1 ? "tab active_tab" : "tab"} onClick={() => handleTab(1)}>Education</div>
                                    <div className={tab === 2 ? "tab active_tab" : "tab"} onClick={() => handleTab(2)}>Skill</div>
                                    <div className={tab === 3 ? "tab active_tab" : "tab"} onClick={() => handleTab(3)}>Contact</div>
                                </div>
                                <div className="tab_content">
                                    <div className={tab === 1 ? "content active_content" : "content"}>
                                        <h4>S.S.C (2016)</h4>
                                        <p>Ghonar Chala High School.</p>
                                        <h4>Engennerings</h4>
                                        <p>Diploma Engenner Depertment Of RAC.</p>
                                        <p>Dhaka Polytechnic Institute (2020).</p>

                                    </div>
                                    <div className={tab === 2 ? "content active_content" : "content"}>
                                        <div className="skill_info">
                                            <div className="skill">
                                                HTML5
                                            </div>
                                            <div className="skill skill_1">
                                                CSS3
                                            </div>
                                            <div className="skill skill_2">
                                                BOOTSTRAP
                                            </div>
                                            <div className="skill skill_3">
                                                JAVASCRIPT
                                            </div>
                                            <div className="skill skill_4">
                                               REACT JS
                                            </div>
                                        </div>
                                    </div>
                                    <div className={tab === 3 ? "content active_content" : "content"}>
                                        <div className="contact_link">
                                            <p>Facebook: <a href="https://www.facebook.com/md.biplob.31508076" target="_blank"> https://www.facebook.com/md.biplob.31508076</a></p>
                                            <p>Github: <a href="https://www.github.com/biplob356751" target="_blank"> https://www.github.com/biplob356751</a></p>
                                            <p>Gmail: <a href="biplobhossain356751@gmail.com" target="_blank"> biplobhossain356751@gmail.com</a></p>
                                            <p>Mobile: 01302480286</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;