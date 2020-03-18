import axios from "axios";

export const baseURL = process.env.VUE_APP_AXIOS_URL;
console.log("axios baseUrl:", baseURL);

console.log("env:", process.env.NODE_ENV);

const instance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  withCredentials: true
});

instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log("axios request error：", error);
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (process.env.NODE_ENV === "development") {
      console.log("axios response error\n", error);
    }
    // 这里出错时，一般可以统一处理掉，就不用后面每个单独处理了。但是有些可能会有自己的特别处理，所以还是把error返回去
    return Promise.reject(error);
  }
);

export default instance;
