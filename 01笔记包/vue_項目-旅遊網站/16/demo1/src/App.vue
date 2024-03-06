<template>
  
  <div>
      
      <router-view></router-view>
      
      <router-link to='/'>
        首页
      </router-link> 

      <router-link :to='{path:"/fav",query:{useId:123}}'>
        收藏
      </router-link> 

      <router-link 

        :to='"/config"'
        tag='h1'

      >
        设置
      </router-link> 
      
      
      <button @click='toConfig'>跳转到设置页面</button>
      

  </div>

</template>
<script>
export default{
  methods:{
    toConfig(){
      this.$router.push({
        path:"/config"
      })
    }
  }
}
</script>
<style scoped>
.router-link-active{
  color:red;
}
</style>