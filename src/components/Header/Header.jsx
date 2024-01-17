import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button, Logo } from '../../common';
import './Header.css';
import { BUTTONS } from '../../constants';
import { SideNav } from './components/SideNav';
import optionsIcon from '../../assets/menu-dots.svg';

export function Header() {
    const navigate = useNavigate();
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const handleLogin = () => {
        navigate('/login');
    };
    const handleJoinUs = () => {
        navigate('/join-us');
    };
    const handleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
    };
    return (
        <header>
            {isSideNavOpen && <SideNav closeHandler={handleSideNav} />}
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
                <aside className="header__nav__log-buttons">
                    <Button variant="tertiary" onClick={handleLogin}>
                        {BUTTONS.SIGN_IN}
                    </Button>
                    <Button onClick={handleJoinUs}>{BUTTONS.JOIN_US}</Button>
                </aside>
            </div>
        </header>
    );
}
