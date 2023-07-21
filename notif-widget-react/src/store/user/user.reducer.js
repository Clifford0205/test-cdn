import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
	currentUserAddress: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState: INITIAL_STATE,
	reducers: {
		setCurrentUserAddress(state, action) {
			state.currentUserAddress = action.payload;
		},
	},
});

export const { setCurrentUserAddress } = userSlice.actions;

export const userReducer = userSlice.reducer;
