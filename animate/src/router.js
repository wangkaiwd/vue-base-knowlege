import Vue from 'vue'
import Router from 'vue-router'
import Parent from './views/About.vue'
import Default from './views/Default';
import Foo from './views/Foo'
import Bar from './views/Bar'
import Home from './views/Home'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    {
      path: '/parent', component: Parent,
      children: [
        { path: '', component: Default },
        { path: 'foo', component: Foo },
        { path: 'bar', component: Bar }
      ]
    }
  ]
})
