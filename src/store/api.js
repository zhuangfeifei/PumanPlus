import axios from 'axios'
import store from './store'
import Util from './storage'
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

    if(store.state.puman_wxh == '' || store.state.puman_wxh == null || store.state.puman_wxh == undefined){
      store.commit('puman_wxh', Util.getLocal('puman_wxh'))
      store.commit('puman_openId', Util.getLocal('puman_openId'))
      store.commit('puman_unionId', Util.getLocal('puman_unionId'))
      store.dispatch('index')
    }
    
    store.commit('isLoading', true)

    return config

  }, function (error) {
    
    return Promise.reject(error)
})

// 添加响应拦截器
api.interceptors.response.use(function (response) {
  
  store.commit('isLoading', false)

  if(response.data.code != 200) {
    if(store.state.puman_unionId != undefined || store.state.puman_unionId != null || store.state.puman_unionId != ''){
      Dialog.alert({
          title: '温馨提示',
          message: response.data.message
      }).then(() => {
      // on close
      });
    }
  }

    return response;

  }, function (error) {
    if(error.response.data.code == 400 && error.response.config.url == '/pumanplus/pm/api/index/info'){
      store.dispatch(index)
      store.dispatch(user)
    }else if(error.response.data.code == 405 && error.response.config.url.indexOf('save') >= 0){
      Dialog.confirm({
          title: error.response.data.message,
          message: '',
          confirmButtonText:'去验证'
      }).then(() => {
          store.state.user.phonenumber.length > 0 ? router.push({path:'/Authentication/BindCertificates'}) : router.push({path:'/Authentication'})
      }).catch(() => {
          // on cancel
      });
    }else{
      Dialog.alert({
          title: error.response.data.message || '网络异常！',
          message: ''
      }).then(() => {
      // on close
      });
    }
    store.commit('isLoading', false)
    return Promise.reject(error)
})

export default {api , urls}