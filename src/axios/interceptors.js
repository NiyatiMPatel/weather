import axios from "axios";
import { BASE_KEY, BASE_URL } from "../constants/constants";

// Create an axios instance
const instance = axios.create({
 baseURL: BASE_URL,
 timeout: 5000,
});

// Add a request interceptor
instance.interceptors.request.use((config) => {
 // Do something before request is sent
 config.params = { ...config.params, appid: BASE_KEY };
 return config;
}, (error) => {

 console.log("file: interceptors.js:17 ~ error:", error);

 // Do something with request error
 return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use((response) => {
 // Any status code that lie within the range of 2xx cause this function to trigger
 // Do something with response data
 return response.data;
}, (error) => {

 console.log("file: interceptors.js:27 ~ error:", error);

 // Any status codes that falls outside the range of 2xx cause this function to trigger
 // Do something with response error
 return Promise.reject(error);
});

export default instance;