import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)


Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
