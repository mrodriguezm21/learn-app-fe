import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
        });
        builder.addCase(changePassword.rejected, (state, action) => {
            state.statusChangePassword = STATUS.FAILED;
        });
    },
});
