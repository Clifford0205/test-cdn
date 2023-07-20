import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchNotificationsList } from 'SRC/api/notifications';

export const INITIAL_STATE = {
	notificationsList: [],
	listIsLoading: false,
	error: null,
	subscribeDrawerOpen: true,
};

export const getNotificationsList = createAsyncThunk(
	'notifications/getNotificationsList',
	async ({ errCb }, { rejectWithValue }) => {
		try {
			const notificationArray = await fetchNotificationsList();
			return notificationArray;
		} catch (error) {
			errCb();
			return rejectWithValue(error);
		}
	},
);

export const notificationsSlice = createSlice({
	name: 'notifications',
	initialState: INITIAL_STATE,
	reducers: {
		setSubscribeDrawerOpen(state, action) {
			state.subscribeDrawerOpen = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getNotificationsList.pending, (state) => {
			state.listIsLoading = true;
		});
		builder.addCase(getNotificationsList.fulfilled, (state, action) => {
			state.listIsLoading = false;
			state.notificationsList = action.payload;
		});
		builder.addCase(getNotificationsList.rejected, (state, action) => {
			state.listIsLoading = false;
			state.error = action.payload;
		});
	},
});

export const { setSubscribeDrawerOpen } = notificationsSlice.actions;

export const notificationsReducer = notificationsSlice.reducer;
