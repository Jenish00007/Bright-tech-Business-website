import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../../images/logo.jpg';
import sm1 from '../../../images/blog/small/1.jpg';
import sm2 from '../../../images/blog/small/2.jpg';
import sm3 from '../../../images/blog/small/3.jpg';

function Footer() {
    return (
        <div id="rs-footer" className="rs-footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-grid">
                        {/* About Section */}
                        <div className="footer-widget about-widget">
                            <div className="logo-part">
                                <a href="/"><img src={logo} alt="Footer Logo" /></a>
                            </div>
                            <p className="desc">General aspects that many software companies offering website solutions may cover. For accurate and detailed information about BrightechSoftware's offerings, please refer to their official communication channels or directly contact the company.</p>
                        </div>

                        {/* Contact Info Section */}
                        <div className="footer-widget contact-widget">
                            <h4 className="widget-title">Contact Info</h4>
                            <ul className="address-widget">
                                <li>
                                    <i className="flaticon-location"></i>
                                    <div className="desc">Plat No:39/40,Thiruvalluvar Nagar First Street, Moondram kattalai, sriperumbudur(TK), Kanchipuram(DT), Chennai-600069.</div>
                                </li>
                                <li>
                                    <i className="flaticon-call"></i>
                                    <div className="desc">
                                        <a href="">9688192922</a>
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-email"></i>
                                    <div className="desc">
                                        <a href="mailto:brightechsoftwares@gmail.com">brightechsoftwares@gmail.com</a>
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-clock"></i>
                                    <div className="desc">Mon - Sat: 10 Am - 7 Pm</div>
                                </li>
                            </ul>
                        </div>

                        {/* Latest Posts Section */}
                        {/* <div className="footer-widget posts-widget">
                            <h4 className="widget-title">Latest Posts</h4>
                            <div className="footer-post">
                                {[
                                    { img: sm1, title: "Covid-19 threatens the next generation of smartphones", date: "September 6, 2019" },
                                    { img: sm2, title: "Soundtrack filma Lady Exclusive Music", date: "April 15, 2019" },
                                    { img: sm3, title: "Winged moved stars, fruit creature seed night.", date: "October 9, 2019" }
                                ].map((post, index) => (
                                    <div key={index} className="post-wrap">
                                        <div className="post-img">
                                            <a href="/blog-single"><img src={post.img} alt="" /></a>
                                        </div>
                                        <div className="post-desc">
                                            <a href="/blog-single">{post.title}</a>
                                            <div className="date-post">
                                                <i className="fa fa-calendar"></i> {post.date}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div> */}
                        {/* Latest Posts Section */}
                        <div className="footer-widget posts-widget">
                            <h4 className="widget-title">Policy</h4>
                            <div className="footer-post">
                            <div className="policy-links">
                                <Link to="/terms-and-Conditions">Terms and Conditions</Link>
                                <Link to="/privacy-policy">Privacy Policy</Link>
                                <Link to="/refund-policy">Refund Policy</Link>
                                <Link to="/Cancellation-policy">Cancellation Policy</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <div className="copyright-section">
                            <p>© Copyright 2025 Brightech Software Solutions. All Rights Reserved.</p>
                            {/* <div className="policy-links">
                                <Link to="/terms-and-Conditions">Terms and Conditions</Link>
                                <Link to="/privacy-policy">Privacy Policy</Link>
                                <Link to="/refund-policy">Refund Policy</Link>
                                <Link to="/Cancellation-policy">Cancellation Policy</Link>
                            </div> */}
                        </div>
                        <div className="social-section">
                            <ul className="footer-social">
                                {[
                                    { icon: "facebook", url: "https://facebook.com" },
                                    { icon: "twitter", url: "https://twitter.com" },
                                    { icon: "google", url: "https://google.com" },
                                    { icon: "instagram", url: "https://instagram.com" },
                                    { icon: "youtube-play", url: "https://youtube.com" },
                                    { icon: "whatsapp", url: "https://wa.me/123456789" }
                                ].map((social, index) => (
                                    <li key={index}>
                                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                                            <i className={`fa fa-${social.icon}`}></i>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;