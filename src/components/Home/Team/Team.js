import React, { useEffect } from 'react';
import './Team.css';
import ceo from '../../../images/team/seo/1.jpg';
import developer from '../../../images/team/seo/2.jpg';
import marketer from '../../../images/team/seo/3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Team() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div id="rs-team" className="rs-team style2 modify1 pt-100 pb-100 md-pt-70 md-pb-70">
            <div className="container" style={{ width: '90%', margin: 'auto' }}>
                <div className="sec-title5 text-center mb-50 md-mb-35">
                    <span className="sub-title new-title pb-7">Expert People</span>
                    <h2 className="title title2 pb-5">Our Team Members</h2>
                </div>
                <div className="team-container">
                    <div className="team-item-wrap">
                        <div className="team-wrap">
                            <div className="image-inner">
                                <img src={ceo} alt="CEO" />
                            </div>
                        </div>
                        <div className="team-content text-center">
                            <h4 className="person-name">Suresh Ramasamy</h4>
                            <span className="designation">MD</span>
                        </div>
                    </div>
                    <div className="team-item-wrap">
                        <div className="team-wrap">
                            <div className="image-inner">
                                <img src={developer} alt="Developer" />
                            </div>
                        </div>
                        <div className="team-content text-center">
                            <h4 className="person-name">Mrs. Sathyapriya Ashok Kumar</h4>
                            <span className="designation">CEO & Founder</span>
                        </div>
                    </div>
                    <div className="team-item-wrap">
                        <div className="team-wrap">
                            <div className="image-inner">
                                <img src={marketer} alt="Web Developer" />
                            </div>
                        </div>
                        <div className="team-content text-center">
                            <h4 className="person-name">Mr. Vigneshwaran</h4>
                            <span className="designation">Web Developer</span>
                        </div>
                    </div>
                    <div className="team-item-wrap">
                        <div className="team-wrap">
                            <div className="image-inner">
                                <img src={marketer} alt="Web Developer" />
                            </div>
                        </div>
                        <div className="team-content text-center">
                            <h4 className="person-name">Miss. Sandhya</h4>
                            <span className="designation">Web Developer</span>
                        </div>
                    </div>
                    <div className="team-item-wrap">
                        <div className="team-wrap">
                            <div className="image-inner">
                                <img src={marketer} alt="Web Developer" />
                            </div>
                        </div>
                        <div className="team-content text-center">
                            <h4 className="person-name">Mr. Sugibalan</h4>
                            <span className="designation">Web Developer</span>
                        </div>
                    </div>
                    <div className="team-item-wrap">
                        <div className="team-wrap">
                            <div className="image-inner">
                                <img src={marketer} alt="Web Developer" />
                            </div>
                        </div>
                        <div className="team-content text-center">
                            <h4 className="person-name">Mr. Baskar</h4>
                            <span className="designation">Web Developer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
