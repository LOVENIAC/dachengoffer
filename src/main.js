import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import store from './store'
import router from './router'
import i18n from './i18n/index'; 
import './assets/css/reset.css'
import "./plugins/elements.js";

axios.defaults.baseURL = "https://doc.dachengoffer.com";
axios.interceptors.request.use((config) => {
  // 禁止缓存
  config.headers['Cache-Control'] = 'no-cache';
  return config;
});
Vue.prototype.$http = axios;

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  render: h => h(App),
  i18n,
  store,
  router
}).$mount('#app')
