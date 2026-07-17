/** @format */
import { useSelector, useDispatch } from 'react-redux';
import FavoriteComponent from '../components/FavoriteComponent';
import { removeFromfavorites } from '../actions';
interface RootState {
	[props: string]: any
}
const FavoritePage = () => {
	const favoriteProducts = useSelector((state: RootState) => state.productData.favorites);
	const dispatch: (dispatch: any) => Promise<void> = useDispatch();
	return (
		<div className='ui row'>
			<FavoriteComponent
				fBeers={favoriteProducts}
				umarkFav={(e: any) => dispatch(removeFromfavorites(e))}
			/>
		</div>
	);
};
export default FavoritePage;