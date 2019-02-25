// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fonstSize from './store/fonstSize'
import Util from './store/storage'

import store from './store/store'
Vue.prototype.$store = store
import axios from './store/api'
Vue.prototype.$axios = axios

import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
Vue.use(Vant);

// function GetRequest() {  
//   var url = location.search; //获取url中"?"符后的字串  
//   var theRequest = new Object();  
//   if (url.indexOf("?") != -1) {  
//     var str = url.substr(1);  
//     var strs = str.split("&");  
//     for(var i = 0; i < strs.length; i ++) {  
//       theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);  
//     }  
//   }  
//   return theRequest;  
// }  

store.commit('puman_wxh', 'puman2016')
store.commit('puman_openId', 'oLCKIwBSm0cXbJIl5pfH9UAIAbZk')
store.commit('puman_unionId', 'o8TbDwWSGn_tz1NkQW2gkJrgd0q8')
Util.setLocal('puman2016', 'puman_wxh')
Util.setLocal('oLCKIwBSm0cXbJIl5pfH9UAIAbZk', 'puman_openId')
Util.setLocal('o8TbDwWSGn_tz1NkQW2gkJrgd0q8', 'puman_unionId')


// store.commit('puman_wxh', GetRequest().puman_wxh)
// store.commit('puman_openId', GetRequest().puman_openId)
// store.commit('puman_unionId', GetRequest().puman_unionId)
// Util.setLocal(GetRequest().puman_wxh, 'puman_wxh')
// Util.setLocal(GetRequest().puman_openId, 'puman_openId')
// Util.setLocal(GetRequest().puman_unionId, 'puman_unionId')


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
