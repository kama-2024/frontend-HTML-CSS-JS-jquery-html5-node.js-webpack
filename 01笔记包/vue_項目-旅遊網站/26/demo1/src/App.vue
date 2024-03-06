<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      
      {{str}}

      <button @click='btn("北京")'>按钮</button>

    </div>
    <router-view/>
  </div>
</template>
<script>
import {mapState,mapMutations } from 'vuex'
export default{
  computed:{
      ...mapState(['str'])
  },
  methods:{
      btn(cName){
          this.changeStr(cName)
      },
      ...mapMutations(['changeStr'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
