import React from 'react';
import './RefundPolicy.css';
import Navbar from '../Toolsbar/Navbar/Navbar';

function RefundPolicy() {
    return (
        <> <Navbar />
        <div className="refund-container">
           
            <div className="content-wrapper">
                <h4 className="refund-title">
                    REFUND POLICY
                </h4>
            </div>
            <div className="refund-content">
                <div className="refund-section">
                    <p>
                        At Brightech Software Solutions, we strive to ensure complete customer satisfaction with our products
                        and services. This Refund Policy outlines the terms and conditions for refunds on our web and mobile
                        applications.
                    </p>

                    <section className="refund-block">
                        <h2>Eligibility for Refunds</h2>
                        <ul>
                            <li>Refund requests must be submitted within 30 days of the original purchase date.</li>
                            <li>The product or service must not have been extensively used or modified.</li>
                            <li>Proof of purchase is required for all refund requests.</li>
                        </ul>
                    </section>

                    <section className="refund-block">
                        <h2>Refund Process</h2>
                        <ul>
                            <li>Submit your refund request through our customer support portal or via email.</li>
                            <li>Include your order number and detailed reason for the refund request.</li>
                            <li>Our team will review your request within 2-3 business days.</li>
                            <li>Approved refunds will be processed to the original payment method.</li>
                        </ul>
                    </section>

                    <section className="refund-block">
                        <h2>Non-Refundable Items</h2>
                        <p>
                            The following items are non-refundable:
                        </p>
                        <ul>
                            <li>Custom development services that have been delivered</li>
                            <li>Software licenses that have been activated</li>
                            <li>Digital products that have been downloaded</li>
                        </ul>
                    </section>

                    <section className="refund-block">
                        <h2>Processing Time</h2>
                        <p>
                            Once approved, refunds typically take 5-10 business days to process, depending on your payment
                            provider and banking institution.
                        </p>
                    </section>

                    <section className="refund-block">
                        <h2>Cancellation Policy</h2>
                        <p>
                            For subscription-based services, you may cancel at any time. Refunds for unused portions of the
                            service will be processed on a pro-rata basis.
                        </p>
                    </section>

                    <section className="refund-block">
                        <h2>Contact Us</h2>
                        <p>
                            For any questions about our refund policy, please contact our support team at
                            <a href="mailto:support@brightechsolutions.com" className="refund-link"> support@brightechsolutions.com</a>.
                        </p>
                    </section>

                    <p className="contact-info">Thank you for choosing Brightech Software Solutions.</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default RefundPolicy;