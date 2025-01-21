import React, { useEffect } from 'react';
import './Team.css';
import ceo from '../../../images/team/seo/1.jpg';
import developer from '../../../images/team/seo/2.jpg';
import marketer from '../../../images/team/seo/3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const teamMembers = [
    {
        id: 1,
        name: 'Suresh Ramasamy',
        role: 'MD',
        image: ceo,
    },
    {
        id: 2,
        name: 'Mrs. Sathyapriya Ashok Kumar',
        role: 'CEO & Founder',
        image: developer,
    },
    {
        id: 3,
        name: 'Mr. Vigneshwaran',
        role: 'Web Developer',
        image: marketer,
    },
    {
        id: 4,
        name: 'Miss. Sandhya',
        role: 'Web Developer',
        image: marketer,
    },
    {
        id: 5,
        name: 'Mr. Sugibalan',
        role: 'Web Developer',
        image: marketer,
    },
    {
        id: 6,
        name: 'Mr. Baskar',
        role: 'Web Developer',
        image: marketer,
    }
];

function Team() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div id="rs-team" className="rs-team">
            <div className="team-section">
                <div className="section-header">
                    <span className="section-subtitle">Expert People</span>
                    <h2 className="section-title">Our Team Members</h2>
                </div>
                
                <div className="team-scroll-container">
                    <div className="team-container">
                        {/* Duplicate the team members for seamless scrolling */}
                        {[...teamMembers, ...teamMembers].map((member, index) => (
                            <div className="team-item-wrap" key={`${member.id}-${index}`}>
                                <div className="team-wrap">
                                    <div className="image-inner">
                                        <img src={member.image} alt={member.name} />
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h4 className="person-name">{member.name}</h4>
                                    <span className="designation">{member.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;