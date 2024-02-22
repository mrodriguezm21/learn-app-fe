import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemLocalStorage } from '../helpers/localStorageManager';
import { getMe, selectAuth } from '../components/Login/authSlice';

const checkLoginStatus = () => {
    return Boolean(getItemLocalStorage('token'));
};

export function useUser() {
    const dispatch = useDispatch();
    const user = useSelector(selectAuth);
    const loginStatus = checkLoginStatus();
    useEffect(() => {
        if (user.isAuth || loginStatus) {
            dispatch(getMe());
        }
    }, [dispatch, loginStatus, user.isAuth]);

    if (!loginStatus) {
        return null;
    }
    return user;
}
