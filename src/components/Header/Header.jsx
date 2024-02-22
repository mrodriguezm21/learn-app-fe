import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Logo } from '../../common';
import './Header.css';
import { BUTTONS } from '../../constants';
import { SideNav } from './components/SideNav/SideNav';
import optionsIcon from '../../assets/menu-dots.svg';
import { selectAuth } from '../Login/authSlice';
import { MiniProfile } from './components/MiniProfile/MiniProfile';

export function Header() {
    const navigate = useNavigate();
    const { isAuth, username } = useSelector(selectAuth);
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const [isMiniProfileOpen, setIsMiniProfileOpen] = useState(false);
    const handleLogin = () => {
        navigate('/login');
    };
    const handleJoinUs = () => {
        navigate('/join-us');
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
                        <li className="header__nav__menu__item">Blog</li>
                        <li className="header__nav__menu__item">Pricing</li>
                        <li className="header__nav__menu__item">About us</li>
                    </ul>
                </nav>
                {!isAuth && (
                    <aside className="header__nav__log-buttons">
                        <Button variant="tertiary" onClick={handleLogin}>
                            {BUTTONS.SIGN_IN}
                        </Button>
                        <Button onClick={handleJoinUs}>
                            {BUTTONS.JOIN_US}
                        </Button>
                    </aside>
                )}
            </div>
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
