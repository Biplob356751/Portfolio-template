import React from 'react';
import './Project.css';
import Image1 from '../Image/project1.png'
import Image2 from '../Image/preview.png'
import Image3 from '../Image/project3.png'
import Image4 from '../Image/SEO Melbourne.png'
import Image5 from '../Image/JossGift Shop.png'
import Image6 from '../Image/React App.png'
import Image7 from '../Image/project5.png'


const Project = () => {
    return (
        <div className="project_section">
            <div className="container">
                <div className="project_img">
                    <div className="project_content project_11">
                        <a href="https://elegant-montalcini-d84ba5.netlify.app/" target="_blank"><img src={Image1} alt="" /></a>
                    </div>
                    <div className="project_content project_22">
                        <a href="https://nostalgic-noyce-0ce736.netlify.app/" target="_blank"><img src={Image2} alt="" /></a>
                    </div>
                    <div className="project_content project_33">
                        <a href="https://cocky-heyrovsky-25cfc7.netlify.app/" target="_blank"><img src={Image3} alt="" /></a>
                    </div>
                    <div className="project_content project_44">
                        <a href="https://clever-leakey-f5fa1f.netlify.app/" target="_blank"><img src={Image4} alt="" /></a>
                    </div>
                    <div className="project_content project_55">
                        <a href="https://lucid-minsky-369289.netlify.app/" target="_blank"><img src={Image5} alt="" /></a>
                    </div>
                    <div className="project_content project_66">
                        <a href="https://inspiring-noyce-5298f5.netlify.app/" target="_blank"><img src={Image6} alt="" /></a>
                    </div>
                    <div className="project_content project_77">
                        <a href="https://jolly-shaw-b4ee74.netlify.app/" target="_blank"><img src={Image7} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;