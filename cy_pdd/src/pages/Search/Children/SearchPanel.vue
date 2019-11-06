<template>
  <div class="search-panel">
    <div class="search-nav">
      <div class="search-input">
        <img :src="searchIcon" alt="">
        <input type="search" placeholder="请输入">
      </div>
      <button @click="isShowSearchPanel(false)">取消</button>
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
        searchIcon: require('../images/search.png')
      }
    },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
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
      justify-content center
      align-items center
      .search-input
        display flex
        flex 3
        height 70%
        justify-content center
        img
          width 25px
          height 25px
        input 
          border none
      button
        flex 1
        height 70%
</style>