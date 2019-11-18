<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar v-if="$route.meta.showBottomTabBar"></tab-bar>
  </div>
</template>

<script>
import TabBar from './components/TabBar/TabBar'
export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    TabBar
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background-color #F5F5F5
</style>
