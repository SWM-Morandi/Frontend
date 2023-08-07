import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://api.morandi.co.kr:8080/',
});
