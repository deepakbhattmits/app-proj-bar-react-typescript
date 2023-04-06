/** @format */

import { beerConstants } from '../constants';
import api from '../helpers/api';
import { toast } from 'react-toastify';
//  getBeers action
export const getBeers = () => async (dispatch:any) => {
	const response = await api.get(`beers/`);
	dispatch({ type: beerConstants.GET_BEERS, payload: response.data });
};
export const getBeerByName = (beer_name:string) => async (dispatch:any) => {
	const response = await api.get(`beers?beer_name=${beer_name}`);
	dispatch({ type: beerConstants.GET_BEER_BY_NAME, payload: response.data });
};
export const addTofavorites = (selectedBeerId:any) => async (dispatch:any) => {
	const response = await api.get(`beers/${selectedBeerId}`);
	dispatch({
		type: beerConstants.ADD_FAVORITE,
		payload: response.data && response.data[0],
	});
	const beerName = response.data && response.data[0]['name'];
	toast.success(`Added To Favorite item Name : ${beerName}`);
};
export const removeFromfavorites = (wantRemoveId:any) => async (dispatch:any) => {
	const response = await api.get(`beers/${wantRemoveId}`);
	dispatch({ type: beerConstants.REMOVE_FAVORITE, payload: wantRemoveId });
	const beerName = response.data && response.data[0]['name'];
	toast.error(`Removed From Favorite item Name : ${beerName}`);
};
