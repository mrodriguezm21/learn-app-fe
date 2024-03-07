import PropTypes from 'prop-types';
import './Box.css';

export function Box({ imgSrc, imgAlt, header, tag, timeToRead, date }) {
    return (
        <article className="box">
            <img src={imgSrc} alt={imgAlt} />
            <div className="box__content">
                <p className="box__content__tag">{tag}</p>
                <h3 className="box__content__title">{header}</h3>
                <div className="box__content__footer">
                    <p>{date}</p>
                    <p className="box__content__footer__duration">{`${timeToRead} mins read`}</p>
                </div>
            </div>
        </article>
    );
}

Box.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
    date: PropTypes.string,
};

Box.defaultProps = {
    date: 'Dec 24, 2022',
};
