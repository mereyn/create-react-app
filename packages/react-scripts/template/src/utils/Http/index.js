/* eslint-disable no-console */
import axios from 'axios';

let version = 'v1';
let API_URL =
  process.env.NODE_ENV === 'test'
    ? process.env.BASE_URL || `http://your_domain.com/api/${version}/`
    : `/api/${version}`;

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default axios;
