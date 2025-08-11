import * as actionTypes from './navbar-types';

const initNavbar = () => {
    return {
        type: actionTypes.INIT_NAVBAR,
        payload: {}
    }
};

const moveToSection = () => {
    return {
        type: actionTypes.MOVE_TO_SECTION,
        payload: {}
    };
};

const navbarActions = {
    initNavbar,
    moveToSection
}

export default navbarActions;