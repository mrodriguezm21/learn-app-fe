import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './MiniProfile.css';
import { logout, selectAuth } from '../../../../store/authSlice';

export function MiniProfile({ closeHandler }) {
    const dispatch = useDispatch();
    const { username, email } = useSelector(selectAuth);
    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            closeHandler();
        }
    };
    const handleSignout = () => {
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
