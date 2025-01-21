import React, { useRef } from 'react';
import Navbar from './Toolsbar/Navbar/Navbar';
// import Toolsbar from './Toolsbar/Toolsbar';
import './Home.css';
import Slider from './Slider/Slider';
import Features from './Features/Features';
import About from './About/About';
import Services from './Services/Services';
// import SkillSet from './SkillSet/SkillSet';  // Ensure this import is kept
import Team from './Team/Team';
import Contact from './Contact/Contact';
// import Footer from './Footer/Footer';
import Blogs from './Blogs/Blogs';
import ProjectSummary from './ProjectSummary/ProjectSummary';
import Projects from './Projects/Projects';
// import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
// import TermsConditions from './Termsconditions/Termsconditions';
import Careers from './Careers/Careers';

function Home() {
    // Create section refs
    const refs = {
        home: useRef(null),
        about: useRef(null),
        services: useRef(null),
        features: useRef(null),
        careers: useRef(null),
        portfolio: useRef(null),
        team: useRef(null),
        blog: useRef(null),
        contact: useRef(null),
        
    };

    // Scroll to the specified section
    const scrollToSection = (section) => {
        if (refs[section]?.current) {
            refs[section].current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div className="nav-header">
                {/* <Toolsbar /> */}
                <Navbar scrollToSection={scrollToSection} />
                <Slider />
            </div>
            <div ref={refs.home}>
                <Features />
            </div>
            <div ref={refs.about}>
                <About />
            </div>
            <div ref={refs.services}>
                <Services />
            </div>
            <div ref={refs.features}>
                <Features />
            </div>
            <div ref={refs.careers}>
                <Careers />
            </div>
            <div ref={refs.portfolio}>
                <Projects />
            </div>
            <div>
                <ProjectSummary />
            </div>
            <div ref={refs.team}>
                <Team />
            </div>
            <div ref={refs.contact}>
                <Contact />
            </div>
            <div>
                {/* <SkillSet />  Add this section here if you want it to appear */}
            </div>
            <div ref={refs.blog}>
                <Blogs />
            </div>
            {/* <PrivacyPolicy/>
            <TermsConditions/> */}
            {/* <Footer /> */}
        </div>
    );
}

export default Home;
