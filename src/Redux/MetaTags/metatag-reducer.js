import * as actionTypes from './metatag-types';

const INITIAL_STATE = {
    title: "Adigital",
    description: "Your Tech Business Companion",
    keywords: "software development,it solution,jasa website,website development"
}

const metatagReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.SAVE_METATAG:
            action.payload.websiteMetaKeywords = state.keywords + ", " + action.payload.websiteMetaKeywords;

            return {
                ...state,
                keywords: action.payload.websiteMetaKeywords
            }
        case actionTypes.LOAD_METATAG:
            return {
                title: action.payload.websiteTitle,
                description: action.payload.websiteDescription,
                keywords: action.payload.websiteMetaKeywords
            };
        default: 
            return state;
    }
};

export default metatagReducer;