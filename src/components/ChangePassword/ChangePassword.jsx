import './ChangePassword.css';
import { useReducer, useState } from 'react';
import { Input } from '../../common/Input/Input';
import lock from '../../assets/lock.svg';
import { BUTTONS, BUTTONS_VARIANTS, PASS_FORM } from '../../constants';
import { Button } from '../../common';

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
export function ChangePassword() {
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
    const changeType = (input) => {
        setInputTypes({
            ...inputTypes,
            [input]: inputTypes[input] === 'password' ? 'text' : 'password',
        });
    };
    const handleCurrentPasswordChange = (e) => {
        formDispatch({ type: 'currentPassword', payload: e.target.value });
    };
    const handleNewPasswordChange = (e) => {
        formDispatch({ type: 'newPassword', payload: e.target.value });
    };
    const handleConfirmNewPasswordChange = (e) => {
        formDispatch({ type: 'confirmNewPassword', payload: e.target.value });
    };
    return (
        <section className="change-password">
            <h1 className="subheader">Security</h1>
            <form className="change-password__form">
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
                        <Button type="submit">{BUTTONS.CHANGE_PASSWORD}</Button>
                    </div>
                </div>
            </form>
        </section>
    );
}
