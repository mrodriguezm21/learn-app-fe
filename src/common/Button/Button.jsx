import PropTypes from 'prop-types';
import './Button.css';

export function Button({
    onClick,
    children,
    variant = 'text',
    type = 'button',
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
    variant: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
