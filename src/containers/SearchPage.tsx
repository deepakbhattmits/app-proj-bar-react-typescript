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
		<div className='w-full pt-4'>
			<SearchComponent
				classNameButton='rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700'
				classNameSearch='w-full rounded-l border border-slate-300 bg-white px-4 py-2 text-sm outline-none ring-0 transition focus:border-blue-500'
				buttonClick={buttonClick}
				handleChange={handleChange}
				onKeyUp={onKeyUp}
			/>
		</div>
	);
};

export default SearchPage;
