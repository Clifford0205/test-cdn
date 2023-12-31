import { createSelector } from '@reduxjs/toolkit';

const selectNotificationsReducer = (state) => state.notifications;

export const selectSubscribeDrawerOpen = createSelector(
	[selectNotificationsReducer],
	(notificationsSlice) => notificationsSlice.subscribeDrawerOpen,
);

export const selectNotificationsList = createSelector(
	[selectNotificationsReducer],
	(notificationsSlice) => notificationsSlice.notificationsList,
);

export const selectAnnouncements = createSelector(
	[selectNotificationsReducer],
	(notificationsSlice) => notificationsSlice.announcements,
);

export const selectUnread = createSelector(
	[selectNotificationsReducer],
	(notificationsSlice) => notificationsSlice.unread,
);

export const selectListIsLoading = createSelector(
	[selectNotificationsReducer],
	(notificationsSlice) => notificationsSlice.listIsLoading,
);

export const selectSubscriptionChannels = createSelector(
	[selectNotificationsReducer],
	(notificationsSlice) => notificationsSlice.subscriptionChannels,
);
