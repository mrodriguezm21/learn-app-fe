import logo from '../../assets/logo.png';
import './Logo.css';

export function Logo() {
    return (
        <div className="logo__container">
            <img src={logo} alt="logo" />
            <span>learn</span>
        </div>
    );
}
