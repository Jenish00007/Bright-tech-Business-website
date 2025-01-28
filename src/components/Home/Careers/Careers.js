import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Careers.css";
import careerImage from "../../../images/careers/career1.jpg";

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
          <p className="careers-description" data-aos="fade-up" data-aos-delay="400">
            IF YOU ARE A HARDWORKING, BRIGHT, ENTHUSIASTIC, RESULT ORIENTED AND
            ENERGETIC INDIVIDUAL SEEKING TO CONQUER HEIGHTS, JILABA IS THE RIGHT
            PLACE FOR YOU TO BUILD YOUR CAREER.
          </p>
        </div>
        <div className="careers-form-wrapper" data-aos="fade-up" data-aos-delay="200">
          <form className="careers-form">
            <table className="form-table">
              <tbody>
                <tr className="form-group">
                  <td><label htmlFor="name">Name *</label></td>
                  <td><input type="text" id="name" name="name" required /></td>
                  <td><label htmlFor="mobile">Mobile No. *</label></td>
                  <td><input type="text" id="mobile" name="mobile" required /></td>
                </tr>

                <tr className="form-group">
                  <td><label htmlFor="email">Email *</label></td>
                  <td><input type="email" id="email" name="email" required /></td>
                  <td><label htmlFor="subject">Subject *</label></td>
                  <td><input type="text" id="subject" name="subject" required /></td>
                </tr>

                <tr className="form-group">
                  <td><label htmlFor="message">Message *</label></td>
                  <td colSpan="3"><textarea id="message" name="message" required></textarea></td>
                </tr>

                <tr className="form-group">
                  <td><label htmlFor="file">Choose File</label></td>
                  <td colSpan="3">
                    <input type="file" id="file" name="file" accept=".pdf" />
                    <p className="file-note">(Allows only PDF For File Upload)</p>
                  </td>
                </tr>

                <tr>
                  <td colSpan="4">
                    <button type="submit" className="submit-btn">Submit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Careers;