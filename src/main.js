import Vue from 'vue'
import App from './App.vue'
import vueToastPanel from './lib/index'

Vue.use(vueToastPanel)

new Vue({
  el: '#app',
  render: h => h(App)
})
