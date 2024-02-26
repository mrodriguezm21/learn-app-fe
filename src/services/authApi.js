import {
    clearLocalStorage,
    getItemLocalStorage,
    setItemLocalStorage,
} from '../helpers/localStorageManager';

const BASE_URL =
    'https://019j9minrb.execute-api.us-east-1.amazonaws.com/dev/auth';

export async function loginService({ email, password }) {
    try {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
            throw new Error('Invalid credentials');
        }
        const { token, userData } = await response.json();
        setItemLocalStorage({ item: 'token', value: token });
        return userData;
    } catch (error) {
        throw new Error('Invalid credentials');
    }
}

export async function logoutService() {
    try {
        const token = getItemLocalStorage('token');
        const response = await fetch(`${BASE_URL}/logout`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            throw new Error('Logout failed');
        }
        clearLocalStorage();
    } catch (error) {
        throw new Error('Logout failed');
    }
}

export async function trainerSignupService({
    email,
    firstname,
    lastname,
    specialization,
    role,
}) {
    try {
        const response = await fetch(`${BASE_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                firstname,
                lastname,
                specialization,
                role,
            }),
        });
        if (!response.ok) {
            throw new Error('Signup failed');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Signup failed');
    }
}

export async function studentSignupService({
    email,
    firstname,
    lastname,
    dateOfBirth,
    address,
    role,
}) {
    try {
        const response = await fetch(`${BASE_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                firstname,
                lastname,
                dateOfBirth,
                address,
                role,
            }),
        });
        if (!response.ok) {
            throw new Error('Signup failed');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Signup failed');
    }
}
