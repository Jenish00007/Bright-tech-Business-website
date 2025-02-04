import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import banner1 from '../../../images/projects/1.jpg';
import banner2 from '../../../images/projects/2.jpg';
import banner3 from '../../../images/projects/3.jpg';
import banner4 from '../../../images/projects/4.jpg';
import banner5 from '../../../images/projects/5.jpg';
import banner6 from '../../../images/projects/6.jpg';
import banner7 from '../../../images/projects/7.jpg';

import './Projects.css';

function Projects() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second animation duration
    }, []);

    return (
        <div id="rs-portfolio" className="bg42 pb-5 mb-3">
            <div className="project-container" style={{ width: '90%', margin: 'auto' }}>
                <div className="sec-title4 text-center p-5" data-aos="fade-up">
                    <span className="sub-title white-color pb-15">Projects</span>
                    <h2 className="title white-color">Recent Portfolios</h2>
                </div>
                <div className="slider-part">
                    {/* Row 1: Right to Left Scrolling */}
                    <div className="scroll-row right-to-left">
                        {[banner1, banner2, banner3, banner4, banner5, banner6].map((banner, index) => (
                            <div className="portfolio-wrap" key={`row1-${index}`}>
                                <div className="img-part">
                                    <img src={banner} className="images" alt={`Project ${index + 1}`} />
                                    <div className="content-part">
                                        <div className="text">
                                            <i className="fa fa-link" style={{ fontSize: '30px' }}></i>
                                            <h4 className="text-white">VIEW WEBSITE</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Row 2: Left to Right Scrolling */}
                    <div className="scroll-row left-to-right">
                        {[banner4, banner5, banner6, banner7, banner1, banner3].map((banner, index) => (
                            <div className="portfolio-wrap" key={`row2-${index}`}>
                                <div className="img-part">
                                    <img src={banner} className="images" alt={`Project ${index + 4}`} />
                                    <div className="content-part">
                                        <div className="text">
                                            <i className="fa fa-link" style={{ fontSize: '30px' }}></i>
                                            <h4 className="text-white">VIEW WEBSITE</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="btn-part" data-aos="fade-up" data-aos-delay="600">
                    <div className="form-group">
                        <button className="readon2 submit-btn con-btn">View More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;