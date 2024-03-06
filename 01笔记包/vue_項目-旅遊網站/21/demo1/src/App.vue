<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul>
      <li v-for='item in str'>
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return {
      str:123
    }
  },
  beforeCreate(){
    console.log(1)
  },
  created(){
    console.log(2);
  },
  mounted(){
    let That = this;
    this.axios.get("http://localhost:8081/data.json").then((res)=>{
      That.str = res.data.arr
    })
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
  margin-top: 60px;
}
</style>
