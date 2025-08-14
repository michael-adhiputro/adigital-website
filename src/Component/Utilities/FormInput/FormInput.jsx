import React, {Component} from 'react';
import {Col, FormLabel, FormGroup, FormControl, Form} from 'react-bootstrap';
import './FormInput.scss';

class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    static getDerivedStateFromProps(props) {
        return {
            name: props.name,
            attribute: props.attribute
        };
    }

    updateInput(event, input) {
        const onChangeForm = this.props.onChange;
        const state = this.state;

        if(input.current.value) {
            state.attribute.hasError = false;
            input.current.classList.add('is-filled');
            this.setState(state);
        } else {
            input.current.classList.remove('is-filled');
        }

        onChangeForm(input.current.name, input.current.value);
    }

    renderSwitch() {
        const state = this.state;

        let inputName = state.name;
        let properName = inputName.split('_').join(' ');
        let inputType = state.attribute.hasOwnProperty('type') && state.attribute.type ? state.attribute.type : "text";
        let inputAs = "";
        let isRequired = state.attribute.hasOwnProperty('required') && state.attribute.required;
        let inputPlaceholder = state.attribute.hasOwnProperty('placeholder') ? state.attribute.placeholder : "Enter your " + state.attribute.label.toLowerCase();
        let options = inputType === 'select' && this.props.attribute.hasOwnProperty('options') && this.props.attribute.options !== undefined ? this.props.attribute.options : []; // { value: '', label: '' }
        let autoComplete = state.attribute.hasOwnProperty('autoComplete') ? state.attribute.autoComplete.toString() : "true";
        let hasError = state.attribute.hasOwnProperty('hasError') ? state.attribute.hasError : false;
        let errorMessage = state.attribute.hasOwnProperty('errorMessage') ? state.attribute.errorMessage.replace(inputName, properName) : `Invalid ${properName} input`;

        if(isRequired) {
            inputPlaceholder += '';
        } else {
            inputPlaceholder += ' (Optional)';
        }

        switch(state.attribute.type) {
            case "radio":
                inputAs = "radio";
                return (
                    <>
                        {
                            state.attribute.options.map( (item, index) => {
                                return (
                                    <Form.Check 
                                        key={index}
                                        ref={state.attribute.ref}
                                        type={state.attribute.type}
                                        label={ item.label }
                                        value={ item.value }
                                        onChange={(event) => this.updateInput(event,state.attribute.ref)}
                                    />
                                )
                            } )
                        }
                    </>
                );
            case "select":
                inputAs = "select";
                return (
                    <>
                        <Form.Select
                            // as={inputAs}
                            defaultValue=""
                            name={inputName}
                            type={inputType} 
                            ref={state.attribute.ref} 
                            required={isRequired}
                            rows={5} 
                            onChange={(event) => this.updateInput(event,state.attribute.ref)}
                            isInvalid={hasError}
                        >
                            <option value="" disabled hidden>{ inputPlaceholder }</option>
                            {
                                options.map( (value, key) => {
                                    return (
                                        <option key={key} value={value.value}>{ value.label }</option>
                                    );
                                } )
                            }
                        </Form.Select>
                        <FormControl.Feedback type="invalid">
                            { errorMessage }
                        </FormControl.Feedback>
                    </>
                );
            case "textarea":
                inputAs = "textarea";
                return (
                    <>
                        <FormControl 
                            name={inputName}
                            as={inputAs}
                            type={inputType} 
                            ref={state.attribute.ref} 
                            required={isRequired}
                            placeholder={inputPlaceholder}
                            rows={5} 
                            onChange={(event) => this.updateInput(event, state.attribute.ref)}
                            autoComplete={autoComplete}
                            isInvalid={hasError}
                        />
                        <FormControl.Feedback type="invalid">
                            { errorMessage }
                        </FormControl.Feedback>
                    </>
                );
            case 'text':
            case 'number':
            default:
                inputAs = "input";
                return (
                    <>
                        <FormControl 
                            name={inputName}
                            as={inputAs}
                            type={inputType} 
                            ref={state.attribute.ref} 
                            required={isRequired}
                            placeholder={inputPlaceholder}
                            onChange={(event) => this.updateInput(event, state.attribute.ref)}
                            autoComplete={autoComplete}
                            isInvalid={hasError}
                        />
                        <FormControl.Feedback type="invalid">
                            { errorMessage }
                        </FormControl.Feedback>
                    </>
                );
        };
    }

    render() {
        let isRequired = this.state.hasOwnProperty('attribute') && this.state.attribute.hasOwnProperty('required') && this.state.attribute.required;

        return this.state.hasOwnProperty('attribute') && (
            <Col sm={this.state.attribute.width} className="mb-3 form-input">
                <FormGroup className='form-items'>
                    {
                        this.state.attribute.label !== '' ? (
                            <FormLabel htmlFor="name"> 
                                { this.state.attribute.label } 
                            </FormLabel>
                        ) : ''
                    }
                    {
                        this.renderSwitch()
                    }
                    
                </FormGroup>
            </Col>
        );
    }
}

FormInput.defaultProps = {
    attribute: {
        label: "",
        value: "",
        width: 12,
        placeholder: "Enter here",
        type: 'text',
        autoComplete: false
    },
    onChange: (name, value) => {
        //
    }
}

export default FormInput;