import axios, { AxiosError, AxiosRequestHeaders } from 'axios';
import { formatUrl } from '../utils/format';

const defaultHeaders = {
  'Content-Type': 'application/json',
  'Accept-Language': 'pt-br',
};

const baseURL = 'https://jsonplaceholder.typicode.com/';

const instance = axios.create({
  baseURL,
  headers: defaultHeaders,
});

export async function getData<T>(url: string, params?: string[], headers?: AxiosRequestHeaders): Promise<T> {
  try {
    const response = await instance.get<T>(formatUrl(url, params), { headers });
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw err.response?.data;
  }
}

export async function postData<T>(url: string, data: unknown, headers?: AxiosRequestHeaders): Promise<T> {
  try {
    const response = await instance.post<T>(url, data, { headers });
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw err.response?.data;
  }
}
