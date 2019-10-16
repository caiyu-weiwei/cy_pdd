<template>
  <div>
    <ly-tab
      v-model="selectedId"
      :items="items"
      :options="options"
      @change="handleChange"
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

</style>
