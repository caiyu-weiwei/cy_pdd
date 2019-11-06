<template>
  <div class="search-panel">
    <div class="search-nav">
      <div class="search-input">
        <img :src="searchIcon" alt="">
        <input ref="search" type="search" placeholder="请输入">
      </div>
      <button @click="isShowSearchPanel(false)">取消</button>
    </div>
    <div class="search-content">
      <div class="search-title">
        <img :src="hotIcon" alt="">
        <span>热门搜索</span>
      </div>
      <ul class="hot-list">
        <li class="list-item" v-for="(hot, index) in hotList" :key="index">{{hot.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchPanel',
    props: {
      isShowSearchPanel: Function
    },
    data() {
      return {
        searchIcon: require('../images/search.png'),
        hotIcon: require('../images/hot.png'),
        hotList: [
          {
            name: '面巾纸'
          },
          {
            name: '浴巾儿童'
          },
          {
            name: '石榴水果'
          },
          {
            name: '冰箱保鲜盒'
          },
          {
            name: '富豪卷纸'
          },
          {
            name: '毛巾浴袍'
          },
        ]
      }
    },
    mounted() {
      this.$refs.search.focus()
    },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  .search-panel
    width 100%
    height 100%
    background-color #fff
    position fixed
    top 0 
    left 0
    z-index 1000
    .search-nav
      width 100%
      height 60px
      display flex
      justify-content space-between
      align-items center
      padding 0 20px
      border-bottom-1px(#ccc)
      .search-input
        display flex
        width 85%
        height 38px
        align-items center
        background-color #ededed
        border-radius 10px
        padding 0 10px
        input
          width 90%
          height 90%
          padding-left 10px
          font-size 16px
          background-color transparent
          outline none 
        img
          width 20px
      button
        background-color transparent
        font-size 16px
        color #aaa
    .search-content
      width 100%
      margin-top 50px
      .search-title
        width 100%
        height 60px
        display flex
        align-items center
        font-size 16px
        padding 0 20px
        img 
          width 25px
        span
          color #ccc
      .hot-list
        width 100%
        display flex
        flex-wrap wrap
        .list-item
          margin 5px 10px
          padding 5px 10px
          color #aaa
          font-size 12px
          background-color #ededed
          border-radius 8px
          font-weight lighter
</style>