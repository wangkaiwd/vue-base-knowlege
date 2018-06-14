import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.component("todo-item", {
  template: '<li>这是一个待办事项</li>'
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')