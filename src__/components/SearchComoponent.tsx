/** @format */

import {FC} from 'react';
interface IProp{
	[props:string]:any
}
const SearchComoponent:FC<IProp> = ({
	classNameSearch,
	handleChange,
	onKeyUp,
	classNameButton,
	buttonClick,
}):JSX.Element => {
	// console.log(classNameSearch,
	// handleChange,
	// onKeyUp,
	// classNameButton,
	// buttonClick,"Props");
	return (
		<div className='ui category search'>
			<div className='ui icon input'>
				<input
					className={classNameSearch}
					name='beerName'
					type='text'
					placeholder='Search for Beer...'
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
