import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


import share from 'vue-shares'
Vue.use(share)
Vue.component('V-share',share)



import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)



new Vue({
  render: h => h(App),
}).$mount('#app')
