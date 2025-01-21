import React, { useEffect } from 'react';
import './ProjectSummary.css';
import AOS from 'aos';
import 'aos/dist/aos.css';  // import the AOS styles

function ProjectSummary() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Initialize AOS with optional settings
    }, []);

    return (
        <div className="projectSummary-container">
            <div className="" style={{ width: '90%', margin: 'auto' }}>
                <h4
                    className="text-white text-center"
                    style={{ fontWeight: '300', paddingTop: '40px' }}
                    data-aos="fade-up"
                >
                    SOME FUN FACTS ABOUT OUR AGENCY?
                </h4>
            </div>
            <div className="row p-5">
                <div className="col-md-3 text-center" data-aos="fade-up">
                    <h2 className="text-white">4</h2>
                    <h4 className="text-white" style={{ fontWeight: '400' }}>
                        YEAR OF ACTION
                    </h4>
                </div>
                <div className="col-md-3 text-center" data-aos="fade-up">
                    <h2 className="text-white">99%</h2>
                    <h4 className="text-white" style={{ fontWeight: '400' }}>
                        POSITIVE FEEDBACK
                    </h4>
                </div>

                <div className="col-md-3 text-center" data-aos="fade-up">
                    <h2 className="text-white">30+</h2>
                    <h4 className="text-white" style={{ fontWeight: '400' }}>
                        PROJECT COMPLETE
                    </h4>
                </div>
                <div className="col-md-3 text-center" data-aos="fade-up">
                    <h2 className="text-white">7+</h2> 
                    <h4 className="text-white" style={{ fontWeight: '400' }}>
                        TEAM MEMBERS
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default ProjectSummary;
