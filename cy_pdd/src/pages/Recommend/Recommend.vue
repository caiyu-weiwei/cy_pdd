<template>
  <div class="recommend-container">
    <ul class="recommend">
      <shop-list></shop-list>
    </ul>
  </div>
</template>

<script>
  import ShopList from '@/components/ShopList/ShopList'
  export default {
    name: 'Recommend',
    data() {
      return {}
    },
    components: {
      ShopList
    }
  }
</script>

<style lang="stylus" scoped ref="stylesheet/stylus">
  .recommend-container
    width 100%
    height 100%
    background #F5F5F5
    .recommend
      display flex
      flex-direction row
      flex-wrap wrap
</style>
