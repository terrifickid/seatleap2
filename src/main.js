import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import './app.scss';
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  beforeCreate() { this.$store.commit('initialiseStore');},
  render: function (h) { return h(App) }
}).$mount('#app')
