import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import blog1 from '../../../images/blog/style7/6.jpg';
import blog2 from '../../../images/blog/style7/2.jpg';
import blog3 from '../../../images/blog/style7/3.jpg';

function Blogs() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Ensure animations can happen multiple times
    });
  }, []);

  // Re-trigger animations on click
  const handleBlogClick = () => {
    AOS.refresh(); // Recalculate animations
  };

  return (
    <div id="rs-blog" className="rs-blog style4 pt-100 pb-100 md-pt-70 md-pb-70">
      <div className="container" style={{ width: '90%', margin: 'auto' }}>
        <div className="row y-middle d-flex">
          <div className="col-md-6 sm-mb-20">
            <div className="sec-title" data-aos="fade-up">
              <span className="sub-title primary right-line">LATEST NEWS</span>
              <h2 className="title mb-0">Read Latest Updates</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="btn-part text-right sm-text-left" data-aos="fade-up">
              <a className="readon2 submit-btn con-btn" href="/blog">View Updates</a>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-5 d-flex">
          <div className="col-md-4 blog-item" data-aos="fade-up">
            <div className="blog-wrap" onClick={handleBlogClick}>
              <div className="img-part">
                <a href="/blog/whale-raised"><img src={blog1} alt="Blog 1" /></a>
              </div>
              <div className="blog-content">
                <a className="categories" href="/blog/whale-raised">Digital Marketing</a>
                <h3 className="title">
                  <a href="/blog/whale-raised">Whale be raised, it must be in a month</a>
                </h3>
                <div className="blog-meta">
                  <div className="date">
                    <i className="fa fa-clock-o"></i> 18 Jan 2021
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 blog-item" data-aos="fade-up" data-aos-delay="200">
            <div className="blog-wrap" onClick={handleBlogClick}>
              <div className="img-part">
                <a href="/blog/career-tips-photographers"><img src={blog2} alt="Blog 2" /></a>
              </div>
              <div className="blog-content">
                <a className="categories" href="/blog/career-tips-photographers">Digital Marketing</a>
                <h3 className="title">
                  <a href="/blog/career-tips-photographers">Career Tips For Emerging Photographers</a>
                </h3>
                <div className="blog-meta">
                  <div className="date">
                    <i className="fa fa-clock-o"></i> 18 Jan 2021
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 blog-item" data-aos="fade-up" data-aos-delay="400">
            <div className="blog-wrap" onClick={handleBlogClick}>
              <div className="img-part">
                <a href="/blog/soundtrack-filma-lady"><img src={blog3} alt="Blog 3" /></a>
              </div>
              <div className="blog-content">
                <a className="categories" href="/blog/soundtrack-filma-lady">Digital Marketing</a>
                <h3 className="title">
                  <a href="/blog/soundtrack-filma-lady">Soundtrack Filma Lady Exclusive Music</a>
                </h3>
                <div className="blog-meta">
                  <div className="date">
                    <i className="fa fa-clock-o"></i> 20 Jan 2021
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

export default Blogs;
