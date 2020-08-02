import React, { useState } from 'react';

function ClientLogin() {
    // Define initial state with formFields and validators
    const [ formData, setFormDataState ] = useState({
        email: {
            value: '',
            error: null,
            validators: [
                requiredValidator,
                emailValidator
            ]
        },
        password: {
            value: '',
            error: null,
            validators: [
                requiredValidator
            ]
        }
    });
    // Required validator, could be moved to external file and used in other forms
    function requiredValidator(value) {
        if (value && typeof value == 'string') {
            value =  value.trim();
        }    
        return !value ? 'This field is required' : null;
    }

    // Email validator, could be moved to external file and used in other forms
    function emailValidator(value) {
        let re = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$');

        let valid = true;
        
        if (value) {
            valid = re.exec(value);
        }

        return !valid ? 'Please enter valid email address' : null;
    }

    // Handle change on input change, assign value and check for errors
    function handleChange(e) {
        const {value, name} = e.target;
        handleFormField(name, value);
    }

    // Reused function to assign value and check for errors, could be moved to external file and used in other forms
    function handleFormField(fieldName, fieldValue) {
        if (!formData[fieldName]) {
            return;
        }

        let formField = formData[fieldName];

        formField.value = fieldValue;

        for (let i in formField.validators) {
            let validator = formField.validators[i];
            formField.error = validator(fieldValue);
            if (formField.error) {
                break;
            }
        }

        setFormDataState(prevState => {
            return { ...prevState, [fieldName]: formField };
        });
    }

    // On form submit check if form is valid or not
    function handleSubmit(e) {
        e.preventDefault();
        
        if (formIsValid()) {
            alert('Yey, form is valid!');
        }

    }

    // Check if form is valid helper function
    function formIsValid() {
        let isValid = true;

        for (let fieldName in formData) {
            let formField = formData[fieldName];
            handleFormField(fieldName, formField.value);

            if (formField.error && isValid) {
                isValid = false;
            }
        }

        return isValid;
    }

    return (
        <div className="client-login">
            <h2 className="title">Client zone</h2>
            <form autoComplete="off" onSubmit={ handleSubmit }>
                <div className={`form-group ${formData.email.error ? 'has-error': ''}`}>
                    <label className="form-label">Email</label>
                    <input name="email" type="text" onChange={ handleChange } value={ formData.email.value } className="form-text-input" placeholder="your@email.here" />
                    { formData.email.error
                        ? <label className="form-description-label">{ formData.email.error }</label>
                        : null
                    }
                    
                </div>
                <div className={`form-group ${formData.password.error ? 'has-error': ''}`}>
                    <label className="form-label">Password</label>
                    <input name="password" type="password" onChange={ handleChange } value={ formData.password.value } className="form-text-input" placeholder="********" />
                    { formData.password.error
                        ? <label className="form-description-label">{ formData.password.error }</label>
                        : null
                    }
                </div>
                <div className="form-group">
                    <label className="form-checkbox-input">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Remember me
                    </label>
                </div>
                <div className="actions">
                    <button className="btn purple-btn" type="submit">Login</button>
                    <a href="#/" className="btn link-btn">Register</a>
                </div>
            </form>
        </div>
    );
}

export default ClientLogin;
