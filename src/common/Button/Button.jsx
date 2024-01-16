import PropTypes from 'prop-types';
import './Button.css';

export function Button({
    onClick,
    children,
    type = 'button',
    variant = '',
    disabled = false,
}) {
    return (
        <button
            onClick={onClick}
            type={type === 'button' ? 'button' : 'submit'}
            className={variant ? `button button--${variant}` : 'button'}
            disabled={disabled}
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
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    onClick: () => {},
    type: 'button',
    variant: '',
    disabled: false,
};
