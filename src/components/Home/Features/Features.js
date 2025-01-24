import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Feature from './Feature';
import './Features.css';
import icon2 from '../../../images/whychooseus/icon/warehouse.svg';
import icon1 from '../../../images/whychooseus/icon/chart.svg';
import icon3 from '../../../images/whychooseus/icon/store-solid.svg';
import icon4 from '../../../images/whychooseus/icon/android-brands-solid.svg';
import icon5 from '../../../images/whychooseus/icon/app-store-ios-brands-solid.svg';
import icon6 from '../../../images/whychooseus/icon/webflow-brands-solid.svg';
import icon7 from '../../../images/whychooseus/icon/file-invoice-dollar-solid.svg';
import icon8 from '../../../images/whychooseus/icon/person-booth-solid.svg';
import icon9 from '../../../images/whychooseus/icon/code-branch-solid.svg';
import icon10 from '../../../images/whychooseus/icon/accusoft-brands-solid.svg';
import icon11 from '../../../images/whychooseus/icon/coins-solid.svg';
import icon12 from '../../../images/whychooseus/icon/money-bill-transfer-solid.svg';
const featureData = [
  { id: 1, icon: icon2, title: 'Inventary Management' },
  { id: 2, icon: icon1, title: 'Sales Management' },
  { id: 3, icon: icon3, title: 'Purchase Management' },
  { id: 4, icon: icon4, title: 'Android Development' },
  { id: 5, icon: icon5, title: 'iOS Development' },
  { id: 6, icon: icon6, title: 'Scheme Website Development' },
  { id: 8, icon: icon7, title: 'Billing Software' },
  { id: 9, icon: icon8, title: 'Customer Relationship Management' },
  { id: 10, icon: icon9, title: 'Branch Management' },
  { id: 11, icon: icon10, title: 'Account Management' },
  { id: 12, icon: icon11, title: 'Gold Scheme Mangement' },
  { id: 13, icon: icon12, title: 'Fastest Billing' },
  
  
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
