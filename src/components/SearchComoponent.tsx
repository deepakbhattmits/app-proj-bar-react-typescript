/** @format */

<<<<<<< HEAD
import {FC} from 'react';
interface IProp{
	[props:string]:any
}
const SearchComoponent:FC<IProp> = ({
=======
import { FC } from 'react';
interface IProp {
	[props: string]: any;
}

const SearchComoponent: FC<IProp> = ({
>>>>>>> 2337e69 (Added new changes)
	classNameSearch,
	handleChange,
	onKeyUp,
	classNameButton,
	buttonClick,
<<<<<<< HEAD
}):JSX.Element => {
	// console.log(classNameSearch,
	// handleChange,
	// onKeyUp,
	// classNameButton,
	// buttonClick,"Props");
=======
}): JSX.Element => {
>>>>>>> 2337e69 (Added new changes)
	return (
		<div className='ui category search'>
			<div className='ui icon input'>
				<input
					className={classNameSearch}
<<<<<<< HEAD
					name='beerName'
					type='text'
					placeholder='Search for Beer...'
=======
					name='productName'
					type='text'
					placeholder='Search for Product...'
>>>>>>> 2337e69 (Added new changes)
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
<<<<<<< HEAD
=======

>>>>>>> 2337e69 (Added new changes)
export default SearchComoponent;
