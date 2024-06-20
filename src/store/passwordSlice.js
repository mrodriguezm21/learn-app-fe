import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { STATUS } from '../constants';
import { updatePasswordService } from '../services';

const initialState = {
    newPassword: '',
    statusChangePassword: STATUS.IDLE,
};

export const changePassword = createAsyncThunk(
    'password/changePassword',
    updatePasswordService
);

export const passwordSlice = createSlice({
    name: 'password',
    initialState,
    extraReducers(builder) {
        builder.addCase(changePassword.pending, (state, action) => {
            state.statusChangePassword = STATUS.LOADING;
        });
        builder.addCase(changePassword.fulfilled, (state, action) => {
            state.statusChangePassword = STATUS.SUCCEEDED;
            toast.success('Password changed successfully', {
                style: {
                    backgroundColor: '#4caf50',
                    color: '#fff',
                },
                duration: 1000,
            });
        });
        builder.addCase(changePassword.rejected, (state, action) => {
            toast.error(action.error.message ?? "'Password Change Failed'", {
                style: {
                    backgroundColor: '#ff4d4f',
                    color: '#fff',
                },
                duration: 1000,
            });
            state.statusChangePassword = STATUS.FAILED;
        });
    },
});

export const selectPasswordStatus = (state) =>
    state.password.statusChangePassword;

export default passwordSlice.reducer;
