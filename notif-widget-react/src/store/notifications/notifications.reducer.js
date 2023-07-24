import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { includes } from 'lodash-es';

import {
	fetchNotificationsList,
	fetchNotificationsSetting,
	postUnsubscribeChannels,
	postSubscribeChannel,
} from 'SRC/api/notifications';

export const INITIAL_STATE = {
	notificationsList: [],
	announcementsList: [],
	subscriptionChannels: [],
	listIsLoading: false,
	subscriptionChannelsIsLoading: false,
	error: null,
	subscribeDrawerOpen: false,
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

export const updateUnsubscribeChannels = createAsyncThunk(
	'notifications/updateUnsubscribeChannels',
	async ({ address, unsubscribeChannels }, { rejectWithValue }) => {
		console.log('unsubscribeChannels: ', unsubscribeChannels);
		try {
			const subscriptionChannelsObj = await postUnsubscribeChannels({
				address,
				unsubscribeChannels,
			});
			console.log('subscriptionChannelsObj: ', subscriptionChannelsObj);

			return subscriptionChannelsObj;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const updateSubscribeChannels = createAsyncThunk(
	'notifications/updateSubscribeChannels',
	async ({ address, subscriptionChannel }, { rejectWithValue }) => {
		try {
			const subscriptionChannelsObj = await postSubscribeChannel({
				address,
				subscriptionChannel,
			});
			console.log('subscriptionChannelsObj: ', subscriptionChannelsObj);

			return subscriptionChannelsObj;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const getSubscriptionChannels = createAsyncThunk(
	'notifications/getSubscriptionChannels',
	async ({ address }, { rejectWithValue }) => {
		try {
			const subscriptionChannelsSetting = await fetchNotificationsSetting({ address });
			return subscriptionChannelsSetting;
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
		//
		//
		//
		builder.addCase(getSubscriptionChannels.pending, (state) => {
			state.subscriptionChannelsIsLoading = true;
		});
		builder.addCase(getSubscriptionChannels.fulfilled, (state, action) => {
			state.subscriptionChannelsIsLoading = false;
			state.subscriptionChannels = action.payload.subscriptionChannels;
			if (!action.payload.subscriptionChannels.includes('bell')) {
				state.subscribeDrawerOpen = true;
			}
		});
		builder.addCase(getSubscriptionChannels.rejected, (state, action) => {
			state.subscriptionChannelsIsLoading = false;
			state.error = action.payload;
		});
		//
		//
		//
		builder.addCase(updateUnsubscribeChannels.pending, (state) => {
			state.subscriptionChannelsIsLoading = true;
		});
		builder.addCase(updateUnsubscribeChannels.fulfilled, (state, action) => {
			console.log('action: ', action);
			state.subscriptionChannelsIsLoading = false;
			state.subscriptionChannels = action.payload.subscriptionChannels;
		});
		builder.addCase(updateUnsubscribeChannels.rejected, (state, action) => {
			state.subscriptionChannelsIsLoading = false;
			state.error = action.payload;
		});

		//
		//
		//
		builder.addCase(updateSubscribeChannels.pending, (state) => {
			state.subscriptionChannelsIsLoading = true;
		});
		builder.addCase(updateSubscribeChannels.fulfilled, (state, action) => {
			state.subscriptionChannelsIsLoading = false;
			state.subscriptionChannels = action.payload.subscriptionChannels;
		});
		builder.addCase(updateSubscribeChannels.rejected, (state, action) => {
			state.subscriptionChannelsIsLoading = false;
			state.error = action.payload;
		});
	},
});

export const { setSubscribeDrawerOpen } = notificationsSlice.actions;

export const notificationsReducer = notificationsSlice.reducer;
