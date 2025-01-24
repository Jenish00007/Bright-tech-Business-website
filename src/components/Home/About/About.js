import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import about1 from '../../../images/about/solutions/1.jpg';
import about2 from '../../../images/about/solutions/2.png';
import about3 from '../../../images/about/solutions/3.png';

function About({ aboutRef }) {
  useEffect(() => {
    // Initialize AOS animation on component mount
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: false,    // Ensure animations can happen multiple times
    });
  }, []);

  // Re-trigger animations on click
  const handleClick = () => {
    AOS.refresh(); // Recalculate animations
  };

  return (
    <div
      id="rs-about"
      className="rs-about style10 gray-bg5 p-5"
      ref={aboutRef}
      onClick={handleClick} // Attach the click handler to the main About section
    >
      <div style={{ width: '90%', margin: 'auto' }}>
        <div className="row">
        <div className="col-lg-6 md-pl-70 md-pl-15" data-aos="fade-up">
  <div className="sec-title4 mb-30">
    <span className="sub-title new pb-10">Our Services</span>
    <h2 className="title pb-20">
      What We Are Doing
    </h2>
    <p className="margin-0">
      We specialize in a wide range of IT solutions, from mobile app development to website creation, and innovative software for billing and Jewelleryschemes.
    </p>
  </div>
  <div id="servicesAccordion" className="accordion">
    <div className="card" onClick={handleClick}>
      <div className="card-header">
        <a className="card-link" data-toggle="collapse" href="#collapseThree">
          Mobile App Development (iOS & Android)
        </a>
      </div>
      <div id="collapseThree" className="collapse show" data-parent="#servicesAccordion">
        <div className="card-body">
          Our team builds custom mobile applications for both iOS and Android platforms. We deliver user-friendly, efficient, and performance-optimized apps to meet your business needs.
        </div>
      </div>
    </div>
    <div className="card" onClick={handleClick}>
      <div className="card-header">
        <a className="collapsed card-link" data-toggle="collapse" href="#collapseFour">
          Website Development
        </a>
      </div>
      <div id="collapseFour" className="collapse" data-parent="#servicesAccordion">
        <div className="card-body">
          From responsive websites to e-commerce platforms, we create aesthetically pleasing and functional websites that help businesses grow and engage with customers.
        </div>
      </div>
    </div>
    <div className="card" onClick={handleClick}>
      <div className="card-header">
        <a className="collapsed card-link" data-toggle="collapse" href="#collapseFive">
        ERP billing software
        </a>
      </div>
      <div id="collapseFive" className="collapse" data-parent="#servicesAccordion">
        <div className="card-body">
          Our billing software solutions provide seamless, accurate, and automated billing for various industries, ensuring efficiency and ease of use for your business operations.
        </div>
      </div>
    </div>
    <div className="card" onClick={handleClick}>
      <div className="card-header">
        <a className="collapsed card-link" data-toggle="collapse" href="#collapseSix">
          JewellerySchemes
        </a>
      </div>
      <div id="collapseSix" className="collapse" data-parent="#servicesAccordion">
        <div className="card-body">
          We offer tailor-made Jewelleryscheme solutions, including membership programs, loyalty rewards, and custom pricing for your customers, enhancing their shopping experience.
        </div>
      </div>
    </div>
  </div>
</div>


          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="about-content">
              <div className="images-part" onClick={handleClick}>
                <img src={about1} alt="Images" />
              </div>
              <div className="rs-animations">
                <div className="spinner dot" onClick={handleClick}>
                  <img className="scale" src={about2} alt="Images" />
                </div>
                <div className="spinner ball" onClick={handleClick}>
                  <img className="dance2" src={about3} alt="Images" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
