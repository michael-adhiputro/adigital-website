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
                    <div className="footer-text">
                        Dapatkan info dan update terbaru di media sosial kami!
                    </div>
                    <div className="footer-socmed">
                        <img src={ config.instagramIcon } alt="" /> <a href={`${ footerInfo.socmed[1].link }`} className="footer-socmed-link"> { footerInfo.socmed[1].name } </a>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;