import React from 'react';

function Feature({ data }) {
  return (
    <div
      className="col-lg-3 col-md-6 col-sm-12"
      data-aos="fade-up"
      data-aos-delay={data.id * 100} // Adds delay for staggered animation
    >
      <div className="feature-box">
        <div className="image">
          <img src={data.icon} style={{ height: '80px' }} alt={data.title} />
        </div>
        <div className="description">
          <h4>{data.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default Feature;
