<template>
  <div class="home">
    	-------

			{{cityName}}

    	======

  </div>
</template>

<script>
import {mapState} from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed:{
  	...mapState(['cityName'])
  }
}
</script>
