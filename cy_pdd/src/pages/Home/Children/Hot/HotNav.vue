<template>
  <div class="hot-nav">
    <!-- 滚动区域 -->
    <div class="hot-nav-content">
      <div class="nav-content-inner">
        <a class="inner-nav-item" v-for="(item, index) in hotNavList" :key="index">
          <img :src="item.url" alt="">
          <span>{{ item.title }}</span>
        </a>
      </div>
    </div>
    <!-- 滚动条 -->
    <div class="hot-nav-bottom">
      <div class="hot-nav-bottom-inner" :style="scrollBar"></div>
    </div>
  </div>
</template>

<script>
  import { hotNavList } from 'common/enum'
  export default {
    name: 'HotNav',
    data() {
      return {
        hotNavList,
        // 获取设备的屏宽
        screenWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        scrollContentWidth: 720,
        bgBarWidth: 100,
        scrollBarWidth: 0
      }
    },
    computed: {
      scrollBar() {
        return {
          width: `${this.scrollBarWidth}px`
        }
      }
    },
    mounted() {
      this.getScrollBarWidth()
    },
    methods: {
      getScrollBarWidth() {
        const { screenWidth, scrollContentWidth, bgBarWidth } = this
        this.scrollBarWidth = screenWidth / scrollContentWidth * bgBarWidth
      }
    },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .hot-nav
    width 100%
    height 180px
    background #fff
    padding-bottom 10px
    position relative
    .hot-nav-content
      width 100%
      overflow-x scroll
      .nav-content-inner
        width 720px
        display flex
        flex-wrap wrap
        .inner-nav-item
          width 90px
          height 90px
          display flex
          flex-direction column
          justify-content center
          align-items center
          font-size 14px
          color #666
          img
            width 50%
            margin-bottom 5px
    .hot-nav-content::-webkit-scrollbar
      display none 
    .hot-nav-bottom
      width 100px
      height 2px
      background #f5f5f5
      position absolute 
      left 50%
      bottom 8px
      margin-left -50px
      .hot-nav-bottom-inner
        width 0
        height 100%
        background orangered
        position absolute
        left 0

</style>