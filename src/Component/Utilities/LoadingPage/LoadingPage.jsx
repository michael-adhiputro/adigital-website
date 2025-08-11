import React from 'react';
import { Spinner } from 'react-bootstrap';

import './LoadingPage.scss';

function LoadingPage(props) {
    return (
        <div className={`custom-loading-page ${ props.customClass }`}>
            <Spinner animation='grow' />
        </div>
    );
}

LoadingPage.defaultProps = {
    customClass: "",
    color: "white"
}

export default LoadingPage;