/** @format */

import { combineReducers } from '@reduxjs/toolkit';
import { getProduct } from '../reducers';

export const store = combineReducers({
	productData: getProduct,
});
