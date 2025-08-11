import { 
    createStore, 
    applyMiddleware,
    // compose 
} from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import ReduxThunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

// const store = createStore(rootReducer, composeWithDevTools());

export default store; 