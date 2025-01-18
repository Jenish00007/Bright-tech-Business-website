import React, { useEffect } from 'react';
import './Services.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import icon1 from '../../../images/services/icon/service-shape.png';
import icon2 from '../../../images/services/icon/blue-flexible-cms.png';
import icon3 from '../../../images/services/icon/blue-page-speed.png';
import icon4 from '../../../images/services/icon/blue-ecommerce.png';
import Service from './Service';

const servicesData = [
    {
        id: 1,
        name: 'WEB DESIGN',
        description: 'Brightech Software Solutions offers a sleek E-Commerce Jewellery Web App with advanced features like real-time inventory, secure purchases, and multi-device compatibility for a seamless shopping experience.',
        icon: icon1
    },
    {
        id: 2,
        name: 'WEB DEVELOPMENT',
        description: 'Brightech Software Solutions offers a sleek E-Commerce Jewellery Web App with advanced features like real-time inventory, secure purchases, and multi-device compatibility for a seamless shopping experience.',
        icon: icon2
    },
    {
        id: 3,
        name: 'APP DESIGN',
        description: 'Brightech Software Solutions presents the Jewellery Saving Scheme App with two plans: Dream Gold for regular savings with bonuses and Digi Gold for savings in gold weight at locked rates.',
        icon: icon3
    },
    {
        id: 4,
        name: 'APP DEVELOPMENT',
        description: 'Brightech Software Solutions presents the Jewellery Saving Scheme App with two plans: Dream Gold for regular savings with bonuses and Digi Gold for savings in gold weight at locked rates.',
        icon: icon4
    }
];

function Services() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="service-container">
            <div className="text-center pt-5 w-50 m-auto" data-aos="fade-up">
                <h4 style={{ fontWeight: '300', marginBottom: '10px' }}>SERVICES THAT WE PROVIDE DEDICATEDLY</h4>
                <h2 style={{ fontSize: '' }}>OUR SERVICES</h2>
            </div>

            <div className="row service">
                {servicesData.map(data => (
                    <Service data={data} key={data.id}></Service>
                ))}
            </div>
        </div>
    );
}

export default Services;
