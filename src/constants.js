export const SPECIALIZATIONS = ['Java', 'PHP', 'SP1', 'SP2'];
export const REGEXS = {
    ALPHABET: /^[a-zA-Z]+$/,
    ALPHANUMERIC: /^[a-zA-Z0-9\s{1}]*$/,
    NUMBERS: /^\d*$/,
    EMAIL: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
};
export const ROLS = {
    TRAINER: 'trainer',
    STUDENT: 'student',
};

export const BUTTONS = {
    SIGN_IN: 'Sign In',
    JOIN_US: 'Join us',
    SUBSCRIBE: 'Subscribe',
    SUBMIT: 'Submit',
    EDIT_PROFILE: 'Edit profile',
    CHANGE_PASSWORD: 'Change password',
    DELETE_PROFILE: 'Delete profile',
    ADD_TRAINER: 'Add trainer',
};

export const BUTTONS_VARIANTS = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    TERTIARY: 'tertiary',
    QUATERNARY: 'quaternary',
};

export const LOG_FORM = {
    LOGIN: 'Login',
    JOIN_US: 'Join us',
    USERNAME: 'User name',
    USERNAME_PLACEHOLDER: 'Enter ema',
    EMAIL: 'Email',
    PASSWORD: 'Password',
    PASSWORD_PLACEHOLDER: 'Enter password',
    SIGNIN: 'Sign In',
    REGISTER: 'Register',
};
export const REG_FORM = {
    FIRST_NAME: 'First name',
    LAST_NAME: 'Last name',
    EMAIL: 'Email',
    SPECIALIZATION: 'Specialization',
    DATE_OF_BIRTH: 'Date of birth (optional)',
    ADDRESS: 'Address (optional)',
    PLACEHOLDER: 'Input text',
    SELECT_PLACEHOLDER: 'Please select',
};

export const ERRORS = {
    EMAIL_TAKEN: 'Email is already taken',
};
export const FORM_STATUS = {
    IDLE: 'idle',
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
};

export const FOOTER_CONSTANTS = {
    INPUT: 'Input your email',
    BUTTON: 'Subscribe',
};

export const URL_PATHS = {
    LOGIN: '/login',
};

export const STATUS = {
    IDLE: 'idle',
    LOADING: 'loading',
    SUCCEEDED: 'succeeded',
    FAILED: 'failed',
};
