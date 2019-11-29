<template>
  <div class="me-cell" @click="cellClick(leftTitle)">
    <div class="cell-left">
      <i :class="leftIcon" v-show="leftIcon"></i>
      <span v-show="leftTitle" :style="{color: leftTitleColor}">{{leftTitle}}</span>
    </div>
    <div class="cell-right">
      <span class="cell-right-content" v-show="rightTitle" :style="{color: rightTitleColor}">{{rightTitle}}</span>
      <i class="cy-uniE909" v-show="isShowRightArrow"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MeCommonCell',
    props: {
      leftTitle: {type: String, default: ''},
      leftIcon: {type: String, default: ''},
      rightTitle: {type: String, default: ''},
      isShowRightArrow: {type: Boolean, default: true},
      leftTitleColor: {type: String, default: '#333'},
      rightTitleColor: {type: String, default: '#666'},
      cellClick: {type: Function, default: () => {}}
    }

  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .me-cell
    height 44px
    padding 0 10px
    display flex
    flex-direction row
    flex-wrap nowrap
    justify-content space-between
    align-items center
    background-color #fff
    .cell-left,
    .cell-right
      display flex
      aligh-items center
      i
        margin-right 5px
      .cell-right-content
        font-size 14px
        color #333
</style>