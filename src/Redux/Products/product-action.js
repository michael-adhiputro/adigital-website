import { getProducts } from '../../Data/Product';
import * as actionTypes from './product-types';

const loadProducts = () => {
    return dispatch => {
        getProducts().then( (response) => {
            if( response.hasOwnProperty('errorCode') && response.errorCode === 0 ) {
                // dispatch(saveMetatag(response.data.websiteTitle, response.data.websiteDescription, response.data.websiteMetaKeywords));
                dispatch(loadProductsSuccess(response.data));
            }
        } );
    }
};

const loadProductsSuccess = (data) => {
    return {
        type: actionTypes.LOAD_PRODUCTS,
        payload: data
    }
}

const productActions = {
    loadProducts,
}

export default productActions;