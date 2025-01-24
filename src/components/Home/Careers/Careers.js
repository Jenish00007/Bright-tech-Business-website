import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Careers.css";
import careerImage from "../../../images/careers/career.jpg";

const Careers = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 200,
      easing: 'ease-out',
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="careers-container">
      <h1 data-aos="fade-up" className="careers-title">JOIN OUR TEAM</h1>
      
      <div className="careers-content">
      <div className="careers-image-section" data-aos="fade-up" data-aos-delay="400">
          <div className="careers-image-container">
            <img src={careerImage} alt="Join Our Team" className="careers-image" />
          </div>
          <p className="careers-description" data-aos="fade-up" data-aos-delay="600">
            IF YOU ARE A HARDWORKING, BRIGHT, ENTHUSIASTIC, RESULT ORIENTED AND
            ENERGETIC INDIVIDUAL SEEKING TO CONQUER HEIGHTS, JILABA IS THE RIGHT
            PLACE FOR YOU TO BUILD YOUR CAREER.
          </p>
        </div>
        <div className="careers-form-wrapper" data-aos="fade-up" data-aos-delay="200">
          <form className="careers-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile No. *</label>
              <input type="text" id="mobile" name="mobile" required  />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" required></textarea>
            </div>

            <div className="form-group file-upload">
              <label htmlFor="file">
                <span>Choose File</span>
              </label>
              <input type="file" id="file" name="file" accept=".pdf" />
              <p className="file-note">(Allows only PDF For File Upload)</p>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

       
      </div>
    </div>
  );
};

export default Careers;