import Vue from 'vue'
import Router from 'vue-router'
import A from './components/A.vue'
import B from './components/B.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: A
    },
    {
      path: '/a',
      component: A
    },
    {
      path: '/b',
      component: B
    }
  ]
})
