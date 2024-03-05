import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { getMeService, loginService, logoutService } from '../services';
import { STATUS } from '../constants';

const initialState = {
    isAuth: false,
    userInfo: {
        username: '',
        email: '',
        role: '',
        firstName: '',
    },
    statusLogin: STATUS.IDLE,
};

export const login = createAsyncThunk('auth/login', loginService);
export const getMe = createAsyncThunk('auth/getMe', getMeService);
export const logout = createAsyncThunk('auth/logout', logoutService);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuth = true;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.role = action.payload.role;
        },
        logout: (state, action) => {
            state.isAuth = false;
            state.username = '';
            state.email = '';
            state.role = '';
        },
    },
    extraReducers(builder) {
        builder.addCase(login.pending, (state, action) => {
            state.statusLogin = STATUS.LOADING;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            toast.success('Successfully logged in', {
                style: {
                    backgroundColor: '#4caf50',
                    color: '#fff',
                },
                duration: 1000,
            });
            state.statusLogin = STATUS.SUCCEEDED;
            state.isAuth = true;
            state.userInfo = action.payload;
        });
        builder.addCase(login.rejected, (state, action) => {
            toast.error('Login failed', {
                style: {
                    backgroundColor: '#ff4d4f',
                    color: '#fff',
                },
                duration: 1000,
            });
            state.statusLogin = STATUS.FAILED;
        });
        builder.addCase(getMe.rejected, (state, action) => {
            state.statusLogin = STATUS.FAILED;
        });
        builder.addCase(getMe.fulfilled, (state, action) => {
            state.statusLogin = STATUS;
            state.isAuth = true;
            state.userInfo = action.payload;
        });
        builder.addCase(logout.fulfilled, (state, action) => {
            toast.success('Successfully logged out', {
                style: {
                    backgroundColor: '#4caf50',
                    color: '#fff',
                },
                duration: 1000,
            });
            state.isAuth = false;
            state.userInfo = {};
        });
        builder.addCase(logout.rejected, (state, action) => {});
    },
});

export const selectAuth = (state) => state.auth;
export const selectUserInfo = (state) => state.auth.userInfo;

export const { login: actionLogin, logout: actionLogout } = authSlice.actions;

export default authSlice.reducer;
