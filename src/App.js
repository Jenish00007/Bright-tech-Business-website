import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Home/Toolsbar/Navbar/Navbar';
// import Toolsbar from './components/Home/Toolsbar/Toolsbar';
import Footer from './components/Home/Footer/Footer';
import PrivacyPolicy from './components/Home/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './components/Home/Termsconditions/Termsconditions';
import Home from './components/Home/Home'; // Import Home component
import './App.css';
import RefundPolicy from './components/Home/Refund Policy/RefundPolicy';
import CancellationPolicy from './components/Home/Cancellation Policy/CancellationPolicy';

function App() {
    return (
        <Router > 
            <div>
                {/* <Toolsbar /> */}
                {/* <Navbar /> */}
                
                <Routes>
                    {/* Home Page */}
                    <Route path="/" element={<Home />} />
                    {/* Terms and Conditions */}
                    <Route path="/terms-of-use" element={<TermsConditions />} />
                    {/* Privacy Policy */}
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    {/* Cancellation Policy */}
                    <Route path="/cancellation-policy" element={<CancellationPolicy/>} />
                    {/* Refund Policy */}
                    <Route path="/refund-policy" element={<RefundPolicy/>} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
