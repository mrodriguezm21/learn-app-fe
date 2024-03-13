import { configureStore } from '@reduxjs/toolkit';
import authReducer from './store/authSlice';
import registerReducer from './store/registerSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        register: registerReducer,
    },
});
