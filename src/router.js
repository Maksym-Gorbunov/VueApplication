import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/pages/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
    ,
    {
      path: '/page2',
      name: 'page2',
      component: () => import('./components/pages/Page2.vue')
    },
    {
      path: '/page3',
      name: 'page3',
      component: () => import('./components/pages/Page3.vue')
    }
  ]
})
