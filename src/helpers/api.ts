/** @format */

import axios from 'axios';
// baseUrl
export default axios.create({
	baseURL: `https://dummyjson.com/`,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: 'Bearer',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers':
			'Origin, X-Requested-With, Content-Type, Accept',
	},
});
