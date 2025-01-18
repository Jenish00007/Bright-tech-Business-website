import React from 'react';
import './Termsconditions.css';

function TermsConditions() {
    
    return (
        <div className="terms-container">
        
            <div className="content-wrapper" style={{ width: '90%', margin: 'auto' }}>
                <h4 className="text-white text-center" style={{ fontWeight: '300', paddingTop: '40px' }}>
                    TERMS AND CONDITIONS
                </h4>
            </div>
            <div className="terms-content row p-5">
                <div className="col-12 text-white">
                    <p>
                        Welcome to Brightech Software Solutions. By using our applications, you agree to the following terms and conditions. Please read them carefully.
                    </p>
                    <h2>1. Services Offered</h2>
                    <p>
                        Our applications include the E-Commerce Jewellery Web Application, Jewellery Saving Scheme Mobile Application, and Jewellery ERP Application. All features are subject to availability and may vary.
                    </p>
                    <h2>2. User Responsibilities</h2>
                    <ul>
                        <li>Provide accurate information during account creation and transactions.</li>
                        <li>Maintain confidentiality of your login credentials.</li>
                        <li>Use our applications responsibly and comply with applicable laws.</li>
                    </ul>
                    <h2>3. Intellectual Property</h2>
                    <p>
                        All content, including designs, trademarks, and code, is the property of Brightech Software Solutions. Unauthorized use is prohibited.
                    </p>
                    <h2>4. Limitations of Liability</h2>
                    <p>
                        We are not liable for any indirect, incidental, or consequential damages arising from the use of our applications.
                    </p>
                    <h2>5. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or application updates.
                    </p>
                    <p>
                        By using our services, you acknowledge and agree to abide by these terms. For questions, contact us at
                        <a href="mailto:support@brightechsolutions.com" className="terms-link"> support@brightechsolutions.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TermsConditions;
