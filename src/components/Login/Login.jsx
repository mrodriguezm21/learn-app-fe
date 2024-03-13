import { useState, useReducer, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button } from '../../common';
import './Login.css';
import { FORM_STATUS, LOG_FORM, REGEXS, STATUS } from '../../constants';
import { selectAuth, login } from '../../store/authSlice';

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

const validateInputs = ({
    formState,
    setButtonDisabled,
    checkRegex = false,
}) => {
    const { username, password } = formState;
    const errors = {
        username: '',
        password: '',
    };
    if (!username) {
        errors.username = 'true';
    }
    if (!password) {
        errors.password = 'true';
    }
    if (checkRegex) {
        if (!REGEXS.EMAIL.test(username)) {
            errors.username = 'true';
        }
    }
    const isValid = Object.values(errors).some((error) => !error);
    if (isValid) {
        setButtonDisabled(false);
    }
    return errors;
};

export function Login() {
    const { isAuth, statusLogin } = useSelector(selectAuth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) {
            navigate('/');
        }
    }, [isAuth, navigate]);
    const [formState, formDispatch] = useReducer(reducer, {
        username: '',
        password: '',
    });
    const [formErrors, setFormErrors] = useState({
        username: '',
        password: '',
    });
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleUsernameChange = (e) => {
        setFormErrors({ ...formErrors, username: '' });
        validateInputs({ formState, setButtonDisabled });
        formDispatch({ type: 'setUsername', payload: e.target.value });
    };
    const handlePasswordChange = (e) => {
        setFormErrors({ ...formErrors, password: '' });
        validateInputs({ formState, setButtonDisabled });
        formDispatch({ type: 'setPassword', payload: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateInputs({
            formState,
            setButtonDisabled,
            checkRegex: true,
        });
        const hasErrors = Object.values(errors).some((error) => error);
        setFormErrors(errors);
        if (hasErrors) {
            setButtonDisabled(true);
            return;
        }
        const loginForm = {
            email: formState.username,
            password: formState.password,
        };
        dispatch(login(loginForm));
        if (formState === !FORM_STATUS.ERROR) {
            navigate('/');
        }
    };
    return (
        <div className="signin__container">
            <h1 className="signin__header">Sign in</h1>
            <span className="signin__subheader">Welcome back</span>
            <form className="signin__form" onSubmit={handleSubmit}>
                <Input
                    label={LOG_FORM.USERNAME}
                    value={formState.username}
                    onChange={handleUsernameChange}
                    placeholder={LOG_FORM.USERNAME_PLACEHOLDER}
                    error={formErrors.username}
                />
                <Input
                    type="password"
                    label={LOG_FORM.PASSWORD}
                    value={formState.password}
                    onChange={handlePasswordChange}
                    placeholder={LOG_FORM.PASSWORD_PLACEHOLDER}
                    error={formErrors.password}
                />
                <Button
                    type="submit"
                    disabled={buttonDisabled || statusLogin === STATUS.LOADING}
                >
                    {LOG_FORM.SIGNIN}
                </Button>
            </form>
            <div className="signin__register-section">
                <span className="signin__register-section__first-line">OR</span>
                <p>
                    Don&apos;t have an account?{' '}
                    <Link
                        to="/join-us"
                        className="signin__register-section__register-link"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
