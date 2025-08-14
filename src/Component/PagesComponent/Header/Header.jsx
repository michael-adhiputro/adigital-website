import React, { useContext, useEffect, useRef } from 'react';

import Init from '../../../Init/Init';
import './Header.scss';
import PrimaryButton from '../../Utilities/PrimaryButton/PrimaryButton';

let config = Init.config;
const FontAwesomeIcon = Init.FontAwesomeIcon;

const Header = (props) => {
    return (
        <div id={`home`} className="header">
            {/* 
                1. Content
                    - Title
                    - Tagline
                    - Button
                2. Image
            */}
            <div id="header-ornament-1" className="header-ornament">
                <img src={ config.headerAssetOne } alt="" />
            </div>
            <div id="header-ornament-2" className="header-ornament">
                <img src={ config.headerAssetTwo } alt="" />
            </div>

            <div className="header-content">
                <div className="header-content-title">
                    <h1 className="title">
                        Your Digital Business Companion
                    </h1>
                    <p className="tagline">
                        Think. Build. Protect.
                    </p>
                </div>

                <div className="header-button-container">
                    <PrimaryButton 
                        customClass="header-button"
                        onClick={ () => {} }
                        text={ "Let's Collaborate" }
                        customIcon={<FontAwesomeIcon className="header-button-icon" icon={['fas', 'arrow-right']} />}
                        iconPosition="right"
                    />
                </div>
            </div>

            <div className="header-image">
                <img src={ config.headerImage } alt="" />
            </div>
        </div>
    );
}



export default Header;