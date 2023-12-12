import PropTypes from 'prop-types';
import './Button.css';

export function Button({
    onClick,
    children,
    type = 'button',
    variant = 'text',
}) {
    return (
        <button
            onClick={onClick}
            type={type === 'button' ? 'button' : 'submit'}
            className={`button${variant === 'text' ? ' text-button' : ''}`}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    variant: PropTypes.string,
    type: PropTypes.string,
};

Button.defaultProps = {
    onClick: () => {},
    type: 'button',
    variant: 'text',
};
