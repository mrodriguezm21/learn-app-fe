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
};
Input.defaultProps = {
    type: 'text',
    label: '',
    width: '100%',
    error: '',
};
