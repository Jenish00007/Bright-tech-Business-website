import React from 'react';
import './Slider.css';
import notebook from '../../../images/slider/solution/1st.png';
import workstation from '../../../images/slider/solution/2nd.png';
import Typewriter from "./typewriter";
import { ReactTyped } from "react-typed";


function Slider() {
    return (
        <div className='slider-container'>
            <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="1800">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner row">
                    <div className="carousel-item active">
                        <div className="row slide-part">
                            <div className="col-md-6 col-sm-12">
                                <div className="slide-des">
                                    <h4 className="text-dark fade-in" style={{ fontWeight: '400' }}>MANAGE IT, SOFTWARE</h4>
                                    <h2 className="text-dark scale-up letter">{" "} <ReactTyped strings={["BRIGHTECH SOFTWARE SOLUTION"]} typeSpeed={200} loop /></h2>
                                    <h3 className="text-dark bounce-in">DEVELOPMENT COMPANY</h3>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={notebook} className="slide-image h-50" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row slide-part">
                            <div className="col-md-6 col-sm-12">
                                <div className="slide-des">
                                    <h4 className="text-dark fade-in" style={{ fontWeight: '400' }}>IT SOFTWARE & DESIGN</h4>
                                    <h2 className="text-dark scale-up">{" "} <ReactTyped strings={["BRIGHTECH SOFTWARE SOLUTION"]} typeSpeed={100} loop /></h2>
                                    <h3 className="text-dark bounce-in">DEVELOPMENT COMPANY</h3>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={workstation} className="slide-image h-50" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider;
