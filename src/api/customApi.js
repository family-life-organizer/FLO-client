import axios from 'axios';

export default axios.create({
	baseURL : 'https://family-life-organizer.herokuapp.com/api',
});
