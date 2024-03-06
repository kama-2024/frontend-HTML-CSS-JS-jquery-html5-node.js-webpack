<template>
  <div>
    <h1>这是app</h1>
    <p>这是app</p>
    --------------------
    <City></City>

    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide>I'm Slide 5</swiper-slide>
      <swiper-slide>I'm Slide 6</swiper-slide>
      <swiper-slide>I'm Slide 7</swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
     
    </swiper>
  </div>
</template>

<script>
import City from './components/City'
export default{
  components:{
    City
  },
  data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
          }
        }
      }
  }
}
</script>

<style scoped>
.swiper-pagination >>> .swiper-pagination-bullet-active{
  background: red;
}
</style>