import React, { useEffect } from 'react';
import './ErrorPage.scss';
import Init from '../../Init/Init';
import PrimaryButton from '../../Component/Utilities/PrimaryButton/PrimaryButton';

const ErrorPage = (props) => {
    const { image404 } = Init.config
    
    useEffect( () => {
        // const navbar = document.getElementById("navigation-bar");
        // const logo = document.getElementById("nav-logo");
        // const logoAlt = document.getElementById("nav-logo-alt");

        // navbar.classList.add("bg-transparent");
        // navbar.classList.remove("navbar-dark");
        // logo.style.display = "none";
        // logoAlt.style.display = "block";
        // props.checkBg(null, true)
    }, []);

    return (
        <>
            <div className="error-404-topbar">
                
            </div>
            <div className="error-404">
                <div className="error-image">
                    <img src={image404} alt="" />
                </div>
                <h1 className="error-message"> The page you requested not found </h1>
                <div className="error-button-container">
                    <PrimaryButton 
                        customClass="error-button"
                        href="/"
                        text="Back to Home"
                    />
                </div>
            </div>
        </>
    );
}

export default ErrorPage;