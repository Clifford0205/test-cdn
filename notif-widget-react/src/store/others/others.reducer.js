import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAnnounceAndNotificationsList } from '../notifications/notifications.reducer';
import { userSlice } from '../user/user.reducer';

export const updateUserAddressAndAnnouncementsAndNotifications = createAsyncThunk(
	'user/updateUserAddressAndAnnouncementsAndNotifications',
	async (address, { dispatch }) => {
		// dispatch setCurrentUserAddress
		dispatch(userSlice.actions.setCurrentUserAddress(address));

		// then dispatch getAnnounceAndNotificationsList
		await dispatch(getAnnounceAndNotificationsList({ address }));
	},
);
