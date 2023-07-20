import { combineReducers } from '@reduxjs/toolkit';

import { notificationsReducer } from './notifications/notifications.reducer';

export const rootReducer = combineReducers({
	notifications: notificationsReducer,
});
