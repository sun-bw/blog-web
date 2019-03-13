import axios from 'axios';
import qs from 'qs'
import Vue from 'vue'

//axios配置
//响应时间
axios.defaults.timeout = 5000;
//配置cookie
// axios.defaults.withCredentials = true
//请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//接口地址
axios.defaults.baseURL = 'http://localhost:8080';
//静态资源
Vue.prototype.$static = '';

//POST传参序列化（添加请求拦截器）
axios.interceptors.request.use(
  config => {

  },
  err => {

  }
)
//响应式拦截
axios.interceptors.response.use(
  res => {

  },
  err => {

  }
)
//发送请求
export function fetchPost(url,params) {
  return new Promise((resolve,reject) => {
    axios.post(url,params)
      .then(
        res => {
        resolve(res.data)
      },
        err =>{
        reject(err.data)
        }
      ).catch(err => {
        reject(err.data)
    })
  })
}
