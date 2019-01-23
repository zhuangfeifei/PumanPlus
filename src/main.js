// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fonstSize from './store/fonstSize'

import store from './store/store'
Vue.prototype.$store = store
import axios from './store/api'
Vue.prototype.$axios = axios

import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
Vue.use(Vant);

Vue.config.productionTip = false

let time = setInterval(()=>{
  store.commit('puman_wxh', getLocal('puman_wxh'))
  store.commit('puman_openId', getLocal('puman_openId'))
  store.commit('puman_unionId', getLocal('puman_unionId'))
  try{
    if(store.state.puman_wxh != '' || store.state.puman_wxh != null || store.state.puman_wxh != undefined) {
      clearInterval(time)
    }
  }catch(e){
    
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
