import React, { useContext, useEffect, useRef } from 'react';

import Init from '../../../Init/Init';
import './ProductDetail.scss';
import PrimaryButton from '../../Utilities/PrimaryButton/PrimaryButton';

import { getProducts } from '../../../Data/Product';

let config = Init.config;
const FontAwesomeIcon = Init.FontAwesomeIcon;

const ProductDetail = (props) => {
    const data = getProducts();

    return (
        <div id={`product-detail`} className="product-detail">
            {/* 
                1. Image
                2. Content
                    - Title
                    - Desc
            */}
            {
                data.map( (item, index) => {
                    return (
                        <div key={index} id={`${ item.name.split(" ").join("-").toLowerCase() }`} className={`product-detail-item ${ index % 2 === 0 ? "left-to-right" : "right-to-left" }`}>
                            <div className="product-detail-item-image">
                                <img src={ item.icon } alt="" />
                            </div>
                            <div className="product-detail-item-content">
                                <h3 className="content-title">
                                    { item.name }
                                </h3>
                                <div className="content-desc">
                                    { item.desc }
                                </div>
                            </div>
                        </div>
                    )
                } )
            }
        </div>
    );
}



export default ProductDetail;