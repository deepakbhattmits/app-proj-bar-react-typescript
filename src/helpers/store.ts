/** @format */

import { combineReducers } from 'redux';
import { getBeer } from '../reducers';
//combineReducers from redux
export const store:any = combineReducers({
	beerData: getBeer,
});
