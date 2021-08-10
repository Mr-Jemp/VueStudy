import Vue from 'vue'
import App from './App.vue'
import notify from './plugins/notify/index'
Vue.use(notify);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
