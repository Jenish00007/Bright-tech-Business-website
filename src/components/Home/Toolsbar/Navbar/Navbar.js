import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../../../images/logo.jpg';

function Navbar({ scrollToSection }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setIsLoaded(true);

        // Handle scroll event to toggle the navbar state
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true); // When scrolled more than 100px, make the navbar sticky
            } else {
                setIsScrolled(false); // Reset to normal position when near the top
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`Navbar ${isLoaded ? 'slide-down' : ''} ${isScrolled ? 'scrolled' : ''}`}>
            <div className="row d-flex align-items-center" style={{ margin: 'auto' }}>
                <div className="col-md-4 toolsbar d-flex align-items-center">
                    <img src={logo} alt="logo" style={{ width: '60px', height: 'auto', marginRight: '10px' }} />
                    <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'white' }}>Brightech Software Solution</span>
                </div>
                <div className="col-md-7 navbar-list">
                    <ul className="d-flex justify-content-around">
                        <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
                        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
                        <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
                        <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Products</a></li>
                        <li><a href="#careers" onClick={(e) => { e.preventDefault(); scrollToSection('careers'); }}>Careers</a></li>
                        <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>Portfolio</a></li>
                        <li><a href="#team" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>Team</a></li>
                        <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
                        <li><a href="#blog" onClick={(e) => { e.preventDefault(); scrollToSection('blog'); }}>Blog</a></li>
                    </ul>
                </div>
                <div className="col-md-1 toolsbar">
                    <div className="expand-btn-inner dots">
                        <ul className="d-flex justify-content-around">
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
