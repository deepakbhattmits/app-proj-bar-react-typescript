/** @format */

import { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchProducts, getProducts } from '../actions';
import SearchComponent from '../components/SearchComoponent';
import useDebounce from '../hooks/useDebounce';

interface IProp {
	[prop: string]: any;
}

const SearchPage: FC<IProp> = () => {
	const dispatch: (dispatch: any) => Promise<void> = useDispatch();
	const [productName, setProductName] = useState('');
	const val = useDebounce(productName, 500);

	const handleChange = (e: any) => {
		setProductName(e.target.value);
	};

	const onKeyUp = (e: any) => {
		if (e.keyCode === 13) {
			buttonClick();
		}
	};

	const buttonClick = () => {
		if (productName.trim().length > 0) {
			dispatch(searchProducts(productName));
		} else {
			dispatch(getProducts());
		}
	};

	useEffect(() => {
		if (val.trim().length > 0) {
			dispatch(searchProducts(val));
		} else {
			dispatch(getProducts());
		}
	}, [dispatch, val]);

	return (
		<div className='ui row'>
			<SearchComponent
				classNameButton='ui primary button'
				classNameSearch='custom-search'
				buttonClick={buttonClick}
				handleChange={handleChange}
				onKeyUp={onKeyUp}
			/>
		</div>
	);
};

export default SearchPage;