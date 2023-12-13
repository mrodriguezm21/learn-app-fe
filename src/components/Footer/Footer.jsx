import { useState } from 'react';
import { Button, Input, Logo } from '../../common';
import './Footer.css';
import { FOOTER_CONSTANTS } from '../../constants';

export function Footer() {
    const [email, setEmail] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    return (
        <footer>
            <Logo />
            <div className="footer__product">
                <h3>Product</h3>
                <ul className="footer_ul">
                    <li>Features</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className="footer__resources">
                <h3>Resources</h3>
                <ul className="footer_ul">
                    <li>Blog</li>
                    <li>User guides</li>
                    <li>Webinars</li>
                </ul>
            </div>
            <div className="footer_company">
                <h3>Company</h3>
                <ul className="footer_ul">
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className="footer__social" />
            <div className="footer__select">
                <select name="" id="">
                    <option value="">English</option>
                    <option value="">Spanish</option>
                </select>
            </div>
            <div className="footer__newsletter">
                <h3>Susbcribe to our newsletter</h3>
                <p>For product announcements and exclusive insights</p>
                <div className="footer__newsletter__form">
                    <Input
                        type="email"
                        width="70%"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder={FOOTER_CONSTANTS.INPUT}
                    />
                    <Button>{FOOTER_CONSTANTS.BUTTON}</Button>
                </div>
            </div>
            <div className="footer__legal">
                <p>© 2023 Learn, Inc.</p>
                <ul className="footer_ul">
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
            </div>
        </footer>
    );
}
