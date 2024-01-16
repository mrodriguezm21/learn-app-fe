import PropTypes from 'prop-types';
import { useReducer, useState } from 'react';
import { Button, Input } from '../../common';
import { BUTTONS, FORM_STATUS, REG_FORM, ROLS } from '../../constants';
import './Registration.css';

const validateInputs = ({ formState }) => {
    const { email, firstname, lastname, specialization } = formState;
    const errors = {
        email: '',
        firstname: '',
        lastname: '',
        specialization: '',
    };
    if (!email) {
        errors.email = 'true';
    }
    if (!firstname) {
        errors.firstname = 'true';
    }
    if (!lastname) {
        errors.lastname = 'true';
    }
    if (!specialization) {
        errors.specialization = 'true';
    }
    return errors;
};

function reducer(state, action) {
    switch (action.type) {
        case 'setFirstname': {
            return { ...state, firstname: action.payload };
        }
        case 'setLastname': {
            return { ...state, lastname: action.payload };
        }
        case 'setEmail': {
            return { ...state, email: action.payload };
        }
        case 'setSpecialization': {
            return { ...state, specialization: action.payload };
        }
        case 'setDateOfBirth': {
            return { ...state, dateOfBirth: action.payload };
        }
        case 'setAddress': {
            return { ...state, address: action.payload };
        }
        default:
            return state;
    }
}

export function Registration({ rol, imgSrc }) {
    const formInitialState =
        rol === ROLS.TRAINER
            ? {
                  firstname: '',
                  lastname: '',
                  email: '',
                  specialization: '',
              }
            : {
                  firstname: '',
                  lastname: '',
                  email: '',
                  dateOfBirth: '',
                  address: '',
              };
    const [formState, formDispatch] = useReducer(reducer, formInitialState);
    const [formErrors, setFormErrors] = useState(formInitialState);
    const [formStatus, setFormStatus] = useState(FORM_STATUS.IDLE);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const handleFirstnameChange = (e) => {
        formDispatch({ type: 'setFirstname', payload: e.target.value });
    };
    const handleLastnameChange = (e) => {
        formDispatch({ type: 'setLastname', payload: e.target.value });
    };
    const handleEmailChange = (e) => {
        formDispatch({ type: 'setEmail', payload: e.target.value });
    };
    const handleSpecializationChange = (e) => {
        formDispatch({ type: 'setSpecialization', payload: e.target.value });
    };
    const handleDateOfBirthChange = (e) => {
        formDispatch({ type: 'setDateOfBirth', payload: e.target.value });
    };
    const handleAddressChange = (e) => {
        formDispatch({ type: 'setAddress', payload: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateInputs({ formState });
        setFormErrors(errors);
        const hasErrors = Object.values(errors).some((error) => error);
        if (hasErrors) {
            setFormStatus(FORM_STATUS.INVALID);
            setButtonDisabled(true);
            return;
        }
        setFormStatus(FORM_STATUS.VALID);
    };
    return (
        <section className="registration__container">
            <h1 className="header">Registration</h1>
            <p className="capitalize gray">{rol}</p>
            <form className="registration__form" onSubmit={handleSubmit}>
                <div className="registration__form__img">
                    <img src={imgSrc} alt="a person reading something" />
                </div>
                <div className="registration__form__subcontainer">
                    <div className="registration__form__subcontainer__inputs">
                        <Input
                            label={REG_FORM.FIRST_NAME}
                            placeholder={REG_FORM.PLACEHOLDER}
                            value={formState.firstname}
                            onChange={handleFirstnameChange}
                            error={formErrors.firstname}
                        />
                        <Input
                            label={REG_FORM.LAST_NAME}
                            placeholder={REG_FORM.PLACEHOLDER}
                            value={formState.lastname}
                            onChange={handleLastnameChange}
                            error={formErrors.lastname}
                        />
                        <Input
                            label={REG_FORM.EMAIL}
                            placeholder={REG_FORM.PLACEHOLDER}
                            value={formState.email}
                            onChange={handleEmailChange}
                            error={formErrors.email}
                        />
                        {rol === ROLS.TRAINER ? (
                            <div
                                className={
                                    formErrors.specialization
                                        ? 'textbox textbox--error'
                                        : 'textbox'
                                }
                            >
                                <label
                                    className="label"
                                    htmlFor={REG_FORM.SPECIALIZATION}
                                >
                                    {REG_FORM.SPECIALIZATION}
                                </label>
                                <select
                                    id={REG_FORM.SPECIALIZATION}
                                    name={REG_FORM.SPECIALIZATION}
                                    value={formState.specialization}
                                    onChange={handleSpecializationChange}
                                >
                                    <option value="" hidden>
                                        {REG_FORM.SELECT_PLACEHOLDER}
                                    </option>
                                    <option value="specialization1">
                                        specialization1
                                    </option>
                                </select>
                            </div>
                        ) : (
                            <>
                                <Input
                                    label={REG_FORM.DATE_OF_BIRTH}
                                    placeholder={REG_FORM.PLACEHOLDER}
                                    value={formState.dateOfBirth}
                                    onChange={handleDateOfBirthChange}
                                    error={formErrors.dateOfBirth}
                                    type="date"
                                />
                                <Input
                                    label={REG_FORM.ADDRESS}
                                    placeholder={REG_FORM.PLACEHOLDER}
                                    value={formState.address}
                                    onChange={handleAddressChange}
                                    error={formErrors.address}
                                />
                            </>
                        )}
                    </div>
                    <Button type={BUTTONS.SUBMIT} disabled={buttonDisabled}>
                        {BUTTONS.SUBMIT}
                    </Button>
                </div>
            </form>
        </section>
    );
}

Registration.propTypes = {
    rol: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
};
