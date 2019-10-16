<template>
  <div class="home">
    <ly-tab
      v-model="selectedId"
      :items="items"
      :options="options"
      @change="handleChange"
      class="fix"
    />
    <router-view />
  </div>
</template>

<script>
  import { lyTabItems, lyTabOptions, subRouterList } from 'common/enum'
  export default {
    name: 'Home',
    data() {
      return {
        selectedId: 0,
        items: lyTabItems,
        options: lyTabOptions,
        subRouterList: subRouterList
      }
    },
    methods: {
      handleChange(item, index) {
        console.log('handleChange item', item)
        this.$router.replace(this.subRouterList[index])
      }
    }
  }
</script>

<style lang="stylus" scoped ref="stylesheet/stylus">
  .home
    width 100%
    height 100%
    .fix
      position fixed
      top 0
      left 0
      z-index 998
</style>
