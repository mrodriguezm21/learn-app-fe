import PropTypes from 'prop-types';
import { Button } from '../../../common';
import { LOG_FORM } from '../../../constants';
import './JoinUsBox.css';

export function JoinUsBox({ rol, imgSrc }) {
    return (
        <section className="join-us__box">
            <div className="join-us__box__content">
                <h2>Register as {rol}</h2>
                <p>
                    Do consectetur proident proident id eiusmod deserunt
                    consequat pariatur ad ex velit do Lorem reprehenderit.
                </p>
                <Button width="25%">{LOG_FORM.JOIN_US}</Button>
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
