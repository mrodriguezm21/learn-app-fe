import { Link } from 'react-router-dom';
import { Button, Logo } from '../../common';
import './Header.css';
import { LOG_FORM } from '../../constants';

export function Header() {
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
                    <Button variant="tertiary">{LOG_FORM.LOGIN}</Button>
                    <Button>{LOG_FORM.JOIN_US}</Button>
                </aside>
            </div>
        </header>
    );
}
