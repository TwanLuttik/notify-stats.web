import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import core from './core/core';
Vue.use(core);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
