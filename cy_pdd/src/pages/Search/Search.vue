<template>
  <div class="search-container">
    <search-nav/>
  </div>
</template>

<script>
  import SearchNav from './Children/SearchNav'
  export default {
    name: 'Search',
    components: {
      SearchNav
    }
  }
</script>

<style lang="stylus" scoped ref="stylesheet/stylus">
  .search-container
    background #F5F5F5
</style>
