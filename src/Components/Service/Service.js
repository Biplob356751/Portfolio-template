import React from 'react';
import './Service.css'

const Service = () => {

    const serviceData = [
        {
            id: 1,
            title: "PSD TO HTML",
            description: "I will Convert any Web template and Psd to Html, WebSite Clone.I have 2 years experience in Codding. I writte Code Clean & SEO friendly."
        },
        {
            id: 2,
            title: "PSD TO REACT",
            description: "I will Convert any Web template and Psd to REACT, WebSite Clone.I have 1 years experience in In React Js. I will create functional Component. Its very Fast & Single Page Application."
        },
        {
            id: 3,
            title: "HTML TO REACT",
            description: "I will Convert any Web template and Html to React, WebSite Clone.I have 1 years experience in React Js. I writte Code Clean & SEO friendly."
        },
        {
            id: 4,
            title: "FIGMA TO REACT",
            description: "I will Convert any Web template and Figma to React, WebSite Clone.I have 1 years experience in React Js. I writte Code Clean & SEO friendly."
        },
        {
            id: 5,
            title: "SINGLE PAGE APPLICATION",
            description: "I will create single page application with React js. Use React js Application is a super fast and don't load Your web page."
        },
        {
            id: 6,
            title: "ECOMMERCE WITH REACT JS",
            description: "I will create single page Ecommerce application with React js. Use React js Application is a super fast and don't load Your web page."
        },
        
    ]

    return (
        <div className="service_section">
            <div className="container">
                <div className="service_content_item">
                    <div className="service_content">
                        {
                          serviceData.map(data => 
                          <div className="service" key={data.id}>
                              <h3>{data.title}</h3>
                              <p>{data.description}</p>
                          </div>
                          )  
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;