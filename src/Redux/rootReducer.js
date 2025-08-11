import { combineReducers } from 'redux';

import metatagReducer from './MetaTags/metatag-reducer';

const rootReducer = combineReducers({
    metatag: metatagReducer,
});

export default rootReducer;