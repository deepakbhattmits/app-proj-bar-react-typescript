/** @format */

import {beerConstants} from '../constants';
interface RootState{
	[props:string]:any
}
const initialState = {
	beers: {},
	favorites: {},
};
export const getBeer = (state:RootState = initialState, action:any) => {
	switch(action.type) {
		case beerConstants.GET_BEERS:
			return Object.assign({},state,{beers: action.payload});
		case beerConstants.GET_BEER_BY_NAME:
			return Object.assign({},state,{beers: action.payload});
		case beerConstants.ADD_FAVORITE:
			const favorites={
				...state.favorites,
				[action.payload.id]: action.payload,
			};
			return Object.assign({},state,{favorites});
		case beerConstants.REMOVE_FAVORITE:
			const updated=Object.values(state?.favorites).filter(({id}: any) =>+id !== +action?.payload	);
			return Object.assign({}, state, {
					favorites:updated,
				});
		default:
			return state;
	}
};
