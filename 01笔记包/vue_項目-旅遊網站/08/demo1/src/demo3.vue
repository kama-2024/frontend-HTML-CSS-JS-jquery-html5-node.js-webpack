<template>
  <div>
      
      <ul>
        <li 

          v-for='(item,index) in shopCar'

        >
          {{item}}
          
          {{index}}

        </li>
      </ul>
     

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