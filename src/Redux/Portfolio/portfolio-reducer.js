import * as actionTypes from './portfolio-types';

const INITIAL_STATE = {
    data: []
}

const portfolioReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.LOAD_PORTFOLIO:
            return {
                data: action.payload
            };
        default: 
            return state;
    }
};

export default portfolioReducer;