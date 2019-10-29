<template>
  <div class="search-nav">
    <a class="search-nav-icon" href="">
      <img :src="searchNavIcon" alt="" width="25px">
      <span>纸巾抽纸三层</span>
    </a>
  </div>
</template>

<script>
  import searchNavIcon from '../images/search.png'
  export default {
    name: 'SearchNav',
    data() {
      return {
        searchNavIcon: searchNavIcon
      }
    },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  // @import '../../../  common/stylus/mixins.styl'
  .search-nav
    width 100%
    height 60px
    background #fff
    // border-bottom-1px(red)
</style>