import { useState, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from '../../common';
import './Login.css';
import { FORM_STATUS, LOG_FORM } from '../../constants';

function reducer(state, action) {
    switch (action.type) {
        case 'setUsername': {
            return { ...state, username: action.payload };
        }
        case 'setPassword': {
            return { ...state, password: action.payload };
        }
        default:
            return state;
    }
}

const validateInputs = ({ formState }) => {
    const { email: username, password } = formState;
    const errors = {
        username: '',
        password: '',
    };
    if (!username) {
        errors.username = true;
    }
    if (!password) {
        errors.password = true;
    }
    return errors;
};

export function Login() {
    const [formState, formDispatch] = useReducer(reducer, {
        username: '',
        password: '',
    });
    const [formErrors, setFormErrors] = useState({
        username: false,
        password: false,
    });
    const [formStatus, setFormStatus] = useState(FORM_STATUS.IDLE);

    const handleUsernameChange = (e) => {
        formDispatch({ type: 'setUsername', payload: e.target.value });
    };
    const handlePasswordChange = (e) => {
        formDispatch({ type: 'setPassword', payload: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="signin__container">
            <h1 className="signin__header">Sign in</h1>
            <span className="signin__subheader">Welcome back</span>
            <form className="signin__form" onSubmit={handleSubmit}>
                <Input
                    type="text"
                    label={LOG_FORM.USERNAME}
                    value={formState.username}
                    onChange={handleUsernameChange}
                    placeholder={LOG_FORM.USERNAME_PLACEHOLDER}
                />
                <Input
                    type="password"
                    label={LOG_FORM.PASSWORD}
                    value={formState.password}
                    onChange={handlePasswordChange}
                    placeholder={LOG_FORM.PASSWORD_PLACEHOLDER}
                />
                <Button type="submit"> {LOG_FORM.SIGNIN} </Button>
            </form>
            <div className="signin__register-section">
                <span className="signin__register-section__first-line">OR</span>
                <span>
                    Don&apos;t have an account?{' '}
                    <Link
                        to="/register"
                        className="signin__register-section__register-link"
                    >
                        Sign up
                    </Link>
                </span>
            </div>
        </div>
    );
}
