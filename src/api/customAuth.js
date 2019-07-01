import axios from 'axios';

export default function() {
	const token = localStorage.getItem('userToken');

	return axios.create({
		baseURL : '',
		headers : {
			'Content-Type' : 'application/json',
			Authorization  : `${token}`,
		},
	});
}
