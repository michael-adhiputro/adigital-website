import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { isMobile } from 'react-device-detect';

var Init = {};

// Constants
Init.constants = {
    
};

// Basic config
Init.config = {
    carousel: {
        swipeable: true,
        draggable: true,
        showDots: false,
        responsive: {
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
              slidesToSlide: 3 // optional, default to 1.
            },
            tablet: {
              breakpoint: { max: 1024, min: 768 },
              items: 2,
              slidesToSlide: 2 // optional, default to 1.
            },
            mobile: {
              breakpoint: { max: 768, min: 0 },
              items: 1,
              slidesToSlide: 1 // optional, default to 1.
            }
        },
        ssr: false, // means to render carousel on server-side.
        infinite: false,
        autoPlay: false,
        autoPlaySpeed: 99999,
        keyBoardControl: true,
        // transition: "all .5",
        transitionDuration: 500,
        removeArrowOnDeviceType: [
            // "mobile", 
            "tablet", 
            "desktop"
        ],
        // deviceType: "desktop",
        partialVisible: false,
        centerMode: false,
        containerClass: "carousel-container",
        dotListClass: "custom-dot-list-style",
        itemClass: "carousel-item-padding-40-px"
    },
    customImageFilter: {
        none: [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0,
        ],
        grayscale: [
            0.85, 0, 0, 0, 0,
            0.85, 0, 0, 0, 0,
            0.85, 0, 0, 0, 0,
            0, 0, 0, 1, 0,
        ]
    },
    imageFolder: "/assets/images/",
    logoFolder: "/assets/logo/",
    iconFolder: "/assets/icons/",
    clientFolder: "/assets/clients/",
    isMobile: isMobile,
    // googlePlayLink: "https://play.google.com/store/apps/details?id=com.landackapp",
    // appStoreLink: "https://apps.apple.com/id/app/landack/id6466232103",
    googleCaptchaSiteKey: process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY,
    googleCaptchaSecretKey: process.env.REACT_APP_GOOGLE_CAPTCHA_SECRET_KEY
}

Init.config.navbarLogo = `${ Init.config.logoFolder }logo-text-horizontal.png`;
Init.config.navbarLogoAlt = `${ Init.config.logoFolder }logo-text-horizontal.png`;

Init.config.headerImage = `${ Init.config.imageFolder }header-image.png`;
Init.config.aboutUsImage = `${ Init.config.logoFolder }logo-text-vertical.png`;

Init.config.headerAssetOne = `${ Init.config.imageFolder }header-asset-1.png`;
Init.config.headerAssetTwo = `${ Init.config.imageFolder }header-asset-2.png`;

Init.config.imageIcon = `${ Init.config.iconFolder }favicon.png`;

// Extensions
library.add(fab, fas, far);
Init.FontAwesomeIcon = FontAwesomeIcon;


export default Init;