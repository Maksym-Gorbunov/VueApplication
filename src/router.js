import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/pages/HomePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/play',
      name: 'playPage',
      component: () => import('./components/pages/PlayPage.vue')
    },
    // {
    //   path: '/page2',
    //   name: 'page2',
    //   component: () => import('./components/pages/Page2.vue')
    // },
    // {
    //   path: '/page3',
    //   name: 'page3',
    //   component: () => import('./components/pages/Page3.vue')
    // }
  ]
})
