import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./Careers.css";
import careerImage from "../../../images/careers/career.jpg"; // Update this path based on your project structure

const Careers = () => {
  useEffect(() => {
    // Initialize AOS with continuous scroll animations
    AOS.init({
      duration: 1000,  // Duration of animation
      once: false,     // Ensure the animation triggers every time the element enters the viewport
      offset: 200,     // Offset for the trigger (so animations can be triggered earlier)
      easing: 'ease-out', // Ease effect for smooth transitions
    });

    // Manually refresh AOS on scroll to trigger animations each time the element comes into view
    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="careers-container">
      <h1 data-aos="fade-up" className="careers-title">JOIN OUR TEAM</h1>
      <div className="careers-content">
        <form data-aos="fade-up" data-aos-delay="200" className="careers-form">
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="mobile">Mobile No. *</label>
          <input type="text" id="mobile" name="mobile" required />

          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject *</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" required></textarea>

          <label htmlFor="file">
            <span>Choose File</span>
          </label>
          <input type="file" id="file" name="file" accept=".pdf" />
          <p className="file-note">(Allows only PDF For File Upload)</p>

          <button type="submit" className="submit-btn">Submit</button>
        </form>

        <div data-aos="fade-up" data-aos-delay="400" className="careers-image-container">
          <img src={careerImage} alt="Join Our Team" className="careers-image" />
          <p data-aos="fade-up" data-aos-delay="600" className="careers-description">
            IF YOU ARE A HARDWORKING, BRIGHT, ENTHUSIASTIC, RESULT ORIENTED AND
            ENERGETIC INDIVIDUAL SEEKING TO CONQUER HEIGHTS, JILABA IS THE RIGHT
            PLACE FOR YOU TO BUILD YOUR CAREER.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;
