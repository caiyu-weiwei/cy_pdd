<template>
  <div class="hot">
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in homecasual" :key="index">
          <img :src="item.imgurl" width="100%">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!-- 中间导航 -->
    <hot-nav />
    <!-- 广告位 -->
    <div class="hot-ad">
      <img :src="hotAd" alt="">
    </div>
    <!-- 商品列表 -->
    <hot-shop-list />
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import HotNav from './HotNav'
  import HotShopList from './HotShopList'
  import {
    mapState
  } from 'vuex'
  export default {
    name: 'Hot',
    components: {
      HotNav,
      HotShopList
    },
    data() {
      return {
        hotAd: require('../../imgs/hot_ad/home_ad.gif')
      }
    },
    computed: {
      ...mapState(['homecasual'])
    },
    mounted() {
      /**
       * 获取轮播图数据
       */
      this.$store.dispatch('reqHomeCasual', () => {
        this.$nextTick(() => {
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
        })
      })
           
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .hot
    width 100%
    height 100%
    padding-top 46px
    background #F5F5F5
    .hot-ad
      background #FFF
      margin 8px 0
      padding 5px
      img
        width 100%
</style>
