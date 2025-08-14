import React, { useContext, useEffect, useRef, useState } from 'react';
import './CTA.scss';

import Init from '../../../Init/Init';
import { Row, Col, Toast } from 'react-bootstrap';

import FormInput from '../../Utilities/FormInput/FormInput';
import PrimaryButton from '../../Utilities/PrimaryButton/PrimaryButton';

import { connect } from 'react-redux';
import { submitInquiry } from '../../../Data/Inquiry';

let config = Init.config;
const FontAwesomeIcon = Init.FontAwesomeIcon;

const mapStateToProps = (state) => {
    return {
        products: state.product.data
    }
}

const CTA = (props) => {
    const [products, setProducts] = useState([]);

    const form = {
        email: useRef(),
        services: useRef()
    };
    const [toast, setToast] = useState({
        icon: null,
        title: "",
        message: "",
        open: false
    });

    const checkAllowSubmit = () => {

    }

    const closeToast = () => {
        setToast({
            ...toast,
            open: false
        });
    }

    useEffect( () => {
        setProducts(props.products);
    }, [props.products]);

    const send = async () => {
        const email = form.email.current.value;
        const service = form.services.current.value;

        // Call inquiry save METHOD
        const response = await submitInquiry(email, service);

        if( response.hasOwnProperty('errorCode') && response.errorCode === 0 ) {
            setToast({
                icon: <FontAwesomeIcon className='text-success mr-2' icon={['fas', 'check-circle']} />,
                title: "Success!",
                message: response.message,
                open: true
            });
        } else {
            setToast({
                icon: <FontAwesomeIcon className='text-danger mr-2' icon={['fas', 'times-circle']} />,
                title: "Failed!",
                message: response.message,
                open: true
            });
        }
    }

    return (
        <div id={`contact`} className="cta">
            <Toast className="cta-toast" show={toast.open} onClose={ () => closeToast() }>
                <Toast.Header>
                    <strong className="me-auto">{ toast.title }</strong>
                </Toast.Header>
                <Toast.Body>{ toast.icon } { toast.message }</Toast.Body>
            </Toast>
            <h2 className="cta-title">
                Let's Make Something Great <span className="cta-highlight"> Together </span>
            </h2>
            <Row className="cta-form">
                <FormInput 
                    name="email"
                    attribute={{
                        label: "",
                        value: "",
                        width: 9,
                        placeholder: "Your email",
                        type: 'text',
                        autoComplete: false,
                        ref: form.email,
                        required: true,
                        onChange: () => checkAllowSubmit(),
                    }}
                />
                {
                    products.length > 0 ? (
                        <FormInput 
                            name="service"
                            attribute={{
                                label: "",
                                value: "",
                                width: 5,
                                type: 'select',
                                placeholder: "Services",
                                ref: form.services,
                                required: true,
                                onChange: () => checkAllowSubmit(),
                                options: [
                                    ...products.map( (item, index) => {
                                        return {
                                            value: item.id,
                                            label: item.short_name
                                        }
                                    } )
                                ]
                            }}
                        />
                    ) : ""
                }
                <Col sm={3}>
                    <PrimaryButton 
                        customClass="btn-send"
                        text="Send"
                        onClick={ () => send() }
                    />
                </Col>
            </Row>
        </div>
    );
}



export default connect(mapStateToProps)(CTA);