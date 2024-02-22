import { getItemLocalStorage } from '../helpers/localStorageManager';

const BASE_URL =
    'https://mo7rs8kds6.execute-api.us-east-1.amazonaws.com/dev/users';

export async function getMeService() {
    try {
        const token = getItemLocalStorage('token');
        const response = await fetch(`${BASE_URL}/me`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            throw new Error('Something went wrong getting user data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Something went wrong');
    }
}
