import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.morandi.co.kr:8080/',
});
