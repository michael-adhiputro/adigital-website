import React, {Component, Fragment, createRef} from 'react';
import { Image, Col, Row, Form, Button } from 'react-bootstrap';
import Init from '../../../Init/Init';
import './Footer.scss';

import FormInput from '../../Utilities/FormInput/FormInput';

import ContactInfo from '../../../Data/Contact';

import useAnalyticsEventTracker from '../../../GoogleAnalytics/useAnalyticsEventTracker';

const { FontAwesomeIcon } = Init;
const GaTracker = ({
    action,
    label
}) => {
    const gaEventCategory = 'Footer Contact';

    const gaEventTracker = useAnalyticsEventTracker(gaEventCategory);

    gaEventTracker(action, label);
}

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footerInfo: ContactInfo()
        };

        this.config = Init.config;
    }

    trackGa(action, label) {
        GaTracker({
            action,
            label
        });
    }

    render() {
        let state = this.state;
        let config = this.config;
        let footerInfo = state.footerInfo;

        const { FontAwesomeIcon } = Init; 

        return (
            <>
                <footer id="footer" className={
                    "footer-container" 
                }>
                    <div className="footer-address">
                        <h3 className="footer-address-title">
                            PT Adhinova Digital Internasional
                        </h3>
                        <div className="footer-address-info">
                            <div className="info-title">
                                One Pacific Place 11, SCBD
                            </div>
                            <div className="info-address">
                                Jl. Jenderal Sudirman Kav. 52-53, RT005/RW03 
                                <br />
                                Senayan, Kebayoran Baru, DKI Jakarta, 12190, Indonesia
                            </div>
                        </div>
                        <div className="footer-address-copyright">
                            Copyright © 2025
                        </div>
                    </div>
                    {/* <div className="footer-menu">
                        <a href="#"> Home </a>
                        <a href="#"> About Us </a>
                        <a href="#"> Product </a>
                        <a href="#"> Contact Us </a>
                    </div> */}
                    <div className="footer-socmed">
                        <div className="footer-socmed-label">
                            Follow Our Social Media, Let's Collaborate!
                        </div>
                        <div className="footer-socmed-items">
                            <a href=""> <FontAwesomeIcon icon={['fab', 'whatsapp']} /> </a>
                            <a href=""> <FontAwesomeIcon icon={['fab', 'facebook']} /> </a>
                            <a href=""> <FontAwesomeIcon icon={['fab', 'instagram']} /> </a>
                            <a href=""> <FontAwesomeIcon icon={['fab', 'linkedin']} /> </a>
                            <a href=""> <FontAwesomeIcon icon={['fab', 'youtube']} /> </a>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;