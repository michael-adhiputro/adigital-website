import * as actionTypes from './product-types';

const INITIAL_STATE = {
    data: []
}

const productReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.LOAD_PRODUCTS:
            return {
                data: action.payload   
            };
        default: 
            return state;
    }
};

export default productReducer;