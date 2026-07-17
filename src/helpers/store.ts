/** @format */

<<<<<<< HEAD
import { combineReducers } from 'redux';
import { getBeer } from '../reducers';
//combineReducers from redux
export const store:any = combineReducers({
	beerData: getBeer,
=======
import { combineReducers } from '@reduxjs/toolkit';
import { getProduct } from '../reducers';

export const store = combineReducers({
	productData: getProduct,
>>>>>>> 2337e69 (Added new changes)
});
