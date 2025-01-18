import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.jpg';
import sm1 from '../../../images/blog/small/1.jpg';
import sm2 from '../../../images/blog/small/2.jpg';
import sm3 from '../../../images/blog/small/3.jpg';

function Footer() {
    return (
        <div id="rs-footer" className="rs-footer style4">
            <div className="" style={{ width: '90%', margin: 'auto' }}>
                <div className="footer-newsletter">
                    <div className="row y-middle">
                        <div className="col-md-6 sm-mb-26">
                            <h3 className="title white-color mb-0">Newsletter Subscribe</h3>
                        </div>
                        <div className="col-md-6 text-right">
                            <form className="newsletter-form">
                                <input type="email" name="email" placeholder="Your email address" required="" />
                                <button type="submit"><i className="fa fa-paper-plane"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer-content pt-62 pb-79 md-pb-64 sm-pt-48">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 footer-widget md-mb-39">
                            <div className="about-widget pr-15">
                                <div className="logo-part">
                                    <a href="/"><img src={logo} alt="Footer Logo" /></a>
                                </div>
                                <p className="desc">General aspects that many software companies offering website solutions may cover. For accurate and detailed information about BrightechSoftware's offerings, please refer to their official communication channels or directly contact the company.</p>
                                <div className="btn-part">
                                    <a className="readon" href="/about">Discover More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 md-mb-32 footer-widget">
                            <h4 className="widget-title">Contact Info</h4>
                            <ul className="address-widget pr-40">
                                <li>
                                    <i className="flaticon-location"></i>
                                    <div className="desc">Plat No:39/40,Thiruvalluvar Nagar First Street, Moondram kattalai, sriperumbudur(TK), Kanchipuram(DT), Chennai-600069.</div>
                                </li>
                                <li>
                                    <i className="flaticon-call"></i>
                                    <div className="desc">
                                        <a href="tel:+8801739753105">9688192922</a>
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
                        <div className="col-lg-4 col-md-12 col-sm-12 footer-widget">
                            <h4 className="widget-title">Latest Posts</h4>
                            <div className="footer-post">
                                <div className="post-wrap mb-15">
                                    <div className="post-img">
                                        <a href="/blog-single"><img src={sm1} alt="" /></a>
                                    </div>
                                    <div className="post-desc">
                                        <a href="/blog-single">Covid-19 threatens the next generation of smartphones</a>
                                        <div className="date-post">
                                            <i className="fa fa-calendar"></i> September 6, 2019
                                        </div>
                                    </div>
                                </div>
                                <div className="post-wrap mb-15">
                                    <div className="post-img">
                                        <a href="/blog-single"><img src={sm2} alt="" /></a>
                                    </div>
                                    <div className="post-desc">
                                        <a href="/blog-single">Soundtrack filma Lady Exclusive Music</a>
                                        <div className="date-post">
                                            <i className="fa fa-calendar"></i> April 15, 2019
                                        </div>
                                    </div>
                                </div>
                                <div className="post-wrap">
                                    <div className="post-img">
                                        <a href="/blog-single"><img src={sm3} alt="" /></a>
                                    </div>
                                    <div className="post-desc">
                                        <a href="/blog-single">Winged moved stars, fruit creature seed night.</a>
                                        <div className="date-post">
                                            <i className="fa fa-calendar"></i> October 9, 2019
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="row y-middle">
                        <div className="col-lg-6 col-md-8 sm-mb-21">
                            <div className="copyright" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <p>© Copyright 2025 Brightech Software Solutions. All Rights Reserved.</p>
                                <div style={{ marginLeft: '20px' }}>
                                    <Link to="/terms-of-use" style={{ marginRight: '10px' }}>Terms of Use</Link>
                                    <Link to="/privacy-policy">Privacy Policy</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 text-right sm-text-center">
                            <ul className="footer-social">
                                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="https://google.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-google"></i></a></li>
                                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play"></i></a></li>
                                <li><a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
