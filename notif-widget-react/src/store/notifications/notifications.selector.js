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

export const selectAnnouncementsList = createSelector(
	[selectNotificationsReducer],
	(notificationsSlice) => notificationsSlice.announcementsList,
);


export const selectListIsLoading = createSelector(
	[selectNotificationsReducer],
	(notificationsSlice) => notificationsSlice.listIsLoading,
);
