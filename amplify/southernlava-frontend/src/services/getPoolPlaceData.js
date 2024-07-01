import axios from 'axios';

const rest_api_url = 'http://localhost:3001/api/';

export const getPoolPlaceData = () => axios.get(rest_api_url);