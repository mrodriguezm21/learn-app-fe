import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { STATUS } from '../constants';
import { selectPasswordStatus } from '../store/passwordSlice';

export function useChangePasswordRedirect() {
    const navigate = useNavigate();
    const passwordStatus = useSelector(selectPasswordStatus);
    useEffect(() => {
        if (passwordStatus === STATUS.SUCCEEDED) {
            navigate('success');
        }
    }, [passwordStatus, navigate]);
}
