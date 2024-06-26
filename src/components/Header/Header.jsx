import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Skeleton } from '@mui/material';
import { Button, Logo } from '../../common';
import './Header.css';
import { BUTTONS, BUTTONS_VARIANTS, URL_PATHS } from '../../constants';
import { SideNav } from './components/SideNav/SideNav';
import optionsIcon from '../../assets/menu-dots.svg';
import { selectAuth, selectUserInfo } from '../../store/authSlice';
import { MiniProfile } from './components/MiniProfile/MiniProfile';

function checkloginStatus() {
    return Boolean(localStorage.getItem('token'));
}

export function Header() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const loginStatus = checkloginStatus();
    const { isAuth } = useSelector(selectAuth);
    const { username } = useSelector(selectUserInfo);
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const [isMiniProfileOpen, setIsMiniProfileOpen] = useState(false);

    const handleBlog = () => {
        navigate('blog');
    };
    const handlePricing = () => {
        navigate('pricing');
    };
    const handleAboutUs = () => {
        navigate('about-us');
    };
    const handleLogin = () => {
        navigate('login');
    };
    const handleJoinUs = () => {
        navigate('join-us');
    };
    const handleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
    };

    const handleMiniProfile = () => {
        setIsMiniProfileOpen(!isMiniProfileOpen);
        document.body.style.overflow = isMiniProfileOpen ? 'auto' : 'hidden';
    };

    return (
        <header>
            <SideNav
                closeHandler={handleSideNav}
                isSideNavOpen={isSideNavOpen}
            />
            <button
                type="button"
                onClick={handleSideNav}
                className="setting-icon"
            >
                <img src={optionsIcon} alt="setting icon" />
            </button>
            <Link to="/" className="header__link">
                <Logo />
            </Link>
            <div className="header__nav">
                <nav className="header__nav">
                    <ul className="header__nav__menu">
                        <li>
                            <button
                                className="header__nav__menu__item"
                                type="button"
                                onClick={handleBlog}
                            >
                                Blog
                            </button>
                        </li>
                        <li>
                            <button
                                className="header__nav__menu__item"
                                type="button"
                                onClick={handlePricing}
                            >
                                Pricing
                            </button>
                        </li>
                        <li>
                            <button
                                className="header__nav__menu__item"
                                type="button"
                                onClick={handleAboutUs}
                            >
                                About us
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            {!loginStatus && pathname !== URL_PATHS.LOGIN && (
                <aside className="header__nav__log-buttons">
                    <Button
                        variant={BUTTONS_VARIANTS.INVERTED}
                        onClick={handleLogin}
                    >
                        {BUTTONS.SIGN_IN}
                    </Button>
                    <Button onClick={handleJoinUs}>{BUTTONS.JOIN_US}</Button>
                </aside>
            )}
            {loginStatus && !isAuth && (
                <div className="header__info-menu">
                    <Skeleton variant="text" width={70} height={30} />
                    <Skeleton variant="circular" width={51} height={51} />
                </div>
            )}
            {isAuth && (
                <div className="header__info-menu">
                    {!isMiniProfileOpen && (
                        <>
                            <span> {username}</span>
                            <button
                                type="button"
                                onClick={handleMiniProfile}
                                className="header__info-menu__img"
                            >
                                <img
                                    src="https://placehold.co/100x100"
                                    alt="profile pic"
                                />
                            </button>
                        </>
                    )}
                    {isMiniProfileOpen && (
                        <MiniProfile closeHandler={handleMiniProfile} />
                    )}
                </div>
            )}
        </header>
    );
}
