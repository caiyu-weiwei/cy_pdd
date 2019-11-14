<template>
  <div class="recommend-container">
    <ul class="recommend">
      <shop-list
        v-for="(item, index) in recommendlist"
        :key="index"
        :item="item"
      />
    </ul>
  </div>
</template>

<script>
  import ShopList from '@/components/ShopList/ShopList'
  import BScroll from 'better-scroll'
  import {
    mapState
  } from 'vuex'
  export default {
    name: 'Recommend',
    data() {
      return {
        pageNo: 1,
        pageSize: 10
      }
    },
    components: {
      ShopList
    },
    computed: {
      ...mapState(['recommendlist'])
    },
    watch: {
      recommendlist() {
        this.$nextTick(() => {
          this._initBScroll()
        })
      }
    },
    mounted() {
      this.$store.dispatch('reqRecommendList', {pageNo: this.pageNo, pageSize: this.pageSize})
    },
    methods: {
      _initBScroll() {

        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        })
        // 初始化滚动
        this.listScroll = new BScroll('.recommend-container', {
          scrollY: true,
          probeType: 3
        })

        // 滚动结束重新初始化listScroll的dom结构
        this.listScroll.on('scrollEnd', () => {
          this.listScroll.refresh()
        })

        this.listScroll.on('touchEnd', ({x, y}) => {
          // 下拉刷新
          if (y>=50) {
            console.log('下拉刷新')
            // this.pageNo-=1
            // if (this.pageNo < 0) this.pageNo = 1
            // this.$store.dispatch('reqRecommendList', {pageNo: this.pageNo, pageSize: this.pageSize})
          }
          // 上拉加载
          if (this.listScroll.maxScrollY > y+20) {
            console.log('上拉加载')
            this.pageNo+=1
            this.$store.dispatch('reqRecommendList', {pageNo: this.pageNo, pageSize: this.pageSize})
          }
        })
      },
    },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .recommend-container
    width 100%
    height 100%
    background #F5F5F5
    // overflow hidden
    .recommend
      display flex
      flex-direction row
      flex-wrap wrap
      padding-bottom 50px
</style>
