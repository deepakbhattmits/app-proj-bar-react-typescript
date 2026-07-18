/** @format */

import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { getProduct } from '../reducers';

const rootReducer = combineReducers({
	productData: getProduct,
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['productData'],
};

export const store = persistReducer(persistConfig, rootReducer);
