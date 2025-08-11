import React, {Component} from 'react';
import Init from '../../../Init/Init';
import './ComingSoon.scss';

class ComingSoon extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { imageLogo, imageLogoAlt, imageLogoText } = Init.config;
        
        return (
            <div className="coming-soon">
                <div className="coming-soon-wrapper">
                    <div className="first-part">
                        <h2>
                            Segera Hadir
                        </h2>
                    </div>
                    <div className="second-part">
                        <img src={imageLogoAlt} alt="" />
                    </div>
                    <div className="third-part">
                        <h2>
                            #SobatmuDalamHukum
                        </h2>
                        <h3>
                            Januari 2023
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComingSoon;