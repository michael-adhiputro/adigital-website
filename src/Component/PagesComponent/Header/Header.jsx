import React, { useContext, useEffect, useRef } from 'react';
import "react-multi-carousel/lib/styles.css";

import Init from '../../../Init/Init';
import './Header.scss';

let config = Init.config;
const FontAwesomeIcon = Init.FontAwesomeIcon;

const Header = (props) => {
    const taglines = [
        "Trading Tanpa Modal? Bisa Banget!",
        "Trading Gak Harus Ribet!",
        "Selamat Tinggal Aplikasi Kuno!",
        "Aplikasi Trading Rasa Masa Depan",
    ];

    return (
        <div id={`header`} className="header">
            <div className="header-base-image">
                <img src={ config.excitedPerson } alt="" />
            </div>
            <div className="header-wrapper">
                {
                    taglines.map( (item, index) => {
                        return (
                            <div key={index} className="header-tagline-container">
                                <div className="header-tagline">
                                    { item }
                                </div>
                            </div>
                        );
                    } )
                }
            </div>
            <div className="header-caption">
                <div className="header-caption-text">
                    scroll kebawah untuk daftar BETA Testing
                </div>
                <FontAwesomeIcon className='header-caption-icon' icon={['fas', 'arrow-down']} />
            </div>
        </div>
    );
}



export default Header;