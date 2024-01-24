import axios, { AxiosInstance } from 'axios';

const CLIENT_API_URL: string = 'https://marketplace-demo.cleanhub.com/api/public';
const API_TIMEOUT: number = 15000;

const createClient = (baseURL: string): AxiosInstance => {
  const instance: AxiosInstance = axios.create({
    baseURL,
    responseType: 'json',
    timeout: API_TIMEOUT,
  });

  return instance;
};

export const Client = createClient(CLIENT_API_URL);