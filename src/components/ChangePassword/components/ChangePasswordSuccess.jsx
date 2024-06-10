import { useNavigate } from 'react-router-dom';
import { Button } from '../../../common';
import { BUTTONS } from '../../../constants';
import './ChangePasswordSuccess.css';

export function ChangePasswordSuccess() {
    const navigate = useNavigate();
    const handleSignIn = () => {
        navigate('/login');
    };
    return (
        <section className="change-password-success">
            <h1 className="header">Password Changed</h1>
            <svg
                width="60"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="74" height="74" rx="37" fill="#17A948" />
                <path
                    d="M19.7586 37.0001L31.8276 49.0691L54.2414 26.6553"
                    stroke="white"
                    strokeWidth="2.06897"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                />
            </svg>
            <p>Please proceed sign in with new password</p>
            <Button onClick={handleSignIn}>{BUTTONS.SIGN_IN}</Button>
        </section>
    );
}
