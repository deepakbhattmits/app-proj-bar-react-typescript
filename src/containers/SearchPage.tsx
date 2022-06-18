/** @format */

// /** @format */

// import { Component } from 'react';
// import { connect } from 'react-redux';
// import { getBeerByName, getBeers } from '../actions';
// import SearchComponent from '../components/SearchComoponent';
// // todo : functional SearchPage( tricky)
// class SearchPage extends Component {
// 	state = {
// 		beerName: '',
// 	};
// 	getData = () => {
// 		if (beerName.length > 0) {
// 			this.props.getBeerByName(beerName);
// 		} else {
// 			this.props.getBeers();
// 		}
// 	};
// 	handleChange = (e) => {
// 		this.setState({ [e.target.name]: e.target.value }, () => {
// 			const timer = setTimeout(() => {
// 				this.getData();
// 				// console.log('Test  : ');
// 				this.props.setIsLoading(true);
// 			}, 1000);
// 			return () => {
// 				this.props.setIsLoading(false);
// 				clearTimeout(timer);
// 			};
// 		});
// 	};
// 	onKeyUp = (e) => {
// 		if (e.keyCode === 13) {
// 			this.buttonClick();
// 		}
// 	};
// 	buttonClick = () => {
// 		if (beerName.length > 0) {
// 			this.props.getBeerByName(beerName);
// 		} else {
// 			alert('Please Enter Search Term');
// 			this.props.getBeers();
// 		}
// 	};
// 	// componentWillUnmount() {
// 	//   clearTimeout(timer)
// 	// }
// 	render() {
// 		return (
// 			<div className='ui row'>
// 				<SearchComponent
// 					classNameButton='ui primary button'
// 					classNameSearch='custom-search'
// 					buttonClick={this.buttonClick}
// 					handleChange={this.handleChange}
// 					onKeyUp={this.onKeyUp}
// 				/>
// 			</div>
// 		);
// 	}
// }
// const mapDispatchToProps = (dispatch) => ({
// 	getBeerByName: (data) => dispatch(getBeerByName(data)),
// 	getBeers: () => dispatch(getBeers()),
// });
// // const mapStateToProps = ( state ) => {
// //     return {
// //         searchBeer: state.searchBeer,

// //     }
// // }
// export default connect(null, mapDispatchToProps)(SearchPage);

/** @format */

import { FC,useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBeerByName, getBeers } from '../actions';
import SearchComponent from '../components/SearchComoponent';
import useDebounce from '../hooks/useDebounce';
//SearchPage
interface IProp{
	[prop:string]:any
}
const SearchPage:FC<IProp> = (props) => {
	const dispatch:(dispatch: any) => Promise<void>=useDispatch();
	const [beerName,setBeerName]=useState('');
	 const val = useDebounce(beerName, 500);
	const handleChange = (e:any) => {
		setBeerName(e.target.value);
	};
	const onKeyUp = (e:any) => {
		if (e.keyCode === 13) {
			buttonClick();
		}
	};
	const buttonClick = () => {
		if(beerName.length>0) {
			
			dispatch(getBeerByName(beerName));
		} else {
			alert('Please Enter Search Term');
			dispatch(getBeers());
		}
	};
	useEffect(() => {
     if (val) {
			dispatch(getBeerByName(val));
		} else {
			dispatch(getBeers());
		}
    },
    [dispatch, val] // Only call effect if debounced search term changes
  );
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
