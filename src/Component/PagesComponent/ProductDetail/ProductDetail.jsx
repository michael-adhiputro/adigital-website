import { useEffect, useState } from 'react';

import './ProductDetail.scss';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        products: state.product.data
    };
}

const ProductDetail = (props) => {
    const [data, setData] = useState([]);

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
                data.filter((item) => item.hasOwnProperty('is_service') && item.is_service === 0).map((item, index) => {
                    return (
                        <div key={index} id={`${item.slug}`} className={`product-detail-item ${index % 2 === 0 ? "left-to-right" : "right-to-left"}`}>
                            <div className="product-detail-item-image">
                                <img src={item.icon} alt="" />
                            </div>
                            <div className="product-detail-item-content">
                                <h3 className="content-title">
                                    {item.name}
                                </h3>
                                <div className="content-desc">
                                    {item.desc}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className="product-detail-title-container">
                <h2 className="product-detail-title">
                    Our Service
                </h2>
                <h4 className="product-detail-subtitle">
                    Tailored to your needs
                </h4>
            </div>
            {
                data.length > 0 &&
                data.filter((item) => item.hasOwnProperty('is_service') && item.is_service === 1).map((item, index) => {
                    return (
                        <div key={index} id={`${item.slug}`} className={`product-detail-item ${index % 2 === 0 ? "left-to-right" : "right-to-left"}`}>
                            <div className="product-detail-item-image">
                                <img src={item.icon} alt="" />
                            </div>
                            <div className="product-detail-item-content">
                                <h3 className="content-title">
                                    {item.name}
                                </h3>
                                <div className="content-desc">
                                    {item.desc}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}



export default connect(mapStateToProps)(ProductDetail);