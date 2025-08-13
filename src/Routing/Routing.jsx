import Homepage from '../Container/Homepage/Homepage';

import ErrorPage from '../Container/ErrorPage/ErrorPage';
import ComingSoon from '../Component/PagesComponent/ComingSoon/ComingSoon';

const Routes = () => {
    return [
        {
            path: "/",
            name: "Home",
            visibility: true,
            showNav: true,
            showFooter: true,
            component: Homepage
        },
        {
            // path: "",
            name: "Product",
            visibility: true,
            dropdown: [
                {
                    path: "#e-commerce-platform",
                    name: "E-commerce Platform",
                    disabled: false
                },
                {
                    path: "#cooperative-system",
                    name: "Sistem Koperasi",
                    disabled: false
                },
                {
                    path: "#mini-pos-system",
                    name: "Mini POS",
                    disabled: false
                },
            ]
        },
        {
            path: "/contact-us",
            name: "Contact Us",
            visibility: true,
            showNav: true,
            showFooter: true,
            component: Homepage
        },
        {
            path: "/coming-soon",
            name: "Coming Soon",
            visibility: false,
            showNav: false,
            showFooter: false,
            component: ComingSoon
        },
        {
            path: "*",
            name: "Default",
            visibility: false,
            showNav: false,
            showFooter: false,
            whiteBg: true,
            component: ErrorPage
        }
    ];
}

export default Routes;