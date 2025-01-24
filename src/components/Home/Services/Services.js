import React, { useEffect } from 'react';
import './Services.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import icon1 from '../../../images/services/icon/service-shape.png';
import icon2 from '../../../images/services/icon/blue-flexible-cms.png';
import icon3 from '../../../images/services/icon/blue-page-speed.png';
import icon4 from '../../../images/services/icon/blue-ecommerce.png';

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
        description: 'Our team specializes in creating custom mobile and web applications that are scalable, user-friendly, and designed to meet the unique needs of your business.',
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
            <div className="service-header" data-aos="fade-up">
                <h4 className="service-subtitle">SERVICES THAT WE PROVIDE DEDICATEDLY</h4>
                <h2 className="service-title">OUR SERVICES</h2>
            </div>

            <div className="service-grid">
                {servicesData.map((data) => (
                    <div className="service-item" data-aos="fade-up" key={data.id}>
                        <div className="service-box">
                            <div className="icon-part">
                                <img src={data.icon} alt={data.name} />
                            </div>
                            <div className="details-part">
                                <h4 className="service-name">{data.name}</h4>
                                <p className="service-description">{data.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;