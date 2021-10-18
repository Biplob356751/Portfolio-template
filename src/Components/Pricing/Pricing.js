import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <div className="pricing_content">
            <div className="container">
                <div className="pricing_content_item">
                    <div className="price_table">
                        <h3>PSD TO HTML</h3>
                        <div className="pricing_box">
                            <h4>1 Page Design</h4>
                            <p>20$</p>
                            <div className="price_table_price">
                                <i className="fa fa-check"></i><span>One Page Design</span>
                            </div>
                            <div className="price_table_price">
                                <i className="fa fa-check"></i><span>Html, Css, JavaScript, Bootstrap</span>
                            </div>
                            <div className="price_table_price">
                                <i className="fa fa-check"></i><span>All Device Responsive</span>
                            </div>
                            <div className="price_table_price">
                                <i className="fa fa-check"></i><span>Content Upload</span>
                            </div>
                            <div className="price_table_price">
                                <i className="fa fa-check"></i><span>5 Revision</span>
                            </div>
                            <div className="order_btn">
                                <button>Ordered Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="price_table">
                        <h3>REACT APPLICATION</h3>
                        <div className="pricing_box">
                            <h4>5 Page Design</h4>
                            <p>200$</p>
                            <div className="price_table_price">
                                <i className="fa fa-check"></i><span>Five Page Design</span>
                            </div>
                            <div className="price_table_price">
                                <i className="fa fa-check"></i><span>Html, Css, JavaScript, React Js</span>
                            </div>
                            <div className="price_table_price">
                                <i className="fa fa-check"></i><span>All Device Responsive</span>
                            </div>
                            <div className="price_table_price">
                                <i className="fa fa-check"></i><span>Content Upload</span>
                            </div>
                            <div className="price_table_price">
                                <i className="fa fa-check"></i><span>5 Revision</span>
                            </div>
                            <div className="order_btn">
                                <button>Ordered Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="price_table">
                        <h3>ECOMMERCE WITH REACT JS</h3>
                        <div className="pricing_box">
                            <h4>Full Complate Design</h4>
                            <p>300$</p>
                            <div className="price_table_price">
                                <i className="fa fa-check"></i><span>Complate Design in Frontend</span>
                            </div>
                            <div className="price_table_price">
                                <i className="fa fa-check"></i><span>Html, Css, JavaScript, React Js</span>
                            </div>
                            <div className="price_table_price">
                                <i className="fa fa-check"></i><span>All Device Responsive</span>
                            </div>
                            <div className="price_table_price">
                                <i className="fa fa-check"></i><span>Content Upload</span>
                            </div>
                            <div className="price_table_price">
                                <i className="fa fa-check"></i><span>Unlimited Support & Revision</span>
                            </div>
                            <div className="order_btn">
                                <button>Ordered Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;