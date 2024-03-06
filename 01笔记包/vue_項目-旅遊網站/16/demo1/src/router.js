import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from './components/Home'
import Fav from './components/Fav'
import Config from './components/Config'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/fav',
      component: Fav
    },
    {
      path: '/config',
      component: Config
    }
    
  ]
})
