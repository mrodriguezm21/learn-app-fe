import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMeService, loginService } from '../../services';

const initialState = {
    isAuth: false,
    username: '',
    email: '',
    role: '',
    statusLogin: 'idle',
};

export const login = createAsyncThunk('auth/login', loginService);
export const getMe = createAsyncThunk('auth/getMe', getMeService);

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
        builder.addCase(login.rejected, (state, action) => {
            state.statusLogin = 'failed';
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.statusLogin = 'succeeded';
            state.isAuth = true;
            state.username = action.payload?.username;
            state.email = action.payload?.email;
            state.role = action.payload?.role;
        });
        builder.addCase(getMe.rejected, (state, action) => {
            state.statusLogin = 'failed';
        });
        builder.addCase(getMe.fulfilled, (state, action) => {
            state.statusLogin = 'succeeded';
            state.isAuth = true;
            state.username = action.payload?.username;
            state.email = action.payload?.email;
            state.role = action.payload?.role;
        });
    },
});

export const selectAuth = (state) => state.auth;

export const { login: actionLogin, logout: actionLogout } = authSlice.actions;

export default authSlice.reducer;
