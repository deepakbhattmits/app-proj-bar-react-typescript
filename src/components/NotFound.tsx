/** @format */

import { RefreshCw } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	//  console.log('TEST : ');
	const [hover, setHover] = useState(false);
	const toggleHover = () => {
		setHover(!hover);
	};
	return (
		<div className='flex min-h-[200px] flex-col items-center justify-center gap-3 px-4 text-center'>
			<h2 className='text-xl font-semibold text-slate-700'>OOPS something went wrong...</h2>
			<Link
				className={`rounded bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 ${hover ? 'shadow-sm' : ''}`}
				to='/home'
				onMouseEnter={toggleHover}
				onMouseLeave={toggleHover}>
			 	<RefreshCw className={`mr-1 ${hover ? '' : 'opacity-70'}`}/> Go To Home
			</Link>
		</div>
	);
};
export default NotFound;
