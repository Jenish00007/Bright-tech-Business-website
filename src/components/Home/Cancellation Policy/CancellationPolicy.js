import React from 'react';
import './CancellationPolicy.css';
import Navbar from '../Toolsbar/Navbar/Navbar';

function CancellationPolicy() {
    return (
        <> <Navbar />
        <div className="cancellation-container">
           
            <div className="content-wrapper">
                <h4 className="cancellation-title">
                    CANCELLATION POLICY
                </h4>
            </div>
            <div className="cancellation-content">
                <div className="cancellation-section">
                    <p>
                        At Brightech Software Solutions, we understand that circumstances may change. This Cancellation Policy
                        outlines the terms and conditions for cancelling our services and subscriptions.
                    </p>

                    <section className="cancellation-block">
                        <h2>Subscription Cancellation</h2>
                        <ul>
                            <li>You may cancel your subscription at any time through your account dashboard.</li>
                            <li>Monthly subscriptions will remain active until the end of the current billing period.</li>
                            <li>Annual subscriptions may be eligible for partial refunds, subject to our refund policy.</li>
                        </ul>
                    </section>

                    <section className="cancellation-block">
                        <h2>Cancellation Process</h2>
                        <ul>
                            <li>Log into your account and navigate to subscription settings.</li>
                            <li>Select the "Cancel Subscription" option.</li>
                            <li>Complete the cancellation survey to help us improve our services.</li>
                            <li>Receive email confirmation of your cancellation request.</li>
                        </ul>
                    </section>

                    <section className="cancellation-block">
                        <h2>Project Cancellation</h2>
                        <p>
                            For custom development projects and ongoing services:
                        </p>
                        <ul>
                            <li>Projects cancelled before commencement are eligible for full refund.</li>
                            <li>Mid-project cancellations require 30 days notice.</li>
                            <li>Payment for completed work and resources allocated is non-refundable.</li>
                        </ul>
                    </section>

                    <section className="cancellation-block">
                        <h2>Notice Period</h2>
                        <p>
                            Different services may have different notice periods for cancellation:
                        </p>
                        <ul>
                            <li>Standard subscriptions: No notice required</li>
                            <li>Enterprise services: 30 days notice</li>
                            <li>Custom development: As per project contract</li>
                        </ul>
                    </section>

                    <section className="cancellation-block">
                        <h2>Data Retention</h2>
                        <p>
                            After cancellation, your data will be retained for 30 days before permanent deletion. You may
                            request an immediate data purge by contacting our support team.
                        </p>
                    </section>

                    <section className="cancellation-block">
                        <h2>Contact Us</h2>
                        <p>
                            For assistance with cancellations, please contact our support team at
                            <a href="mailto:support@brightechsolutions.com" className="cancellation-link"> support@brightechsolutions.com</a>.
                        </p>
                    </section>

                    <p className="contact-info">Thank you for choosing Brightech Software Solutions.</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default CancellationPolicy;