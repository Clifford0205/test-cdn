import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchNotificationsList } from 'SRC/api/notifications';

export const INITIAL_STATE = {
	notificationsList: [],
	announcementsList: [],
	listIsLoading: false,
	error: null,
	subscribeDrawerOpen: true,
};

export const getAnnounceAndNotificationsList = createAsyncThunk(
	'notifications/getAnnounceAndNotificationsList',
	async ({ address }, { rejectWithValue }) => {
		try {
			const announceAndNotificationsList = await fetchNotificationsList({ address });
			return announceAndNotificationsList;
		} catch (error) {
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
		builder.addCase(getAnnounceAndNotificationsList.pending, (state) => {
			state.listIsLoading = true;
		});
		builder.addCase(getAnnounceAndNotificationsList.fulfilled, (state, action) => {
			state.listIsLoading = false;
			state.notificationsList = action.payload.notifications;
			state.announcementsList = action.payload.announcements;
		});
		builder.addCase(getAnnounceAndNotificationsList.rejected, (state, action) => {
			state.listIsLoading = false;
			state.error = action.payload;
		});
	},
});

export const { setSubscribeDrawerOpen } = notificationsSlice.actions;

export const notificationsReducer = notificationsSlice.reducer;
