import { Link, useNavigate } from 'react-router-dom';
import { Button, Logo } from '../../common';
import './Header.css';
import { BUTTONS } from '../../constants';

export function Header() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    };
    const handleJoinUs = () => {
        navigate('/join-us');
    };
    return (
        <header>
            <Link to="/" style={{ width: '20%' }}>
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
