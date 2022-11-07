import axios from 'axios';
import { Feed } from '../shared/types';
const baseUrl = 'https://dummyjson.com';

const fetchFeed = async () => {
    const url = `${baseUrl}/products`;
    const response = await axios.get(url);
    return response.data as Feed ;
};

export {
    fetchFeed
};