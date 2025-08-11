
import { webInit } from '../../Data/Init';
import { responseFormat } from '../../Util/Util';
import * as actionTypes from './metatag-types';

const loadMetatag = () => {
    // return dispatch => {
    //     webInit().then( (response) => {
    //         if( response.hasOwnProperty('errorCode') && response.errorCode === 0 ) {
    //             // dispatch(saveMetatag(response.data.websiteTitle, response.data.websiteDescription, response.data.websiteMetaKeywords));
    //             dispatch(loadMetatagSuccess(response.data));
    //         }
    //     } );
    // }

    dispatchEvent(loadMetatagSuccess({
        websiteTitle: "Adigital",
        websiteDescription: "Your Tech Business Companion",
        websiteMetaKeywords: "software development,it solution,jasa website,website development"
    }))
};

const loadMetatagSuccess = (data) => {
    return {
        type: actionTypes.LOAD_METATAG,
        payload: data
    }
}

const saveMetatag = (title, description, keywords) => {
    return {
        type: actionTypes.SAVE_METATAG,
        payload: {
            websiteTitle: title,
            websiteDescription: description,
            websiteMetaKeywords: keywords
        }
    }
};

const metatagActions = {
    loadMetatag,
    saveMetatag
}

export default metatagActions;