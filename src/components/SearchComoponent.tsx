/** @format */

import { FC } from 'react';
interface IProp {
	[props: string]: any;
}

const SearchComoponent: FC<IProp> = ({
	classNameSearch,
	handleChange,
	onKeyUp,
	classNameButton,
	buttonClick,
}): JSX.Element => {
	return (
		<div className='ui category search'>
			<div className='ui icon input'>
				<input
					className={classNameSearch}
					name='productName'
					type='text'
					placeholder='Search for Product...'
					autoComplete='off'
					onChange={handleChange}
					onKeyUp={onKeyUp}
				/>
				<span className={classNameButton} onClick={buttonClick}>
					Search
				</span>
			</div>
		</div>
	);
};

export default SearchComoponent;