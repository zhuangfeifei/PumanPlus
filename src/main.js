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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
