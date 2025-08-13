import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        title: state.metatag.title,
        description: state.metatag.description,
        keywords: state.metatag.keywords
    };
}

const SNI = (props) => {
    const [ title, setTitle ] = useState("Adigital");
    const [ description, setDescription ] = useState("Your Tech Business Companion.");
    const [ keywords, setKeywords ] = useState("software development,it solution,jasa website,website development");

    useEffect( () => {
        setTitle(props.title);
        setDescription(props.description);
        setKeywords(props.keywords);
    }, [props.title, props.description, props.keywords]);

    return (
        <Helmet>
            <title> { title } </title>
            <meta
                name="description"
                content={ description }
            />
            <meta 
                name="keywords" 
                content={ keywords } 
            />
        </Helmet>
    );
}

export default connect(mapStateToProps)(SNI);