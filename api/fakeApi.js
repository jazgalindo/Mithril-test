import axios from 'axios';

export const fakeApi = axios.create({
  baseURL: process.env.API_URL
});

export default fakeApi;
