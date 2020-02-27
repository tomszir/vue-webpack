import Vue from 'vue'
import VueMeta from 'vue-meta'

import App from './App'

import store from './store'
import router from './router'

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
