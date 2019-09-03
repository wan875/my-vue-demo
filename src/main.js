// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入store
import store from './vuex/store'
import http from './axios/http'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

Vue.use(ElementUI)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store, // 全局注入
  http,
  render: h => h(App)
})
