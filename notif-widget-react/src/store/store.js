import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// eslint-disable-next-line no-undef
const middleWares = [process.env.NODE_ENV === 'development'].filter(Boolean);

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
