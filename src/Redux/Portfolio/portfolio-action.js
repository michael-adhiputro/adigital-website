import { getPortfolio } from '../../Data/Portfolio';
import * as actionTypes from './portfolio-types';

const loadPortfolio = () => {
    return dispatch => {
        getPortfolio().then( (response) => {
            if( response.hasOwnProperty('errorCode') && response.errorCode === 0 ) {
                // dispatch(saveMetatag(response.data.websiteTitle, response.data.websiteDescription, response.data.websiteMetaKeywords));
                dispatch(loadPortfolioSuccess(response.data));
            }
        } );
    }
};

const loadPortfolioSuccess = (data) => {
    return {
        type: actionTypes.LOAD_PORTFOLIO,
        payload: data
    }
}

const portfolioActions = {
    loadPortfolio,
}

export default portfolioActions;