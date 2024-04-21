import axios from 'axios';
import { apiConfig } from '../config/apiConfig';

const HTTP_METHODS = Object.freeze({
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
})




class HttpService {
    constructor() {
        this.http = axios.create({
            ...apiConfig

        })
    }

    getAuthorization() {
        const token = '';
        return token ? { Authorization: `Bearer ${token}` } : {}
    }

    service() {
        this.injectInterceptors();
        return this;
    }

    setupHeaders() {
        return { 'Content-Type': 'application/json', ...this.getAuthorization() }
    }

    async request(method: string, url: string, options) {
        try {
            const response = await this.http.request({
                method,
                url,
                ...options
            })
        } catch (error) {
            this.normalizeError(error);
        }
    }

    injectInterceptors() {
        this.http.interceptors.request.use((request) => {
            return request;
        });

        this.http.interceptors.response.use((response) => {
            return response;
        },
            (error) => {
                return Promise.reject(error)
            })
    }


    normalizeError(error) {
        return Promise.reject(error);
    }
};


export default HttpService;