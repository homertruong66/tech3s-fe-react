import axios from 'axios';
import { get } from 'lodash';

import { store } from '../App';
import { logoutSuccess } from '../actions/auth';

class HttpClient {
    
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://localhost:9090',
      headers: {    // case-sensitive        
        'X-Security-Token': localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
      },
      timeout: 3000,
    });
    
    this.axiosInstance.interceptors.request.use(config => config, error => Promise.reject(error));

    this.axiosInstance.interceptors.response.use(this.handleResponse, this.handleResponseError);
  }

  post = (endpoint, data, config = null) => this.axiosInstance.post(endpoint, data, config);

  get = (endpoint, config = null) => this.axiosInstance.get(endpoint, config);

  put = (endpoint, data, config = null) => this.axiosInstance.put(endpoint, data, config);

  delete = (endpoint, config = null) => this.axiosInstance.delete(endpoint, config);

  getToken = () => this.axiosInstance.defaults.headers['X-Security-Token'];

  setToken = token => {
    localStorage.setItem('access_token', token);
    this.axiosInstance.defaults.headers['X-Security-Token'] = token;
  };

  clearToken = () => {
    this.axiosInstance.defaults.headers['X-Security-Token'] = '';
    localStorage.removeItem('access_token');
  };

  handleResponse = response => {
    const { headers } = response;
    
    const token = headers['x-security-token'];      
    if (token) {
      this.setToken(token);
    }

    const user = headers['x-user-profile'];
    if (user) {
      response.data = JSON.parse(user);
      return response.data;
    }

    return get(response, 'data.data', null);
  }

  handleResponseError = error => {
    const { response } = error;
    if (!error.response) {
      return Promise.reject(new Error(error.message));
    }

    const {
      data: { code, message },
    } = response;

    switch (code || response.status) {
      case 401:
        this.clearToken();
        store.dispatch(logoutSuccess());
        break;

      case 404:
        break;

      default:
        break;
    }

    const finalError = new Error(message || error.message);
    finalError.error_code = code || response.status;
    finalError.response = response.data || error.response;

    return Promise.reject(finalError);
  };
}

export default new HttpClient();

