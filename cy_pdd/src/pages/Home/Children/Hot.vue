<template>
  <div class="hot">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in sliderImgList" :key="index">
          <img :src="item" width="100%">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  export default {
    name: 'Hot',
    data() {
      return {
        sliderImgList: [
          require('../imgs/rowing/s1.png'),
          require('../imgs/rowing/s2.png'),
          require('../imgs/rowing/s3.png'),
          require('../imgs/rowing/s4.png'),
          require('../imgs/rowing/s5.png'),
          require('../imgs/rowing/s6.png'),
          require('../imgs/rowing/s7.png'),
          require('../imgs/rowing/s8.png'),
          require('../imgs/rowing/s9.png'),
        ]
      }
    },
    mounted() {
      new Swiper ('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        loop: true, // 循环模式选项
        effect: 'coverflow',
        slidesPerView: 1,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows : true
        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })        
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .hot
    width 100%
    height 100%
    padding-top 46px
</style>
