import React, { useContext, useEffect, useRef, useState } from 'react';

import Init from '../../../Init/Init';
import './ProductDetail.scss';
import PrimaryButton from '../../Utilities/PrimaryButton/PrimaryButton';

import { connect } from 'react-redux';

let config = Init.config;
const FontAwesomeIcon = Init.FontAwesomeIcon;

const mapStateToProps = (state) => {
    return {
        products: state.product.data
    };
}

const ProductDetail = (props) => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        setData(props.products);
    }, [props.products]);

    return (
        <div id={`product-detail`} className="product-detail">
            {/* 
                1. Image
                2. Content
                    - Title
                    - Desc
            */}
            {
                data.length > 0 && 
                data.map( (item, index) => {
                    return (
                        <div key={index} id={`${ item.slug }`} className={`product-detail-item ${ index % 2 === 0 ? "left-to-right" : "right-to-left" }`}>
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



export default connect(mapStateToProps)(ProductDetail);