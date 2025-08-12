import React, { useContext, useEffect, useRef } from 'react';

import Init from '../../../Init/Init';
import './AboutUs.scss';

let config = Init.config;
const FontAwesomeIcon = Init.FontAwesomeIcon;

const AboutUs = (props) => {
    return (
        <div id={`about-us`} className="about-us">
            {/* 
                1. Logo
                2. Content
            */}
            <div className="about-us-container">
                <div className="about-us-image">
                    <img src={ config.aboutUsImage } alt="" />
                </div>

                <div className="about-us-content">

                    <h2 className="about-us-content-title">
                        About Us
                    </h2>
                    <div className="about-us-content-desc">
                        <p>
                            Adigital is a software house that builds simple, practical, and affordable digital solutions. We focus on creating systems that make work easier, clearer, and more efficient—especially for those with limited resources or technical support. Every product we build is designed to remove complexity and keep things moving forward. We pursue innovation, elevation, and digital excellence.
                        </p>
                        <p>
                            We exist to support progress in a way that feels steady and human. Adigital is built on the idea of growing together—forming lasting partnerships, streamlining processes, and opening space for better decisions. Technology is our tool, but impact is our goal.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}



export default AboutUs;