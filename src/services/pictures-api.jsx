import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '34754697-0d2595d46a3257cdf22f20f5a';
const PER_PAGE = 12;

export const fetchPictures = (search, page) => {
  return axios('?', {
    params: {
      q: search,
      page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: PER_PAGE,
    },
  });
};
