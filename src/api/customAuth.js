import axios from 'axios';

export const customAuth = () => {
	const token = localStorage.getItem('login_token');

	return axios.create({
		baseURL : 'https://family-life-organizer.herokuapp.com/api',
		headers : {
			'Content-Type'  : 'application/json',
			Authorization : `${token}`,
		},
	});
};
