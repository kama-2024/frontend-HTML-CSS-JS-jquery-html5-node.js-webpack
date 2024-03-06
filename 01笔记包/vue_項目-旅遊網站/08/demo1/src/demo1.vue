<template>
  <div>

      <h1 v-if='shopCar.length > 0'>{{shopCar}}</h1>
     
      <h1 v-else> sorry~~是空的 </h1>

  </div>
</template>
<script>
/*
如果shopcar是有数据的:['鞋','耳机','充电宝']
没有数据：显示提示信息（空的）
*/

export default{
  data () {
    return{
      shopCar:['鞋','耳机','充电宝']
    }
  }
}
</script>