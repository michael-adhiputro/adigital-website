import React, {Component} from 'react';
import './Homepage.scss';

import Init from '../../Init/Init';

import Header from '../../Component/PagesComponent/Header/Header';
import AboutUs from '../../Component/PagesComponent/AboutUs/AboutUs';
import Product from '../../Component/PagesComponent/Product/Product';
import ProductDetail from '../../Component/PagesComponent/ProductDetail/ProductDetail';
import Portfolio from '../../Component/PagesComponent/Portfolio/Portfolio';

class Homepage extends Component {
    constructor(props) {
        super(props);
        
        this.config = Init.config;
        this.state = {
            
        }

    }

    scrollEvent(event) {

    }

    componentDidMount() {
        window.addEventListener('resize', (event) => {
            
        });
        window.addEventListener('scroll', this.scrollEvent);

        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
     }
    
    componentWillUnmount() {
        window.removeEventListener('resize', function(){});
        window.removeEventListener('scroll', this.scrollEvent);
    }

    render() {
        return (
            <div className="homepage">
                {/* <NoticeModal /> */}

                <Header />
                <AboutUs />
                {/* <Product /> */}
                <ProductDetail />
                <Portfolio />
            </div>
        );
    }
}

export default Homepage;