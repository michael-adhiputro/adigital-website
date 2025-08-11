import React, {Component, Fragment, createRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './Component/Include/Navbar/Navbar';
import NavigationContext from './Context/NavigationContext';
import Footer from './Component/Include/Footer/Footer';

import Routes from './Routing/Routing';
import Init from './Init/Init';

import PrimaryButton from './Component/Utilities/PrimaryButton/PrimaryButton';
import { legalServiceLink } from './Util/Util';

import ReactGA from 'react-ga4';
import TagManager from 'react-gtm-module';
import SNI from './Component/Utilities/Helmet/Helmet';
import DownloadButton from './Component/Utilities/DownloadButton/DownloadButton';

if(process.env.REACT_APP_ENV === 'production') {
  /* GA */
  // const TRACKING_ID = "UA-250517852-1"; // OUR_TRACKING_ID
  // ReactGA.initialize(TRACKING_ID);
  
  /* Tag Manager */
  // const tagManagerConfig = {
  //     gtmId: 'GTM-TKDLBF8',
  //     // dataLayerName: 'PageDataLayer'
  // }
  // TagManager.initialize(tagManagerConfig);
  
  // /* GA 4 */
  // const MEASUREMENT_ID = 'G-J2B06R9JXN';
  // ReactGA.initialize(MEASUREMENT_ID);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoute: window.location.pathname,
      appRef: createRef()
    }
  };

  static contextType = NavigationContext;

  componentDidMount() {
    let state = this.state;
    let config = Init.config;

    let { pathname, search, hash } = window.location;

    ReactGA.send({
      hitType: 'pageview',
      path: pathname + hash + search,
      title: pathname
    });

    // if(hash) {
    //   this.handleNavClick(hash);
    // }
  }

  pathMatch(currentPath) {
    let routes = Routes();

    let hasNavRoutes = routes.filter( (value, key) => {
      return value.showNav;
    } ).map( (item) => {
      if(item.path.includes(':')) {
        let path = currentPath.split('/');
        // let pathParam = path[Math.max(path.length - 1, 0)];
        let pathLength = path.length;
        let arrPath = item.path.split("/");

        if(arrPath.length == pathLength) {
          for(let i = pathLength - 1;i > 1;i--) {
              arrPath[i] = path[i];
          }

        }

        item.path = arrPath.join("/");
      }

      return item.path;
    } );

    return hasNavRoutes.includes(currentPath);
    // return true;
  }

  render() {
    const routes = Routes();

    let hasFooterRoutes = routes.filter( (value, key) => {
      return value.showFooter;
    } ).map( (item) => {
      return item.path;
    } );

    return(
      <>
        <SNI />
        <div ref={this.state.appRef} className={"App"}>
          {/* <DownloadButton show={true} isFixed={true} text="Hubungi Waterfront Sekuritas" /> */}
          <NavigationBar show={this.pathMatch(this.state.currentRoute)} navList={routes} />
          <Footer show={ hasFooterRoutes.includes(this.state.currentRoute) } />
        </div>
      </>
    );
  }
}

export default App;
