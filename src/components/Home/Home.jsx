import './Home.css';
import { useNavigate } from 'react-router-dom';
import dottedRectangle from '../../assets/dotted-rectangle.svg';
import player from '../../assets/player-img.png';
import { Button } from '../../common';
import { BUTTONS } from '../../constants';

export function Home() {
    const navigate = useNavigate();
    const handleJoinUs = () => {
        navigate('/join-us');
    };
    return (
        <>
            <section className="home__learning">
                <article className="home__learning__text">
                    <h1 className="header">Let&apos;s start learning</h1>
                    <p>
                        Welcome to learn platform - where every day is a day to
                        learn. Dive into the vast ocean of knowledge and empower
                        yourself with the tools for a succesfull tomorrow. Happy
                        learning!
                    </p>
                </article>
                <div className="home__player">
                    <img src={player} alt="player pic" />
                </div>
            </section>
            <section className="home__join-us">
                <div className="home__join-us__top-dr">
                    <img src={dottedRectangle} alt="dotted rectangle" />
                </div>
                <div className="home__join-us__border-circle">
                    <svg
                        width="481"
                        height="481"
                        viewBox="0 0 481 481"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M240.5 465C364.488 465 465 364.488 465 240.5C465 116.512 364.488 16 240.5 16C116.512 16 16 116.512 16 240.5C16 364.488 116.512 465 240.5 465ZM240.5 481C373.324 481 481 373.324 481 240.5C481 107.676 373.324 0 240.5 0C107.676 0 0 107.676 0 240.5C0 373.324 107.676 481 240.5 481Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <article className="home__join-us__text">
                    <h2 className="header">Join us</h2>
                    <p>
                        Qui ut exercitation officia proident enim non tempor
                        tempor ipsum ex nulla ea adipisicing sit consequat enim
                        elit cupidatat o
                    </p>
                    <Button width="15%" onClick={handleJoinUs}>
                        {BUTTONS.JOIN_US}
                    </Button>
                </article>
                <div className="oval" />
                <div className="home__join-us__bottom-dr">
                    <img src={dottedRectangle} alt="dotted rectangle" />
                </div>
            </section>
        </>
    );
}
