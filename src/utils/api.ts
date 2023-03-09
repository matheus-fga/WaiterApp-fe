import axios, {
  AxiosError, InternalAxiosRequestConfig, AxiosResponse
} from 'axios';

import { history } from './history';
import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: 'http://192.168.0.28:3001',
});

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token = localStorage.getItem('token');

  if(token && config.url !== '/auth') {
    config.headers.set('Authorization', `Bearer ${JSON.parse(token)}`);
  }

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  const token = response.data.token;

  if (token) {
    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  const statusCode = Number(error.response?.status);

  if ([401, 403].includes(statusCode)) {
    history.navigate!('/login');

    toast.error('Acesso não autorizado! Faça login!');
  }

  return Promise.reject(error);
};

api.interceptors.request.use(onRequest, onRequestError);
api.interceptors.response.use(onResponse, onResponseError);

export { api };

