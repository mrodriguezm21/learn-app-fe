import './SideNav.css';
import xmark from '../../../assets/xmark.svg';

export function SideNav() {
    return (
        <aside className="sidenav">
            <div className="sidenav__user">
                <img src="" alt="" />
                <span>username</span>
                <span>email</span>
                <span>
                    <img src={xmark} alt="" />
                </span>
            </div>
            <ul className="sidenav__list">
                <li className="sidenav__list__item">Blog</li>
                <li className="sidenav__list__item">Pricing</li>
                <li className="sidenav__list__item">About Us</li>
                <li className="sidenav__list__item">My Account</li>
            </ul>
            <div className="sidenav__signout">
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
            </div>
        </aside>
    );
}
