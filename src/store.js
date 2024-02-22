import { configureStore } from '@reduxjs/toolkit';
import authReducer from './components/Login/authSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});
