import React from 'react';
import Init from '../../../Init/Init';
import ContactInfo from '../../../Data/Contact';

import { Link } from 'react-router-dom';

import './PrimaryButton.scss';

import useAnalyticsEventTracker from '../../../GoogleAnalytics/useAnalyticsEventTracker';
import { buildWaLink, legalServiceLink } from '../../../Util/Util';

const PrimaryButton = (props) => {
    const { FontAwesomeIcon, config } = Init;
    const { iconFolder } = config;
    const { 
        isFixed, 
        customClass, 
        show, 
        text,
        href = "",
        link = "",
        buttonName = isFixed ? 'Fixed Button' : 'Header Button',
        onClick,
        iconPosition,
        customIcon = null,
        disabled = false,
    } = props;
    const info = ContactInfo();

    const gaEventCategory = buttonName;

    const gaEventTracker = useAnalyticsEventTracker(gaEventCategory);

    const favicon = `${iconFolder}/favicon.png`;

    const clickHandler = (event) => {
        gaEventTracker('Click', text);
        
        if( onClick !== null ) {
            event.preventDefault();
            onClick();
        }

    }

    return href !== "" ? (
        <a 
            target="_blank" 
            className={`btn-custom ${show ? '' : 'd-none'} ${isFixed ? 'is-fixed' : ''} ${customClass} ${ disabled ? "disabled" : "" }`} 
            href={href !== '' ? href : ""} 
            onClick={ (event) => disabled ? null : clickHandler(event) }
            onMouseEnter={() => gaEventTracker('Hover', text)}
        >
            {
                iconPosition == "left" ? (
                    customIcon
                ) : ""
            }
            <span className='btn-text'>{ text }</span>
            {
                iconPosition == "right" ? (
                    customIcon
                ) : ""
            }
        </a>
    ) : (
        <Link 
            to={link}
            className={`btn-custom ${show ? '' : 'd-none'} ${isFixed ? 'is-fixed' : ''} ${customClass} ${ disabled ? "disabled" : "" }`} 
            onClick={ (event) => disabled ? null : clickHandler(event) }
            onMouseEnter={() => gaEventTracker('Hover', text)}
        >
            {
                iconPosition == "left" ? (
                    customIcon
                ) : ""
            }
            <span className='btn-text'>{ text }</span>
            {
                iconPosition == "right" ? (
                    customIcon
                ) : ""
            }
        </Link>
    );
}

PrimaryButton.defaultProps = {
    isFixed: false,
    customClass: '',
    show: true,
    text: 'Gabung Sekarang!',
    href: '',
    link: '',
    onClick: null,
    customIcon: null,
    iconPosition: 'none'
}

export default PrimaryButton;