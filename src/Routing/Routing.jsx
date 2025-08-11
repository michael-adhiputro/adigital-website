import Homepage from '../Container/Homepage/Homepage';

import ErrorPage from '../Container/ErrorPage/ErrorPage';
import ComingSoon from '../Component/PagesComponent/ComingSoon/ComingSoon';

const Routes = () => {
    return [
        {
            path: "/",
            name: "Beranda",
            visibility: false,
            showNav: false,
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