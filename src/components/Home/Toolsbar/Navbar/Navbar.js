import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../../../images/logo.jpg';

function Navbar({ scrollToSection }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setIsLoaded(true);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (section) => {
        scrollToSection(section);
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Services' },
        { id: 'features', label: 'Products' },
        { id: 'careers', label: 'Careers' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'team', label: 'Team' },
        { id: 'contact', label: 'Contact' },
        { id: 'blog', label: 'Blog' }
    ];

    const socialLinks = [
        { url: 'https://facebook.com', icon: 'fa-facebook' },
        { url: 'https://twitter.com', icon: 'fa-twitter' },
        { url: 'https://google.com', icon: 'fa-google' },
        { url: 'https://instagram.com', icon: 'fa-instagram' },
        { url: 'https://youtube.com', icon: 'fa-youtube-play' },
        { url: 'https://wa.me/123456789', icon: 'fa-whatsapp' }
    ];

    return (
        <>
            {/* <div className="toolbar-area">
                <div className="inner-tools-area">
                    <div className="row">
                        <div className="col-md-2 toolsbar">
                            <ul className="text-left">
                            </ul>
                        </div>
                        <div className="col-md-8 toolsbar toolbar-center">
                            <ul>
                                <li>
                                    <i className="fa fa-phone"></i>
                                    <a href="tel:+919688192922">+91 9688192922</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2 toolsbar">
                            <ul className="social-links">
                                {socialLinks.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                                            <i className={`fa ${link.icon}`}></i>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className={`Navbar ${isLoaded ? 'slide-down' : ''} ${isScrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    <div className="navbar-brand">
                        <img src={logo} alt="logo" className="navbar-logo" />
                        <span className="company-name">Brightech Software Solution</span>
                    </div>

                    <div className="navbar-menu">
                        <button className="burger-menu" onClick={toggleMobileMenu}>
                            <i className="fa fa-bars"></i>
                        </button>

                        <nav className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.id);
                                    }}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;