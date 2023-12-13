export const ERRORS = {
    NAME: 'Name is required',
    EMAIL: 'Email is required',
    NOT_VALID_EMAIL: 'Email is not valid',
    PASSWORD: 'Password is required',
    PASSWORD_LENGTH: 'Password must be at least 6 characters',
    FORM: 'Form has errors',
    NULL_TITLE: 'Title is required',
    NULL_DESCRIPTION: 'Description is required',
    NULL_DURATION: 'Duration is required',
    NULL_AUTHORS: 'Authors is required',
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
export const REGEXS = {
    ALPHABET: /^[a-zA-Z]+$/,
    ALPHANUMERIC: /^[a-zA-Z0-9\s{1}]*$/,
    NUMBERS: /^\d*$/,
    EMAIL: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
};

export const FORM_STATUS = {
    IDLE: 'idle',
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
};

export const COURSE_FORM_CONSTANTS = {
    TITLE_INPUT_PLACEHOLDER: 'Enter title...',
    TITLE_INPUT_LABEL: 'Title',
    CREATE_COURSE_BUTTON: 'Create course',
    UPDATE_COURSE_BUTTON: 'Update course',
    TEXTAREA_PLACEHOLDER: 'Enter description...',
    CREATE_AUTHOR_BUTTON: 'Create author',
    CREATE_AUTHOR_LABEL: 'Author name',
    CREATE_AUTHOR_PLACEHOLDER: 'Enter author name...',
    DURATION_LABEL: 'Duration',
    DURATION_PLACEHOLDER: 'Enter duration in minutes...',
    AUTHOR_ITEM_ADD_BUTTON: 'Add author',
    AUTHOR_ITEM_DELETE_BUTTON: 'Delete author',
};

export const FOOTER_CONSTANTS = {
    INPUT: 'Input your email',
    BUTTON: 'Subscribe',
};
