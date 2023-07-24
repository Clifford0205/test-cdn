import { createAsyncThunk } from '@reduxjs/toolkit';

import {
	getAnnounceAndNotificationsList,
	getSubscriptionChannels,
} from '../notifications/notifications.reducer';
import { userSlice } from '../user/user.reducer';

export const updateUserAddressAndAnnouncementsAndNotifications = createAsyncThunk(
	'user/updateUserAddressAndAnnouncementsAndNotifications',
	async (address, { dispatch }) => {
		// dispatch setCurrentUserAddress
		await dispatch(userSlice.actions.setCurrentUserAddress(address));

		// then dispatch getAnnounceAndNotificationsList
		dispatch(getAnnounceAndNotificationsList({ address }));
		dispatch(getSubscriptionChannels({ address }));
	},
);
