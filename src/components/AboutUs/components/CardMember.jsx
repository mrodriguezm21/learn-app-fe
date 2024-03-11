import PropTypes from 'prop-types';
import './CardMember.css';

export function CardMember({ imgSrc, name, profession, description }) {
    return (
        <article className="card-member">
            <img src={imgSrc} className="card-member__image" alt="" />
            <div>
                <h3 className="card-member__name">{name}</h3>
                <p className="card-member__profession">{profession}</p>
                <p className="card-member__description">{description}</p>
            </div>
        </article>
    );
}

CardMember.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
