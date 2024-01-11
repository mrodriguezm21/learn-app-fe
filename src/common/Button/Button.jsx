import PropTypes from 'prop-types';
import './Button.css';

export function Button({
    onClick,
    children,
    type = 'button',
    variant = '',
    width = '100%',
    disabled = false,
}) {
    return (
        <button
            onClick={onClick}
            type={type === 'button' ? 'button' : 'submit'}
            className={variant ? `button button--${variant}` : 'button'}
            style={{ width }}
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
    width: PropTypes.string,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    onClick: () => {},
    type: 'button',
    variant: '',
    width: '100%',
    disabled: false,
};
