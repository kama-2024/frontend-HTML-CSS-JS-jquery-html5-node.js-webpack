import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',      //路径
      name: 'home',   //名称:基本上做标识或者判断
      component: Home //对应访问的组件
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      children:[
          {
            path:"/xxx:id",
            component:Home
          },
          {
            path:"/xxx",
            component:Home
          }
      ]
    },

    { 
      path: '*', 
      redirect: Home
    }

  ]
})
