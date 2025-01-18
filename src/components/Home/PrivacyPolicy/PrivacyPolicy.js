import React from 'react';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
    return (
        <div className="privacy-policy-container">
            <div className="content-wrapper" style={{ width: '90%', margin: 'auto' }}>
                <h4 className="text-white text-center" style={{ fontWeight: '300', paddingTop: '40px' }}>
                    PRIVACY POLICY
                </h4>
            </div>
            <div className="privacy-content row p-5">
                <div className="col-12 text-white">
                    <p>
                        At Brightech Software Solutions, we value your trust and are committed to protecting your privacy.
                        This Privacy Policy outlines how we collect, use, and safeguard your personal information when you
                        use our web and mobile applications.
                    </p>
                    <h2>Information We Collect</h2>
                    <ul>
                        <li>Personal information, such as your name, email address, phone number, and billing information.</li>
                        <li>Usage data, such as your interactions with our applications, pages visited, and features used.</li>
                        <li>Device and technical information, such as IP address, browser type, and operating system.</li>
                    </ul>

                    <h2>How We Use Your Information</h2>
                    <ul>
                        <li>To provide and improve our applications and services.</li>
                        <li>To process transactions and deliver personalized experiences.</li>
                        <li>To communicate updates, promotions, and support.</li>
                        <li>To ensure the security and functionality of our applications.</li>
                    </ul>

                    <h2>Sharing Your Information</h2>
                    <p>
                        We do not sell or share your personal information with third parties, except as necessary to
                        provide services, comply with legal obligations, or protect our rights.
                    </p>

                    <h2>Data Security</h2>
                    <p>
                        We implement robust security measures to protect your data against unauthorized access, alteration,
                        and disclosure. However, no method of transmission over the internet is entirely secure.
                    </p>

                    <h2>Your Rights</h2>
                    <p>
                        You have the right to access, update, and delete your personal information. Contact us at
                        <a href="mailto:support@brightechsolutions.com"> support@brightechsolutions.com</a>.
                    </p>

                    <h2>Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. Any changes will be reflected on this page.
                    </p>

                    <p>Thank you for choosing Brightech Software Solutions.</p>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
