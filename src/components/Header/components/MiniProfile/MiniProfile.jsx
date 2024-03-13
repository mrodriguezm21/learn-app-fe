import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './MiniProfile.css';
import { useNavigate } from 'react-router';
import { logout, selectUserInfo } from '../../../../store/authSlice';

export function MiniProfile({ closeHandler }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { username, email } = useSelector(selectUserInfo);
    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            closeHandler();
        }
    };
    const handleMyAccount = () => {
        navigate('my-account');
        closeHandler();
    };
    const handleSignout = () => {
        navigate('/');
        closeHandler();
        dispatch(logout());
    };
    return (
        <div
            className="miniprofile__container"
            onClick={closeHandler}
            onKeyDown={handleKeyPress}
        >
            <div
                className="miniprofile"
                onClick={stopPropagation}
                onKeyDown={handleKeyPress}
            >
                <div className="miniprofile__user">
                    <img
                        className="miniprofile__user__avatar"
                        src="https://placehold.co/100x100"
                        alt="profile pic"
                    />
                    <div className="miniprofile__user__data">
                        <span>{username}</span>
                        <span className="gray">{email}</span>
                    </div>
                </div>
                <div className="miniprofile__menu">
                    <button
                        type="button"
                        className="miniprofile__menu__options"
                        onClick={handleMyAccount}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.9907 19.2815C17.8749 17.2346 16.7075 16.5849 15.0001 16.0158C13.6955 15.5812 13.3364 14.2115 13.2378 13.4846"
                                stroke="currentColor"
                                strokeWidth="2.05714"
                                strokeMiterlimit="10"
                            />
                            <path
                                d="M10.7615 13.4838C10.6647 14.2072 10.3124 15.5786 9.0001 16.0158C7.29267 16.5849 6.12353 17.2329 6.00781 19.2798"
                                stroke="currentColor"
                                strokeWidth="2.05714"
                                strokeMiterlimit="10"
                            />
                            <path
                                d="M11.9999 13.7143C10.1064 13.7143 8.57129 12.1791 8.57129 10.2857L8.57129 9.42857C8.57129 7.53514 10.1064 6 11.9999 6C13.8933 6 15.4284 7.53514 15.4284 9.42857V10.2857C15.4284 12.1791 13.8933 13.7143 11.9999 13.7143Z"
                                stroke="currentColor"
                                strokeWidth="2.05714"
                                strokeMiterlimit="10"
                                strokeLinecap="square"
                            />
                            <path
                                d="M11.9999 21.4286C17.2071 21.4286 21.4284 17.2072 21.4284 12C21.4284 6.79273 17.2071 2.57141 11.9999 2.57141C6.7926 2.57141 2.57129 6.79273 2.57129 12C2.57129 17.2072 6.7926 21.4286 11.9999 21.4286Z"
                                stroke="currentColor"
                                strokeWidth="2.05714"
                                strokeMiterlimit="10"
                                strokeLinecap="square"
                            />
                        </svg>
                        <span>My Account</span>
                    </button>
                </div>
                <button
                    type="button"
                    className="miniprofile__signout"
                    onClick={handleSignout}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        width="18"
                        viewBox="0 0 18 18"
                    >
                        <title>arrow door in</title>
                        <g
                            fill="currentColor"
                            stroke="currentColor"
                            className="nc-icon-wrapper"
                        >
                            <path
                                d="M7.25,5.75V3.25c0-.552,.448-1,1-1h6.5c.552,0,1,.448,1,1V14.75c0,.552-.448,1-1,1h-6.5c-.552,0-1-.448-1-1v-2.5"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                            />
                            <polyline
                                points="4 11.75 6.75 9 4 6.25"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                data-color="color-2"
                            />
                            <line
                                x1="6.75"
                                y1="9"
                                x2=".75"
                                y2="9"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                data-color="color-2"
                            />
                            <path
                                d="M15.543,2.648l-3.321,2.059c-.294,.182-.473,.504-.473,.85v6.887c0,.346,.179,.667,.473,.85l3.322,2.06"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                            />
                        </g>
                    </svg>
                    <span>Sign out</span>
                </button>
            </div>
        </div>
    );
}

MiniProfile.propTypes = {
    closeHandler: PropTypes.func.isRequired,
};
