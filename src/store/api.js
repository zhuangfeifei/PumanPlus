import axios from 'axios'
import store from './store'
import router from '../router'
import { Toast, Dialog } from 'vant'


let localhostDev = true
let urls = localhostDev ? '/pumanplus' : 'http://www.homeamc.cn'

const api = axios.create()
api.defaults.baseURL = urls
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// api.defaults.headers.post['contentType'] = false
// api.defaults.headers.post['processData'] = false

// 请求拦截
api.interceptors.request.use(function (config) {
  
    store.commit('isLoading', true)

    return config

  }, function (error) {
    
    return Promise.reject(error)
})

// 添加响应拦截器
api.interceptors.response.use(function (response) {

  store.commit('isLoading', false)

  if(response.data.code != 200) Toast.fail(response.data.message)

    return response;

  }, function (error) {
    store.commit('isLoading', false)
    Toast.fail('网络异常！')
    return Promise.reject(error)
})

export default {api , urls}