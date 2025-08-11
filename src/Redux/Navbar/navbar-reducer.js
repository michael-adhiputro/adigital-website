import * as actionTypes from './navbar-types';
import Routes from '../../Routing/Routing';
import { objectIsEmpty } from '../../Util/Util';

const INITIAL_STATE = {
    show: true,
    navLink: {}
}

const navbarReducer = (state = INITIAL_STATE, action) => {
    let { navLink, show } = state;

    switch(action.type) {
        case actionTypes.INIT_NAVBAR:
            var routes = Routes();
            
            for( let index in routes ) {
                let item = routes[index];
                let id = item.name.toLowerCase().split(" ").join("-");
    
                navLink[id] = item;
            }

            break;
        default: 
            break;
    }

    return {
        ...state,
        navLink,
        show
    };
};

export default navbarReducer;