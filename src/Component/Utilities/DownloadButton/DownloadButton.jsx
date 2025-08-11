import React, { useState } from 'react';
import Init from '../../../Init/Init';

import './DownloadButton.scss';

import useAnalyticsEventTracker from '../../../GoogleAnalytics/useAnalyticsEventTracker';
import { buildWaLink } from '../../../Util/Util';

const DownloadButton = (props) => {
    const { config } = Init;
    const { iconFolder, googlePlayLink, appStoreLink } = config;
    const { appStoreIcon, googlePlayIcon } = config;

    const { 
        isFixed, 
        customClass, 
        show, 
        withIcon,
        text,
        // href,
        buttonName = isFixed ? 'Fixed Button' : 'Header Button',
        // onClick
    } = props;

    const [ showDownload, setShowDownload ] = useState(false);
    const [ delay, setDelay ] = useState(null);

    const gaEventCategory = buttonName;

    const gaEventTracker = useAnalyticsEventTracker(gaEventCategory);
    const favicon = `${iconFolder}/favicon.png`;

    const actionHandler = (event, isIn = true) => {
        if( isIn ) {
            gaEventTracker('Click', isFixed ? `${text} (Floating Consultation Button)` : text);
            setShowDownload(true);

            if( delay !== null ) {
                clearTimeout(delay);
                setDelay(null);
            }
        } 
        // else {
        //     gaEventTracker('Mouse Leave', text);
        //     let timeoutId = setTimeout(() => {
        //         setShowDownload(false);
        //     }, 5000);
            
        //     setTimeout(() => {
        //         setDelay(timeoutId);
        //     }, 5000);
        // }

    }

    return (
        <div 
            className="btn-download-fixed-container is-fixed"
            onMouseLeave={(event) => actionHandler(event, false)}
        >
            {
                showDownload ? (
                    <>
                        <a target="__blank" href={ googlePlayLink } className="btn-download-sm btn-download-sm-android">
                            {/* Gplay Icon */}
                            <img src={ googlePlayIcon } alt="Google Play Icon" />
                        </a>
                        <a target="__blank" href={ appStoreLink } className="btn-download-sm btn-download-sm-ios">
                            {/* App Store Icon */}
                            <img src={ appStoreIcon } alt="App Store Icon" />
                        </a>
                    </>
                ) : (
                    // ''
                    // <button
                    //     className={`btn-download-fixed ${show ? '' : 'd-none'} ${isFixed ? 'is-fixed' : ''} ${customClass}`} 
                    //     onClick={ (event) => actionHandler(event) }
                    // >
                    //     {/* <FontAwesomeIcon className='btn-download-fixed-icon' icon={['fab', 'whatsapp']} />  */}
                    //     <img className={`btn-download-fixed-icon ${ withIcon ? '' : 'd-none' }`} src={favicon} alt="" /> <span className='btn-download-fixed-text'>{ text }</span>
                    // </button>
                    <a 
                        className={`btn-download-fixed ${show ? '' : 'd-none'} ${ isFixed ? 'is-fixed' : ''} ${customClass}`}
                        target="_blank" 
                        href={ buildWaLink('', '', ` `) }
                    >
                        <img className={`btn-download-fixed-icon ${ withIcon ? '' : 'd-none' }`} src={favicon} alt="" /> <span className='btn-download-fixed-text'>{ text }</span>
                    </a>
                )
            }
        </div>
    );
}

DownloadButton.defaultProps = {
    isFixed: true,
    customClass: '',
    show: true,
    withIcon: true,
    text: 'Hubungi Waterfront Sekuritas!',
    href: '',
    onClick: null
}

export default DownloadButton;