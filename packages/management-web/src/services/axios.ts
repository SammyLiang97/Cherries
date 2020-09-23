import { message } from 'antd';
import axios from 'axios';

const cusAxios = axios.create();

cusAxios.interceptors.response.use((res) => res, (res) => {
  message.error('Network Error!');
});

export default cusAxios;
