import './SideNav.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import xmark from '../../../../assets/xmark.svg';
import { logout, selectAuth } from '../../../../store/authSlice';

export function SideNav({ closeHandler, isSideNavOpen }) {
    const dispatch = useDispatch();
    const { username, email } = useSelector(selectAuth);
    const handleSignout = () => {
        closeHandler();
        dispatch(logout());
    };
    return (
        <div
            className="sidenav__container"
            style={{ left: isSideNavOpen ? '0' : '-100%' }}
        >
            <aside className="sidenav">
                <div className="sidenav__top-container">
                    <div className="sidenav__user">
                        <img
                            className="sidenav__user__avatar"
                            src="https://placehold.co/100x100"
                            alt="profile pic"
                        />
                        <div className="sidenav__user__data">
                            <span className="bold">{username}</span>
                            <span className="sidenav__user__data__email">
                                {email}
                            </span>
                        </div>
                        <button
                            type="button"
                            className="sidenav__user__xmark"
                            onClick={closeHandler}
                        >
                            <img src={xmark} alt="xmark to close the sidenav" />
                        </button>
                    </div>
                    <ul className="sidenav__list">
                        <li className="sidenav__list__item">Blog</li>
                        <li className="sidenav__list__item">Pricing</li>
                        <li className="sidenav__list__item">About Us</li>
                        <li className="sidenav__list__item">My Account</li>
                    </ul>
                </div>
                <button
                    type="button"
                    className="sidenav__signout"
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
            </aside>
            <div className="off__sidenav">
                <button
                    type="button"
                    onClick={closeHandler}
                    aria-label="Close"
                />
            </div>
        </div>
    );
}

SideNav.propTypes = {
    closeHandler: PropTypes.func.isRequired,
    isSideNavOpen: PropTypes.bool.isRequired,
};
