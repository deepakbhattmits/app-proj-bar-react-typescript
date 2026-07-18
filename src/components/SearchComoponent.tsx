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
		<div className='mx-auto w-full max-w-xl'>
			<div className='flex items-center gap-2'>
				<input
					className={classNameSearch}
					name='productName'
					type='text'
					placeholder='Search for Product...'
					autoComplete='off'
					onChange={handleChange}
					onKeyUp={onKeyUp}
				/>
				<button type='button' className={classNameButton} onClick={buttonClick}>
					Search
				</button>
			</div>
		</div>
	);
};

export default SearchComoponent;