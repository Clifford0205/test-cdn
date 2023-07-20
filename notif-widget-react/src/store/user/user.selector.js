import { createSelector } from '@reduxjs/toolkit';

const selectUserReducer = (state) => state.user;

export const selectUserAddress = createSelector(
	[selectUserReducer],
	(userSlice) => userSlice.currentAddress,
);
