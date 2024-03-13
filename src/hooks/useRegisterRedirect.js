import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { selectRegister } from '../store/registerSlice';
import { login } from '../store/authSlice';
import { STATUS } from '../constants';

export function useRegisterRedirect() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { statusRegister, userInfo } = useSelector(selectRegister);
    useEffect(() => {
        if (statusRegister === STATUS.SUCCEEDED) {
            dispatch(
                login({ email: userInfo.email, password: userInfo.password })
            );
            navigate('/registration-success');
        }
    }, [statusRegister, dispatch, userInfo, navigate]);
}
