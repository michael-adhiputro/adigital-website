import React, { useContext, useEffect, useRef } from 'react';

import Init from '../../../Init/Init';
import './Product.scss';
import PrimaryButton from '../../Utilities/PrimaryButton/PrimaryButton';

import { getProducts } from '../../../Data/Product';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

let config = Init.config;
const FontAwesomeIcon = Init.FontAwesomeIcon;

const Product = (props) => {
    const data = getProducts();
    const carouselConfig = config.carousel;

    carouselConfig.containerClass = "product-carousel-container";
    carouselConfig.itemClass = "product-carousel-holder";
    // carouselConfig.showDots = true;
    
    const scrollDown = (index) => {
        const item = data[index];
        const elementId = item.name.split(" ").join("-").toLowerCase();

        // const navbar = document.getElementById('navigation-bar');
        const section = document.getElementById(elementId);
        
        window.scroll({
            behavior: 'smooth',
            top: section.offsetTop
            // top: section.offsetTop
        });
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

            <Carousel 
                {...carouselConfig}
            >
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
                                <PrimaryButton onClick={ 
                                    () => scrollDown(index) 
                                } text="Learn more" customClass="btn-learn-more" />
                            </div>
                        </div>
                    )
                } )
                }
            </Carousel>
        </div>
    );
}



export default Product;