import React, {Component, Fragment, createRef, useEffect} from 'react';
import {Anchor, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import './Navbar.scss';
import {Link, Routes, BrowserRouter as Router, Route, NavLink, useParams, useSearchParams, useLocation, useNavigate} from "react-router-dom";

import Init from '../../../Init/Init';

import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavigationContext from '../../../Context/NavigationContext';

const withParameters = (Component) => {
    function ComponentWithRouter(props) {
        useEffect( () => {

        }, []);
        const params = useParams();
        const [queryParams] = useSearchParams();
        const location = useLocation();

        const navigate = useNavigate(); 

        return (
            <NavigationContext.Provider value={{
                navigate: (targetPath, options = {
                    replace: true,
                    state: {}
                }) => {
                    navigate(targetPath, options);
                },
                params,
                queryParams,
                location
            }}>
                <Component 
                    {...props} 
                />
            </NavigationContext.Provider>
        )
    }

    return ComponentWithRouter
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}; 

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPath: window.location.pathname,
            navigationRef: createRef(null),
            scrollRef: createRef(0),
        };
    }

    componentDidMount() {
        this.onScroll();
        window.addEventListener("scroll", (event) => this.onScroll(event));
    }

    componentDidUpdate() {

    }

    onScroll(event, whiteBg = false) {
        const currentPath = window.location.pathname;

        const navbar = document.getElementById("navigation-bar");
        const logo = document.getElementById("nav-logo");
        const logoAlt = document.getElementById("nav-logo-alt");
        const yPosition = window.scrollY;

        if( yPosition > 84 ) {
            // Add customNavbarBg
            navbar.classList.add("custom-navbar-bg");
            navbar.classList.remove('navbar-dark');
            logo.style.display = "none";
            logoAlt.style.display = "block";

            if( currentPath.indexOf("/research") > -1 || whiteBg ) {
                navbar.classList.remove("bg-transparent");
            }
        } else {
            // Remove customNavbarBg
            if( currentPath.indexOf("/research") > -1 || whiteBg ) {
                navbar.classList.add("custom-navbar-bg");
                navbar.classList.remove('navbar-dark');
                navbar.classList.add("bg-transparent");
                logo.style.display = "none";
                logoAlt.style.display = "block";
            } else {
                navbar.classList.remove("custom-navbar-bg");
                navbar.classList.add('navbar-dark');
                navbar.classList.remove("bg-transparent");
                logo.style.display = "block";
                logoAlt.style.display = "none";
            }
        
        }

        this.state.scrollRef.current = yPosition;
    }

    getCurrentPath(event, path, disabled = false) {
        if( disabled ) event.preventDefault();
        this.handleNavClick(path);
    }

    handleNavClick = (path) => {
        let navRef = this.state.navRef.current;
        
        if(navRef !== null) {
            const currentPath = path;
            const elementId = currentPath.replace('#', '');
    
            // const navbar = document.getElementById('navigation-bar');
            const section = document.getElementById(elementId);
            
            window.scroll({
                behavior: 'smooth',
                top: section.offsetTop
                // top: section.offsetTop
            });
        }
    }

    componentWillUnmount() {
        this.setState = (state,callback)=>{
            return;
        };

        window.removeEventListener('scroll', () => {});
        window.removeEventListener('resize', () => {});
    }

    render() {
        let state = this.state;
        // let logoPath = Init.config.navbarLogo;
        let { navList, show } = this.props;
        // let navList = [];

        console.log(this.state.scrollRef);

        return (
            <Router>
                <Navbar ref={this.state.navRef} variant='dark' id="navigation-bar" expand="xl" className={`custom-navbar-bg ${show ? '' : 'd-none'}`}>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
                    </Navbar.Toggle> */}

                    <Navbar.Brand as={Anchor} href="/">
                        <img id="nav-logo" className="nav-logo" src={ Init.config.navbarLogo } alt="Logo" />
                        <img id="nav-logo-alt" className="nav-logo" src={ Init.config.navbarLogoAlt } alt="Logo Alt" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <FontAwesomeIcon icon={['fas', 'bars']} />
                    </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
                        <Nav className="">
                            {
                                navList.map( (item, index) => {
                                    let navLinks = "";

                                    if(item.hasOwnProperty('visibility') && item.visibility) {
                                        navLinks = item.hasOwnProperty("dropdown") ? (
                                            <NavDropdown
                                                key={index}
                                                title={ item.name }
                                            >
                                                {
                                                    item.dropdown.map( (dropdownItem, dropdownIndex) => {
                                                        return dropdownItem.hasOwnProperty('dropdown') ? (
                                                            <NavDropdown
                                                                key={dropdownIndex}
                                                                className='submenu'
                                                                title={ 
                                                                    <span className={`nav-dropdown-header-with-custom-toggle`}>
                                                                        { dropdownItem.name }
                                                                        <FontAwesomeIcon className={`custom-dropdown-icon`} icon={['fas', 'arrow-right']} />
                                                                    </span>
                                                                }
                                                                drop={'end'}
                                                            >
                                                                {
                                                                    dropdownItem.dropdown.map( ( v, k ) => {
                                                                        return (
                                                                            <NavLink key={k} 
                                                                                to={v.path} 
                                                                                // activeClassName="active" 
                                                                                className={`nav-link ml-2 ${ v.disabled ? "disabled" : ""}`} 
                                                                                onClick={(event) => this.getCurrentPath(event, v.path, v.disabled)}
                                                                            > 
                                                                                <span>
                                                                                    {v.name} 
                                                                                </span>
                                                                                {/* <FontAwesomeIcon className='nav-link-icon' icon={['fas', 'arrow-right']} /> */}
                                                                            </NavLink>
                                                                        )
                                                                    } )
                                                                }
                                                            </NavDropdown>
                                                        ) : (
                                                            dropdownItem.hasOwnProperty('external') && dropdownItem.external ? (
                                                                <a 
                                                                    target='_blank'
                                                                    href={`${ dropdownItem.path }`}
                                                                    className={`nav-link ml-2 ${ dropdownItem.disabled ? "disabled" : "" }`}
                                                                    key={dropdownIndex}
                                                                    onClick={(event) => this.getCurrentPath(event, dropdownItem.path, dropdownItem.disabled)}
                                                                >
                                                                    {dropdownItem.name}
                                                                </a>
                                                            ) : (
                                                                <NavLink key={dropdownIndex} 
                                                                    to={dropdownItem.path} 
                                                                    // activeClassName="active" 
                                                                    className={`nav-link ml-2 ${ dropdownItem.disabled ? "disabled" : ""}`} 
                                                                    onClick={(event) => this.getCurrentPath(event, dropdownItem.path, dropdownItem.disabled)}
                                                                > 
                                                                    <span>
                                                                        {dropdownItem.name} 
                                                                    </span>
                                                                    <FontAwesomeIcon className='nav-link-icon' icon={['fas', 'arrow-right']} />
                                                                </NavLink>
                                                            )
                                                        );
                                                    })
                                                }
                                            </NavDropdown>
                                            // <NavLink key={index} 
                                            //         to={item.path} 
                                            //         // activeClassName="active" 
                                            //         className="nav-link ml-2" 
                                            //         onClick={() => this.getCurrentPath(item.path)}> {item.name} </NavLink>
                                        ) : (
                                            <NavLink key={index} 
                                                    to={item.path} 
                                                    // activeClassName="active" 
                                                    className="nav-link ml-2" 
                                                    onClick={(event) => this.getCurrentPath(event, item.path)}> {item.name} </NavLink>
                                        );
                                    }

                                    return navLinks;
                                } )
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/* Render the first matched path */}
                <Routes>
                    {
                        this.props.navList.map((route, i) => {
                                if( route.hasOwnProperty('component') ) {
                                    const ComponentWithParameters = withParameters(route.component);

                                    return (
                                        <Route
                                            key={i}
                                            path={route.path}
                                            element={
                                                <ComponentWithParameters
                                                    loadMetatag={ () => this.props.loadMetatag() }
                                                    loadProducts={ () => this.props.loadProducts() }
                                                    loadAppRepo={ () => this.props.loadAppRepo() }
                                                    checkBg={ (value = false) => this.onScroll( null, value || (route.hasOwnProperty('whiteBg') && route.whiteBg) ) }
                                                />
                                            }
                                        />
                                    )
                                } else {
                                    return "";
                                }
                            } 
                        )
                    }
                </Routes>
            </Router>
            // <Fragment>
            // </Fragment>
        );
    }
}

export default connect(null, mapDispatchToProps)(NavigationBar);