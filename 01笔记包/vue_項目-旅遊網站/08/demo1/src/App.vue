<template>
  <div>
      <ul v-if='shopCar.length>0'>
        <li 
        v-for='item in shopCar'
        >{{item}}</li>
      </ul>
      <h1 v-else>空的~~~</h1>
  </div>
</template>
<script>
export default{
  data () {
    return{
      shopCar:['鞋','耳机','充电宝']
    }
  }
}
</script>