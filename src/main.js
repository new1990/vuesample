import Vue from 'vue'
import App from './App' //ここ
import router from './router'
import InfiniteLoading from 'vue-infinite-loading'
Vue.use(window["vue-js-modal"].default);
Vue.use(InfiniteLoading)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App }, //ここ
  template: '<App/>'
})
