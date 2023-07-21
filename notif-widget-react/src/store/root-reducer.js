import { combineReducers } from '@reduxjs/toolkit';

import { notificationsReducer } from './notifications/notifications.reducer';
import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
	notifications: notificationsReducer,
	user: userReducer,
});
