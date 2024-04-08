import './ChangePassword.css';
import { useReducer, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Input } from '../../common/Input/Input';
import lock from '../../assets/lock.svg';
import { BUTTONS, BUTTONS_VARIANTS, PASS_FORM } from '../../constants';
import { Button } from '../../common';
import { changePassword } from '../../store/passwordSlice';

function reducer(state, action) {
    switch (action.type) {
        case 'currentPassword': {
            return { ...state, currentPassword: action.payload };
        }
        case 'newPassword': {
            return { ...state, newPassword: action.payload };
        }
        case 'confirmNewPassword': {
            return { ...state, confirmNewPassword: action.payload };
        }
        default:
            return state;
    }
}
const validateInputs = ({ formState, setButtonDisabled }) => {
    const { currentPassword, newPassword, confirmNewPassword } = formState;
    const errors = {
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    };
    if (!currentPassword) {
        errors.currentPassword = 'true';
    }
    if (!newPassword) {
        errors.newPassword = 'true';
    }
    if (!confirmNewPassword) {
        errors.confirmNewPassword = 'true';
    }
    const isValid = Object.values(errors).some((error) => !error);
    if (isValid) {
        setButtonDisabled(false);
    }
    return errors;
};
export function ChangePassword() {
    const dispatch = useDispatch();
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [inputTypes, setInputTypes] = useState({
        currentPassword: 'password',
        newPassword: 'password',
        confirmNewPassword: 'password',
    });
    const [formState, formDispatch] = useReducer(reducer, {
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    });
    const [formErrors, setFormErrors] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    });
    const changeType = (input) => {
        setInputTypes({
            ...inputTypes,
            [input]: inputTypes[input] === 'password' ? 'text' : 'password',
        });
    };
    const handleCurrentPasswordChange = (e) => {
        setFormErrors({ ...formErrors, currentPassword: '' });
        validateInputs({ formState, setButtonDisabled });
        formDispatch({ type: 'currentPassword', payload: e.target.value });
    };
    const handleNewPasswordChange = (e) => {
        setFormErrors({ ...formErrors, newPassword: '' });
        validateInputs({ formState, setButtonDisabled });
        formDispatch({ type: 'newPassword', payload: e.target.value });
    };
    const handleConfirmNewPasswordChange = (e) => {
        setFormErrors({ ...formErrors, confirmNewPassword: '' });
        validateInputs({ formState, setButtonDisabled });
        formDispatch({ type: 'confirmNewPassword', payload: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateInputs({ formState, setButtonDisabled });
        const hasErrors = Object.values(errors).some((error) => error);
        setFormErrors(errors);
        if (hasErrors) {
            setButtonDisabled(true);
            return;
        }
        if (formState.newPassword !== formState.confirmNewPassword) {
            toast.error('Passwords do not match', {
                style: {
                    backgroundColor: '#ff4d4f',
                    color: '#fff',
                },
                duration: 1000,
            });
            setButtonDisabled(true);
            return;
        }
        dispatch(changePassword({ newPassword: formState.newPassword }));
    };
    return (
        <section className="change-password">
            <h1 className="subheader">Security</h1>
            <form className="change-password__form" onSubmit={handleSubmit}>
                <div className="change-password__form_left-box">
                    <img src={lock} alt="lock icon" />
                    <h3>Change Password</h3>
                </div>
                <div className="change-password__form_right-box">
                    <Input
                        type={inputTypes.currentPassword}
                        label={PASS_FORM.CURRENT_PASSWORD}
                        value={formState.currentPassword}
                        onChange={handleCurrentPasswordChange}
                        placeholder={PASS_FORM.CURRENT_PASSWORD}
                        toggleIconPassword={() => changeType('currentPassword')}
                        isPassword
                    />
                    <Input
                        type={inputTypes.newPassword}
                        label={PASS_FORM.NEW_PASSWORD}
                        value={formState.newPassword}
                        onChange={handleNewPasswordChange}
                        placeholder={PASS_FORM.NEW_PASSWORD_PLACEHOLDER}
                        toggleIconPassword={() => changeType('newPassword')}
                        isPassword
                    />
                    <Input
                        type={inputTypes.confirmNewPassword}
                        label={PASS_FORM.CONFIRM_NEW_PASSWORD}
                        value={formState.confirmNewPassword}
                        onChange={handleConfirmNewPasswordChange}
                        placeholder={PASS_FORM.CONFIRM_NEW_PASSWORD_PLACEHOLDER}
                        toggleIconPassword={() =>
                            changeType('confirmNewPassword')
                        }
                        isPassword
                    />
                    <div className="change-password__form__button-box">
                        <Button variant={BUTTONS_VARIANTS.TERTIARY}>
                            {BUTTONS.CANCEL}
                        </Button>
                        <Button type="submit" disabled={buttonDisabled}>
                            {BUTTONS.CHANGE_PASSWORD}
                        </Button>
                    </div>
                </div>
            </form>
        </section>
    );
}
