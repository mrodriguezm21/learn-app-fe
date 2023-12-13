import PropTypes from 'prop-types';
import './Button.css';

export function Button({
    onClick,
    children,
    type = 'button',
    variant = '',
    width = '100%',
}) {
    return (
        <button
            onClick={onClick}
            type={type === 'button' ? 'button' : 'submit'}
            className={variant ? `button button--${variant}` : 'button'}
            style={{ width }}
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
};

Button.defaultProps = {
    onClick: () => {},
    type: 'button',
    variant: '',
    width: '100%',
};
