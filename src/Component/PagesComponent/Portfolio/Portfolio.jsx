import React, { useContext, useEffect, useRef, useState } from 'react';

import Init from '../../../Init/Init';
import './Portfolio.scss';

import { connect } from 'react-redux';

let config = Init.config;
const FontAwesomeIcon = Init.FontAwesomeIcon;

const mapStateToProps = (state) => {
    return {
        portfolio: state.portfolio.data
    }
}

const Portfolio = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(props.portfolio);
    }, [props.portfolio]);

    return (
        <div id={`portfolio`} className="portfolio">
            <h2 className="portfolio-title">
                Our Portfolio
            </h2>
            <div className="portfolio-items">
                {
                    data.map( (item, index) => {
                        return (
                            <div key={index} className="portfolio-item-wrapper">
                                <div className="portfolio-item">
                                    <img src={ item.image } alt={ item.name } />
                                </div>
                            </div>
                        )
                    } )
                }
            </div>
        </div>
    );
}



export default connect(mapStateToProps)(Portfolio);