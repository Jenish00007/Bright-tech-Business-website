import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Feature from './Feature';
import './Features.css';
import icon2 from '../../../images/whychooseus/icon/ecommerce.png';
import icon1 from '../../../images/whychooseus/icon/flexible-cms.png';
import icon3 from '../../../images/whychooseus/icon/page-speed.png';
import icon4 from '../../../images/whychooseus/icon/responsive-design.png';

const featureData = [
  { id: 1, icon: icon4, title: 'Jewellery Saving Scheme' },
  { id: 2, icon: icon3, title: 'Jewellery Catalog' },
  { id: 3, icon: icon2, title: 'Retail Operation' },
  { id: 4, icon: icon1, title: 'Android Development' },
  { id: 5, icon: icon1, title: 'iOS Development' },
  { id: 6, icon: icon1, title: 'Scheme Website Development' },
  { id: 7, icon: icon1, title: 'Billing Software' },
];

function Features() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second animation duration
  }, []);

  return (
    <div className="features-container m-auto">
      <div className="text-center pt-5" data-aos="fade-up">
        {/* <h4 style={{ fontWeight: '300', marginBottom: '10px' }}>WHY CHOOSE US</h4> */}
        <h2 style={{ fontSize: '45px' }}>OUR PRODUCTS</h2>
      </div>
      <div className="row m-auto">
        {featureData.map((data) => (
          <Feature data={data} key={data.id} />
        ))}
      </div>
      <div className="text-center mt-5" data-aos="fade-up">
        {/* <p style={{ fontWeight: '600' }}>
          Increase your business success with technology.{' '}
          <button className="link-btn">Let’s get started</button>
        </p> */}
      </div>
    </div>
  );
}

export default Features;
