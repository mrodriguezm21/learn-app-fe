import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../common/index';
import './RegistrationSuccess.css';
import {
    actionResetRegister,
    selectRegisterInfo,
} from '../../../../store/registerSlice';

export function RegistrationSuccess() {
    const { username, password } = useSelector(selectRegisterInfo);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleMyAccount = () => {
        dispatch(actionResetRegister());
        navigate('/my-account');
    };
    return (
        <section className="registration__success">
            <h1 className="header">Registration</h1>
            <svg
                width="60"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="74" height="74" rx="37" fill="#36B584" />
                <path
                    d="M19.7586 37.0001L31.8276 49.0691L54.2414 26.6553"
                    stroke="white"
                    strokeWidth="2.06897"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                />
            </svg>

            <p className="registration__success__text">
                Congratulations, you have successfully registered with Learn
                Platform! Here is your credentials that you can change in your
                account
            </p>
            <div className="registration__success__userInfo">
                <div className="registration__success__userInfo__username">
                    <span className="bold">Username</span>
                    <p>{username || 'username'}</p>
                </div>
                <div className="registration__success__userInfo__password">
                    <span className="bold">Password</span>
                    <p>{password || 'password'}</p>
                </div>
            </div>
            <Button onClick={handleMyAccount}>My account</Button>
        </section>
    );
}
