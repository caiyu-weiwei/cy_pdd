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
        // 滚动内容宽度
        scrollContentWidth: 720,
        // 滚动条背景宽
        bgBarWidth: 100,
        // 待计算的滚动条宽
        scrollBarWidth: 0,
        // 起点
        startX: 0,
        // 结束标记
        endFlag: 0,
        // 滚动条滚动距离
        scrollBarMoveWidth: 0
      }
    },
    computed: {
      scrollBar() {
        return {
          width: `${this.scrollBarWidth}px`,
          left: `${this.scrollBarMoveWidth}px`
        }
      }
    },
    mounted() {
      this.getScrollBarWidth()
      this.bindEvent()
    },
    methods: {
      /**
       * 计算滚动条宽度
       */
      getScrollBarWidth() {
        const { screenWidth, scrollContentWidth, bgBarWidth } = this
        this.scrollBarWidth = screenWidth / scrollContentWidth * bgBarWidth
      },
      /**
       * 移动端事件监听
       */
      bindEvent() {
        this.$el.addEventListener('touchstart', this.handleTouchStart, false)
        this.$el.addEventListener('touchmove', this.handleTouchMove, false)
        this.$el.addEventListener('touchend', this.handleTouchEnd, false)
      },
      /**
       * 开始触摸
       */
      handleTouchStart(event) {
        // 获取第一个触点
        let touch = event.touches[0]
        // 计算起始位置
        this.startX = touch.pageX
      },
      /**
       * 开始移动
       */
      handleTouchMove(event) {
        // 获取移动中的第一个触点
        let touch = event.touches[0]
        // 计算滚动条移动距离
        this.scrollBarMoveWidth = -((touch.pageX - this.startX) * (this.screenWidth / this.scrollContentWidth) - this.endFlag)
        // 滚动边界限制
        if (this.scrollBarMoveWidth <= 0) {
          this.scrollBarMoveWidth = 0
        } else if (this.scrollBarMoveWidth >= this.bgBarWidth - this.scrollBarWidth) {
          this.scrollBarMoveWidth = this.bgBarWidth - this.scrollBarWidth
        }
      },
      /**
       * 触摸结束
       */
      handleTouchEnd(event) {
        // 记录触摸结束标记
        this.endFlag = this.scrollBarMoveWidth
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