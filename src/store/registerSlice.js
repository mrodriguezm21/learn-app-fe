import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { ERRORS, STATUS } from '../constants';
import { studentSignupService, trainerSignupService } from '../services';

const initialState = {
    isRegister: false,
    userInfo: {},
    statusRegister: STATUS.IDLE,
    errorRegister: '',
};

export const registerStudent = createAsyncThunk(
    'register/registerStudent',
    studentSignupService
);
export const registerTrainer = createAsyncThunk(
    'register/registerTrainer',
    trainerSignupService
);
export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        resetRegister: (state) => {
            state.isRegister = false;
            state.userInfo = {};
            state.statusRegister = STATUS.IDLE;
            state.errorRegister = '';
        },
    },
    extraReducers(builder) {
        builder.addCase(registerStudent.pending, (state, action) => {
            state.statusRegister = STATUS.LOADING;
        });
        builder.addCase(registerStudent.fulfilled, (state, action) => {
            toast.success('Registration successfully', {
                style: {
                    backgroundColor: '#4caf50',
                    color: '#fff',
                },
                duration: 1000,
            });
            state.statusRegister = STATUS.SUCCEEDED;
            state.isRegister = true;
            state.userInfo = action.payload;
        });
        builder.addCase(registerStudent.rejected, (state, action) => {
            const errorMessage = action.error.message.includes(
                ERRORS.EMAIL_TAKEN
            )
                ? ERRORS.EMAIL_TAKEN
                : 'Registration failed';
            toast.error(errorMessage, {
                style: {
                    backgroundColor: '#ff4d4f',
                    color: '#fff',
                },
                duration: 1000,
            });
            state.statusRegister = STATUS.FAILED;
            state.errorRegister = ERRORS.EMAIL_TAKEN;
        });
        builder.addCase(registerTrainer.pending, (state, action) => {
            state.statusRegister = STATUS.LOADING;
        });
        builder.addCase(registerTrainer.fulfilled, (state, action) => {
            toast.success('Registration successfully', {
                style: {
                    backgroundColor: '#4caf50',
                    color: '#fff',
                },
                duration: 1000,
            });
            state.statusRegister = STATUS.SUCCEEDED;
            state.isRegister = true;
            state.userInfo = action.payload;
        });
        builder.addCase(registerTrainer.rejected, (state, action) => {
            const errorMessage = action.error.message.includes(
                ERRORS.EMAIL_TAKEN
            )
                ? ERRORS.EMAIL_TAKEN
                : 'Registration failed';
            toast.error(errorMessage, {
                style: {
                    backgroundColor: '#ff4d4f',
                    color: '#fff',
                },
                duration: 1000,
            });
            state.statusRegister = STATUS.FAILED;
            state.errorRegister = ERRORS.EMAIL_TAKEN;
        });
    },
});

export const selectRegister = (state) => state.register;
export const selectRegisterInfo = (state) => state.register.userInfo;

export const { resetRegister: actionResetRegister } = registerSlice.actions;

export default registerSlice.reducer;
