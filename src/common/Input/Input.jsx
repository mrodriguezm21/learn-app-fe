import './Input.css';
import PropTypes from 'prop-types';
import hideIcon from '../../assets/hide.svg';
import showIcon from '../../assets/show.svg';

export function Input({
    type,
    placeholder,
    value,
    onChange,
    width,
    label,
    error,
    toggleIconPassword,
    isPassword,
}) {
    return (
        <div
            className={error ? 'textbox textbox--error' : 'textbox'}
            style={{ width }}
        >
            {label ? (
                <label className="label" htmlFor={label}>
                    {label}
                </label>
            ) : null}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                id={label}
                name={label}
            />
            {isPassword &&
                (type === 'password' ? (
                    <button
                        type="button"
                        tabIndex="-1"
                        onClick={toggleIconPassword}
                        className="textbox-button"
                    >
                        <img
                            src={showIcon}
                            alt="show icon"
                            className="textbox-icon"
                        />
                    </button>
                ) : (
                    <button
                        type="button"
                        tabIndex="-1"
                        onClick={toggleIconPassword}
                        className="textbox-button"
                    >
                        <img
                            src={hideIcon}
                            alt="hide icon"
                            className="textbox-icon"
                        />
                    </button>
                ))}
        </div>
    );
}

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    label: PropTypes.string,
    width: PropTypes.string,
    error: PropTypes.string,
    isPassword: PropTypes.bool,
    toggleIconPassword: PropTypes.func,
};
Input.defaultProps = {
    type: 'text',
    label: '',
    width: '100%',
    error: '',
    isPassword: false,
    toggleIconPassword: () => {},
};
