import axios from 'axios'
import store from './store'
import router from '../router'
import { Toast, Dialog } from 'vant'


let localhostDev = false
let urls = localhostDev ? '/market' : 'http://www.homeamc.cn'

const api = axios.create()
api.defaults.baseURL = urls
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截
api.interceptors.request.use(function (config) {

    return config

  }, function (error) {
    
    return Promise.reject(error)
})

// 添加响应拦截器
api.interceptors.response.use(function (response) {

  if(response.data.code == 9999) {
    Dialog.confirm({
        title: '您还没有绑定会员卡！',
        confirmButtonText:'去绑定'
    }).then(() => {
        Toast.clear()
        router.push({path:'/Opencard'})
    }).catch(()=>{
       Toast.clear()
    });
  }else if(response.data.code != 200) Toast.fail(response.data.message)

    return response;

  }, function (error) {
    
    Toast.fail('网络异常！')
    return Promise.reject(error)
})

export default {api , urls}