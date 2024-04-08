import { configureStore } from '@reduxjs/toolkit';
import authReducer from './store/authSlice';
import registerReducer from './store/registerSlice';
import passwordReducer from './store/passwordSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        register: registerReducer,
        password: passwordReducer,
    },
});
