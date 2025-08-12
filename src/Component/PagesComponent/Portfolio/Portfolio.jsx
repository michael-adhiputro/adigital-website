import React, { useContext, useEffect, useRef } from 'react';

import Init from '../../../Init/Init';
import './Portfolio.scss';
import PrimaryButton from '../../Utilities/PrimaryButton/PrimaryButton';

import { getPortfolio } from '../../../Data/Portfolio';

let config = Init.config;
const FontAwesomeIcon = Init.FontAwesomeIcon;

const Portfolio = (props) => {
    const data = getPortfolio();

    return (
        <div id={`portfolio`} className="portfolio">
            <h2 className="portfolio-title">
                Our Portfolio
            </h2>
            <div className="portfolio-items">
                {
                    data.map( (item, index) => {
                        return (
                            <div key={index} className="portfolio-item">
                                <img src={ item.image } alt={ item.name } />
                            </div>
                        )
                    } )
                }
            </div>
        </div>
    );
}



export default Portfolio;