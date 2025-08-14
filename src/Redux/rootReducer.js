import { combineReducers } from 'redux';

import metatagReducer from './MetaTags/metatag-reducer';
import productReducer from './Products/product-reducer';
import portfolioReducer from './Portfolio/portfolio-reducer';

const rootReducer = combineReducers({
    metatag: metatagReducer,
    product: productReducer,
    portfolio: portfolioReducer
});

export default rootReducer;