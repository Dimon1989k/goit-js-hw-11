const axios = require('axios');

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '30379882-85edbc86e71656e53764cdff3';

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.perPage = 40;
    this.page = 1;
  }

  async fetchApi() {
    const params = new URLSearchParams({
      q: this.searchQuery,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: this.perPage,
      page: this.page,
    });
    const url = `${BASE_URL}/?${params}`;
    this.stepPage();
    return await axios.get(url);
  }

  stepPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
