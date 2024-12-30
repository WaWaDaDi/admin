import axios from "axios";
import { get_token } from "./auth";
import { Message } from "element-ui";

const instance = axios.create({
  baseURL: 'http://localhost:11519/',
  timeout: 20000,
  // headers: { 'Authorization': get_token() }
});


//请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 请求头添加token
  config.headers.Authorization = get_token();
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});




///响应拦截器
instance.interceptors.response.use(function (response) {
  ///响应成功
  return response.data;

}, function (error) {
  if (error.code === 'ERR_NETWORK') {
    //网络错误
    //提示用户网络错误
    Message.error('网络错误');
    return;
  }

  if (error.status === 401) {
    //未授权
    //跳转到登录页面
    // window.location.href = '/login';
    return;
  }
});

export default instance;