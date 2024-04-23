import axios, { AxiosInstance } from 'axios';
import { apiConfig } from '../config/apiConfig';

const HTTP_METHODS = Object.freeze({
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
});

class HttpService {
  http: AxiosInstance; // Define http as AxiosInstance

  constructor() {
    this.http = axios.create({
      ...apiConfig,
      baseURL: 'https://good-monday-js-test.vercel.app'
    });
  }

  getAuthorization() {
    const token = window.localStorage.getItem('loggedUser') || '';
    const tokenWithRemoveQuotes = token.slice(1, -1);
    return token ? { Authorization: `Bearer ${tokenWithRemoveQuotes}` } : {};
  }

  service() {
    this.injectInterceptors();
    return this;
  }

  setupHeaders() {
    return { 'Content-Type': 'application/json', ...this.getAuthorization() };
  }

  async request(method: string, url: string, options: any) {
    try {
      const response = await this.http.request({
        method,
        url,
        ...options
      });

      // Check if response status is not in the range 2xx
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.data);
      }

      return response;
    } catch (error) {
      // Handle errors from Axios or HTTP errors
      this.normalizeError(error);
      throw error; // Re-throw the error to propagate it to the caller
    }
  }

  async get(url: string, params: Record<string, any> | null | undefined) {
    return this.request(HTTP_METHODS.GET, url, {
      params,
      headers: this.setupHeaders()
    });
  }

  async update(url: string, params: Record<string, any> | null | undefined, payload: any) {
    return this.request(HTTP_METHODS.PUT, url, {
      params,
      data: payload,
      headers: this.setupHeaders()
    });
  }

  async remove(url: string, params: Record<string, any> | null | undefined, payload: any) {
    return this.request(HTTP_METHODS.DELETE, url, {
      params,
      data: payload,
      headers: this.setupHeaders()
    });
  }

  async create(url: string, params: Record<string, any> | null | undefined, payload: any) {
    return this.request(HTTP_METHODS.POST, url, {
      params,
      data: payload,
      headers: this.setupHeaders()
    });
  }

  injectInterceptors() {
    this.http.interceptors.request.use((request) => {
      return request;
    });

    this.http.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  normalizeError(error: any) {
    return Promise.reject(error);
  }
}

export default new HttpService();
