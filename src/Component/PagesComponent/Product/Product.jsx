import React, { useContext, useEffect, useRef } from 'react';

import Init from '../../../Init/Init';
import './Product.scss';
import PrimaryButton from '../../Utilities/PrimaryButton/PrimaryButton';

import { getProducts } from '../../../Data/Product';

let config = Init.config;
const FontAwesomeIcon = Init.FontAwesomeIcon;

const Product = (props) => {
    const data = getProducts();

    const scrollDown = (index) => {
        console.log(data[index]);
    };

    return (
        <div id={`products`} className="products">
            {/* 
                1. Subtitle + Title
                2. Product Cards
            */}
            <div className="product-title-container">
                <h4 className="product-subtitle">
                    Service
                </h4>
                <h2 className="product-title">
                    Our Product
                </h2>
            </div>

            <div className="product-list-container">
                {
                    data.map( (item, index) => {
                        return (
                            <div key={index} className="product-list-item">
                                {/* 
                                    1. Icon
                                    2. Title
                                    3. Short Desc
                                    4. Button
                                */}
                                <div className="product-list-item-header">
                                    <div className="product-list-item-icon">
                                        <img src={`${ item.icon }`} alt="" />
                                    </div>
                                    <h4 className="product-list-item-title">
                                        { item.name }
                                    </h4>
                                </div>
                                <div className="product-list-item-desc">
                                    { item.shortDesc }
                                </div>
                                <div className="product-list-btn-container">
                                    <PrimaryButton onClick={ () => scrollDown(index) } text="Learn more" customClass="btn-learn-more" />
                                </div>
                            </div>
                        )
                    } )
                }
            </div>
        </div>
    );
}



export default Product;