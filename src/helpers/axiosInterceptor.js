import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import envs from '../config/env';

let headers = {}; //here we initialize it to change it in any way

const AxiosInstance = axios.create({
  baseURL: envs.BACKEND_URL, //import that url from env folder
  headers, //create headers that we share across requests
});

// console.log('env.REACT_APP_DEV_MODE >>', envs.REACT_APP_DEV_MODE);

//here we need to create the request interceptors
//request interceptor: allows you to write or create a piece of your code before the request send
//response interceptor: allows you to write or create a piece of your code before response reaches the calling ends
//Usually used to check the status code for every response that is being received
AxiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default AxiosInstance;
