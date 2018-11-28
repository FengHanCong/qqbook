<template>
  <wc-swiper :duration="900" :interval="2000" class="swiper">
     <!--谁调用这个组件，谁就传imgList数据-->
    <wc-slide v-for="(img,index) in imgList" :key="index">
      <a href=""><img :src="img.src" width="100%" height="100%" min-height="137px"/></a>
    </wc-slide>
  </wc-swiper>
</template>

<script>
  export default {
    props: ['imgList'],
    data() {
      return {
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .swiper
    img
      min-height: 137px
</style>
