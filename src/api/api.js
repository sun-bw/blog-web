import axios from 'axios';
import qs from 'qs'
import Vue from 'vue'

//axios配置
//响应时间
axios.defaults.timeout = 50000;
//配置cookie
// axios.defaults.withCredentials = true
//请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//接口地址
 axios.defaults.baseURL = '/api';//如果在index中配置了地址，这写请求重复的地方，或者不写
//静态资源
// Vue.prototype.$static = '';

//POST传参序列化（添加请求拦截器）
// axios.interceptors.request.use(
//   config => {
//
//   },
//   err => {
//
//   }
// )
// //响应式拦截
// axios.interceptors.response.use(
//   res => {
//
//   },
//   err => {
//
//   }
// )

export default axios
