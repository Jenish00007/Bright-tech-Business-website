import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Ensure animations can happen multiple times
    });
  }, []);

  const handleClick = () => {
    AOS.refresh(); // Recalculate animations
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); // Debug: Verify formData values
    setStatusMessage('Sending...');

    emailjs
      .send(
        'service_4kxds77', // Replace with your EmailJS service ID
        'template_g280fnh', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        'L8zY2GM-MGocscUbJ' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log('Success:', result.text);
          setStatusMessage('Message sent successfully!');
        },
        (error) => {
          console.error('Error:', error.text);
          setStatusMessage('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div
      id="rs-contact"
      className="rs-contact style5 modify1 gray-bg5"
      onClick={handleClick} // Trigger AOS refresh on click
    >
      <div className="" style={{ width: '90%', margin: 'auto' }}>
        <div className="contact-us" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="row margin-0">
            <div className="col-lg-8" style={{ marginRight: '-30px' }} data-aos="fade-up">
              <div className="contact-widget">
                <div className="sec-title5 pt-5 pb-5">
                  <span className="sub-title new-title">Contact Us</span>
                  <h2 className="title title2">Get In Touch</h2>
                </div>
                {statusMessage && <p>{statusMessage}</p>}
                <form id="contact-form" onSubmit={handleSubmit}>
                  <fieldset>
                    <div className="row">
                      <div className="col-lg-6 mb-3 col-md-6 col-sm-6">
                        <input
                          className="from-control"
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-lg-6 mb-3 col-md-6 col-sm-6">
                        <input
                          className="from-control"
                          type="email"
                          name="email"
                          placeholder="E-Mail"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-lg-6 mb-3 col-md-6 col-sm-6">
                        <input
                          className="from-control"
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-lg-6 mb-3 col-md-6 col-sm-6">
                        <input
                          className="from-control"
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-lg-12 mb-3">
                        <textarea
                          className="from-control"
                          name="message"
                          placeholder="Your message here"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="btn-part">
                      <div className="form-group">
                        <input
                          className="readon2 submit-btn con-btn"
                          type="submit"
                          value="Submit Now"
                        />
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
            <div className="col-lg-4 padding-0" data-aos="fade-up" data-aos-delay="200">
              <div className="contact-box">
                <div className="sec-title2 mb-4">
                  <h2 className="title small white-color">Contact Info</h2>
                </div>
                <div className="address-box mb-4">
                  <div className="box-icon">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div className="address-text">
                    <span className="label">VISIT US</span>
                    <p className="desc">
                      Plat No:39/40, Thiruvalluvar Nagar First Street, Moondram Kattalai,
                      <br />
                      Sriperumbudur(TK), Kanchipuram(DT),
                      <br />
                      Chennai-600069.
                    </p>
                  </div>
                </div>
                <div className="address-box mb-4">
                  <div className="box-icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="address-text">
                    <span className="label">CALL US</span>
                    <p className="desc">
                      <a href="tel:+1235558888">9688192922</a>
                    </p>
                  </div>
                </div>
                <div className="address-box mb-4">
                  <div className="box-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="address-text">
                    <span className="label">MAIL US</span>
                    <p className="desc">
                      <a href="mailto:brightechsoftwares@gmail.com">brightechsoftwares@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
