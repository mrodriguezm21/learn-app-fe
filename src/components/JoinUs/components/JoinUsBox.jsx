import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../common';
import { LOG_FORM } from '../../../constants';
import './JoinUsBox.css';

export function JoinUsBox({ rol, imgSrc }) {
    const navigate = useNavigate();
    const handleJoinUs = () => {
        navigate(`/join-us/${rol}`);
    };
    return (
        <section className="join-us__box">
            <div className="join-us__box__content">
                <h2>
                    Register as <span className="capitalize">{rol}</span>
                </h2>
                <p>
                    Do consectetur proident proident id eiusmod deserunt
                    consequat pariatur ad ex velit do Lorem reprehenderit.
                </p>
                <Button width="25%" onClick={handleJoinUs}>
                    {LOG_FORM.JOIN_US}
                </Button>
            </div>
            <div className="join-us__box__img">
                <img src={imgSrc} alt="group of people" />
            </div>
        </section>
    );
}

JoinUsBox.propTypes = {
    rol: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
};
