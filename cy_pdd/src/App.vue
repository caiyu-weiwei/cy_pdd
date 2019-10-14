<template>
  <div>
    <router-view></router-view>
    <tab-bar></tab-bar>
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
</style>
