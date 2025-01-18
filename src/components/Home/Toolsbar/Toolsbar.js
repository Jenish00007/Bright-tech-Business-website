import React from 'react';
import './Toolsbar.css';

function Toolsbar() {
    return (
        <div className="toolbar-area" style={{ borderBottom: '1px solid grey', color: 'white' }}>
            <div className="row inner-tools-area">
                <div className="col-md-2 toolsbar">
                    <ul className="text-left" style={{ textAlign: 'center' }}>
                        {/* Uncomment and update the email if needed */}
                        {/* <li><a href="mailto:info@yourwebsite.com">support@rstheme.com</a></li> */}
                    </ul>
                </div>
                <div className="col-md-8 toolsbar" style={{ borderLeft: '1px solid grey', borderRight: '1px solid grey' }}>
                    <ul className="d-flex justify-content-between">
                        <li><i className="fa fa-phone"></i><a href="tel:+123456789">+91 9688192922</a></li>
                        {/* Uncomment and update if needed */}
                        {/* <li className="opening"> <i className="fa fa-clock-o"></i> Mon - Fri: 9:00 am - 06.00pm / Closed on Weekends</li> */}
                    </ul>
                </div>
                <div className="col-md-2 toolsbar">
                    <ul className="d-flex justify-content-around">
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
                        {/* <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-pinterest-p"></i></a></li> */}
                        {/* <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li> */}
                        <li><a href="https://google.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-google"></i></a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play"></i></a></li>
                        <li><a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Toolsbar;
