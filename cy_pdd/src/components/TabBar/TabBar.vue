<template>
  <div class="bottom-tab">
    <span class="tab-item" v-for="(item, index) in tabBarArr" :key="index" @click="switchTo(item.path)">
      <img :src="$route.path.includes(item.path) ? item.selected : item.normal" >
      <span :class="$route.path.includes(item.path) ? 'on' : ''">{{ item.title }}</span>
    </span>
  </div>
</template>

<script>
  import { tabBarArr } from 'common/enum'
  export default {
    name: 'TabBar',
    data() {
      return {
        tabBarArr: tabBarArr
      }
    },
    methods: {
      /**
       * 路由切换
       */
      switchTo(path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" scoped ref="stylesheet/stylus">
  .bottom-tab
    width 100%
    height 50px
    background #fff
    position: fixed
    left 0
    bottom 0
    z-index 999
    display flex
    .tab-item
      display flex
      flex-direction column
      flex 1
      justify-content center
      align-items center
      font-size 14px
      color #666
      img
        width 35%
        margin-bottom 2px
      .on
        color red
</style>
