/** @format */
import { useSelector, useDispatch } from 'react-redux';
import FavoriteComponent from '../components/FavoriteComponent';
import {removeFromfavorites} from '../actions';
interface RootState{
	[props:string]:any
}
const FavoritePage = () => {
	const favoriteBeer = useSelector((state:RootState) => state.beerData.favorites);
	// console.log("test: ",favoriteBeer);
	const dispatch = useDispatch();
	return (
		<div className='ui row'>
			<FavoriteComponent
				fBeers={favoriteBeer}
				umarkFav={(e:any) => dispatch(removeFromfavorites(e))}
			/>
		</div>
	);
};
export default FavoritePage;
