import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
import { find } from 'lodash-es';

import {
	fetchNotificationsList,
	fetchNotificationsSetting,
	postUnsubscribeChannels,
	postSubscribeChannel,
	postNotificationsRead,
} from 'SRC/api/notifications';

export const INITIAL_STATE = {
	notificationsList: [],
	announcements: {},
	subscriptionChannels: [],
	listIsLoading: false,
	subscriptionChannelsIsLoading: false,
	error: null,
	subscribeDrawerOpen: false,
	unRead: false,
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

export const updateAnnounceAndNotificationsListRead = createAsyncThunk(
	'notifications/updateAnnounceAndNotificationsListRead',
	async ({ address, notificationId, isBroadcast }, { rejectWithValue }) => {
		try {
			await postNotificationsRead({
				address,
				notificationId,
			});
			return { notificationId, isBroadcast };
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const updateUnsubscribeChannels = createAsyncThunk(
	'notifications/updateUnsubscribeChannels',
	async ({ address, unsubscribeChannels }, { rejectWithValue }) => {
		try {
			const subscriptionChannelsObj = await postUnsubscribeChannels({
				address,
				unsubscribeChannels,
			});
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
			state.announcements = action.payload.announcements;
			state.unread = action.payload.unread;
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
			state.subscriptionChannels = action?.payload?.subscriptionChannels;
			if (
				action?.payload?.subscriptionChannels &&
				!action.payload.subscriptionChannels.includes('bell')
			) {
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
		//
		//
		//
		builder.addCase(updateAnnounceAndNotificationsListRead.pending, (state) => {
			state.listIsLoading = true;
		});
		builder.addCase(updateAnnounceAndNotificationsListRead.fulfilled, (state, action) => {
			if (action.payload.isBroadcast) {
				state.announcements.read = true;
			} else {
				const targetObj = find(state.notificationsList, { _id: action.payload.notificationId });
				targetObj.read = true;
			}

			state.listIsLoading = false;
		});
		builder.addCase(updateAnnounceAndNotificationsListRead.rejected, (state, action) => {
			state.listIsLoading = false;
			state.error = action.payload;
		});
	},
});

export const { setSubscribeDrawerOpen } = notificationsSlice.actions;

export const notificationsReducer = notificationsSlice.reducer;
