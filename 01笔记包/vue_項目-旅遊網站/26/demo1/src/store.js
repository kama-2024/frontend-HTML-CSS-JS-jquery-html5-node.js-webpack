import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	str:123
  },
  mutations: {
	changeStr(state,cName){
		state.str=cName;
	}
  },
  actions: {

  }
})
