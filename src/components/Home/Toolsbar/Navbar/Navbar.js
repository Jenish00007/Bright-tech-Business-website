import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../../../images/logo.jpg';
import { ReactTyped } from "react-typed";
function Navbar({ scrollToSection = (section) => console.log(`Fallback scroll to: ${section}`) }) {
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
        setIsMobileMenuOpen((prev) => !prev);
    };

    const handleNavClick = (section) => {
        if (scrollToSection) {
            scrollToSection(section);
        } else {
            const element = document.getElementById(section);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop,
                    behavior: 'smooth',
                });
            } else {
                console.warn(`Element with ID '${section}' not found.`);
            }
        }
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
        { id: 'blog', label: 'Blog' },
    ];

    const socialLinks = [
        { url: 'https://facebook.com', icon: 'fa-facebook' },
        { url: 'https://twitter.com', icon: 'fa-twitter' },
        { url: 'https://google.com', icon: 'fa-google' },
        { url: 'https://instagram.com', icon: 'fa-instagram' },
        { url: 'https://youtube.com', icon: 'fa-youtube-play' },
        { url: 'https://wa.me/123456789', icon: 'fa-whatsapp' },
    ];

    return (
        <div className={`Navbar ${isLoaded ? 'slide-down' : ''} ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-brand">
                    <img src={logo} alt="logo" className="navbar-logo" />
                    <span className="company-name">{" "} <ReactTyped strings={["BRIGHTECH SOFTWARE SOLUTION"]} typeSpeed={100} loop /></span>
                </div>

                <div className="navbar-menu">
                    <button
                        className="burger-menu"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle navigation menu"
                    >
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
                                aria-label={`Navigate to ${item.label}`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* <div className="navbar-social-links">
                    <ul>
                        {socialLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit our ${link.icon.replace('fa-', '')} page`}
                                >
                                    <i className={`fa ${link.icon}`}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div> */}
            </div>
        </div>
    );
}

export default Navbar;
