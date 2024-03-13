import PropTypes from 'prop-types';
import { useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input } from '../../common';
import {
    BUTTONS,
    REGEXS,
    REG_FORM,
    ROLS,
    SPECIALIZATIONS,
    STATUS,
} from '../../constants';
import './Registration.css';
import {
    actionResetRegister,
    registerStudent,
    registerTrainer,
    selectRegister,
} from '../../store/registerSlice';
import { useRegisterRedirect } from '../../hooks/useRegisterRedirect';

const validateInputs = ({
    formState,
    setButtonDisabled,
    checkRegex = false,
    role,
}) => {
    const { email, firstName, lastName, specialization } = formState;
    const errors = {
        email: '',
        firstName: '',
        lastName: '',
        specialization: '',
    };
    if (!email) {
        errors.email = 'true';
    }
    if (!firstName) {
        errors.firstName = 'true';
    }
    if (!lastName) {
        errors.lastName = 'true';
    }
    if (role === ROLS.TRAINER && !specialization) {
        errors.specialization = 'true';
    }
    if (checkRegex) {
        if (!REGEXS.EMAIL.test(email)) {
            errors.email = 'true';
        }
    }
    const isValid = Object.values(errors).some((error) => !error);
    if (isValid) {
        setButtonDisabled(false);
    }
    return errors;
};

function reducer(state, action) {
    switch (action.type) {
        case 'setFirstname': {
            return { ...state, firstName: action.payload };
        }
        case 'setLastname': {
            return { ...state, lastName: action.payload };
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
    const dispatch = useDispatch();
    useRegisterRedirect();
    const { statusRegister, errorRegister } = useSelector(selectRegister);

    const formInitialState =
        rol === ROLS.TRAINER
            ? {
                  firstName: '',
                  lastName: '',
                  email: '',
                  specialization: '',
              }
            : {
                  firstName: '',
                  lastName: '',
                  email: '',
                  dateOfBirth: '',
                  address: '',
              };
    const [formState, formDispatch] = useReducer(reducer, formInitialState);
    const [formErrors, setFormErrors] = useState(formInitialState);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const handleFirstnameChange = (e) => {
        setFormErrors({ ...formErrors, firstName: '' });
        validateInputs({ formState, setButtonDisabled });
        formDispatch({ type: 'setFirstname', payload: e.target.value });
    };
    const handleLastnameChange = (e) => {
        setFormErrors({ ...formErrors, lastName: '' });
        validateInputs({ formState, setButtonDisabled });
        formDispatch({ type: 'setLastname', payload: e.target.value });
    };
    const handleEmailChange = (e) => {
        setFormErrors({ ...formErrors, email: '' });
        if (statusRegister === STATUS.FAILED) {
            dispatch(actionResetRegister());
        }
        validateInputs({ formState, setButtonDisabled });
        formDispatch({ type: 'setEmail', payload: e.target.value });
    };
    const handleSpecializationChange = (e) => {
        setFormErrors({ ...formErrors, specialization: '' });
        validateInputs({ formState, setButtonDisabled });
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
        const errors = validateInputs({
            formState,
            setButtonDisabled,
            checkRegex: true,
            role: rol,
        });
        setFormErrors(errors);
        const hasErrors = Object.values(errors).some((error) => error);
        if (hasErrors) {
            setButtonDisabled(true);
            return;
        }
        if (rol === ROLS.TRAINER) {
            dispatch(registerTrainer(formState));
        } else {
            dispatch(registerStudent(formState));
        }
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
                            value={formState.firstName}
                            onChange={handleFirstnameChange}
                            error={formErrors.firstName}
                        />
                        <Input
                            label={REG_FORM.LAST_NAME}
                            placeholder={REG_FORM.PLACEHOLDER}
                            value={formState.lastName}
                            onChange={handleLastnameChange}
                            error={formErrors.lastName}
                        />
                        <Input
                            label={REG_FORM.EMAIL}
                            placeholder={REG_FORM.PLACEHOLDER}
                            value={formState.email}
                            onChange={handleEmailChange}
                            error={formErrors.email || errorRegister}
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
                                    {SPECIALIZATIONS.map((option) => (
                                        <option
                                            key={option}
                                            value={option.toLowerCase()}
                                        >
                                            {option}
                                        </option>
                                    ))}
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
                    <Button
                        type={BUTTONS.SUBMIT}
                        disabled={
                            buttonDisabled || statusRegister === STATUS.LOADING
                        }
                    >
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
