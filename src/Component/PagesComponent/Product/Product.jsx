import { useEffect, useState } from 'react';

import Init from '../../../Init/Init';
import './Product.scss';
import PrimaryButton from '../../Utilities/PrimaryButton/PrimaryButton';

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import { connect } from 'react-redux';

let config = Init.config;

const mapStateToProps = (state) => {
    return {
        products: state.product.data
    }
}

const Product = (props) => {
    const [data, setData] = useState([]);
    const carouselConfig = config.carousel;

    carouselConfig.containerClass = "product-carousel-container";
    carouselConfig.itemClass = "product-carousel-holder";
    carouselConfig.showDots = true;

    const scrollDown = (index) => {
        const item = data[index];
        const elementId = item.slug;

        const section = document.getElementById(elementId);

        window.scroll({
            behavior: 'smooth',
            top: section.offsetTop
            // top: section.offsetTop
        });
    };

    useEffect(() => {
        console.log(props.products);
        setData(props.products);
    }, [props.products]);

    return (
        <div id={`products`} className="products">
            {/* 
                1. Subtitle + Title
                2. Product Cards
            */}
            <div className="product-title-container">
                <h2 className="product-title">
                    Our Product
                </h2>
                <h4 className="product-subtitle">
                    Provided to support your business
                </h4>
            </div>

            {
                data.length > 0 ? (
                    <Carousel
                        {...carouselConfig}
                    >
                        {
                            data.filter((item) => item.hasOwnProperty('is_service') && item.is_service === 0).map((item, index) => {
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
                                                <img src={`${item.icon}`} alt="" />
                                            </div>
                                            <h4 className="product-list-item-title">
                                                {item.short_name}
                                            </h4>
                                        </div>
                                        <div className="product-list-item-desc">
                                            {item.short_desc}
                                        </div>
                                        <div className="product-list-btn-container">
                                            <PrimaryButton onClick={
                                                () => scrollDown(index)
                                            } text="Learn more" customClass="btn-learn-more" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                ) : ""
            }
        </div>
    );
}



export default connect(mapStateToProps)(Product);