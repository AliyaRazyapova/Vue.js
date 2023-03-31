import Vue from 'vue'
import App from './App.vue'
// import simplePlugin from './plugins/simplePlugin'
import VueRouter from 'vue-router'
import router from './router/index'

// import marked from 'marked'
Vue.use(VueRouter)

import '@/assets/styles/main.scss';

// Vue.config.productionTip = false
// Vue.use(simplePlugin)
// Vue.filter('marked', marked)

new Vue({
  render: h => h(App),
  el: '#app',
  router
})