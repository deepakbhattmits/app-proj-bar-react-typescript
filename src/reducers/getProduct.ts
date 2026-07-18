/** @format */

import { productConstants } from '../constants';

interface RootState {
	[props: string]: any;
}

const initialState = {
	products: [],
	favorites: {},
};

export const getProduct = (state: RootState = initialState, action: any) => {
	switch (action.type) {
		case productConstants.GET_PRODUCTS:
			return Object.assign({}, state, { products: action.payload });
		case productConstants.SEARCH_PRODUCTS:
			return Object.assign({}, state, { products: action.payload });
		case productConstants.ADD_FAVORITE: {
			const favorites = {
				...state.favorites,
				[action.payload.id]: action.payload,
			};
			return Object.assign({}, state, { favorites });
		}
		case productConstants.REMOVE_FAVORITE: {
			const updated = Object.values(state?.favorites || {}).reduce(
				(acc: any, item: any) => {
					if (+item.id !== +action?.payload) {
						acc[item.id] = item;
					}
					return acc;
				},
				{}
			);
			return Object.assign({}, state, {
				favorites: updated,
			});
		}
		default:
			return state;
	}
};
