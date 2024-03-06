<template>
  <div id="app">
        {{ this.$store.state.cityName }}

        {{cityName}}

        {{datas}}

        <Home></Home>
  </div>
</template>

<script>
import Home from './views/Home'
import {mapState} from 'vuex'
export default{
  /*computed:mapState(['cityName'])*/
  computed:{
    datas(){
      return 123
    },
    ...mapState(['cityName'])
  },
  components:{
    Home
  }
}
</script>
