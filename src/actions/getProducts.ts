/** @format */

import { productConstants } from '../constants';
import api from '../helpers/api';
import { toast } from 'react-toastify';

export const getProducts = () => async (dispatch: any) => {
	const response = await api.get(`products`);
	dispatch({ type: productConstants.GET_PRODUCTS, payload: response.data?.products || [] });
};

export const searchProducts = (productName: string) => async (dispatch: any) => {
	const response = await api.get(`products/search?q=${encodeURIComponent(productName)}`);
	dispatch({
		type: productConstants.SEARCH_PRODUCTS,
		payload: response.data?.products || [],
	});
};

export const addTofavorites = (product: any) => async (dispatch: any) => {
	dispatch({
		type: productConstants.ADD_FAVORITE,
		payload: product,
	});
	toast.success(`Added to favorite: ${product?.title || 'product'}`);
};

export const removeFromfavorites = (wantRemoveId: any) => async (dispatch: any) => {
	dispatch({ type: productConstants.REMOVE_FAVORITE, payload: wantRemoveId });
	toast.error(`Removed from favorite item id: ${wantRemoveId}`);
};
