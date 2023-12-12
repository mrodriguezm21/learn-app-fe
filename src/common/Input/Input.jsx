import './Input.css';
import PropTypes from 'prop-types';

export function Input({
    type,
    placeholder,
    value,
    onChange,
    width,
    label,
    error,
}) {
    return (
        <div className="textbox" style={{ width }}>
            <label className="label" htmlFor={label}>
                {label}
            </label>
            {error && <span className="input__error">{error}</span>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                id={label}
                name={label}
            />
        </div>
    );
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    width: PropTypes.string,
    error: PropTypes.string,
};
Input.defaultProps = {
    width: '100%',
    error: '',
};
