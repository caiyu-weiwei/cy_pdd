<template>
  <div class="me-detail">
    <div class="me-detail-top">基本信息</div>
    <div class="me-detail-group">
      <div class="me-icon">
        <span>头像</span>
        <img :src="meIcon" >
      </div>
      <div class="me-item">
        <span>手机</span>
        <span>188****8888</span>
      </div>
      <div class="me-item">
        <span>昵称</span>
        <span><input type="text" v-model="userName"></span>
      </div>
      <div class="me-item">
        <span>性别</span>
        <span>188****8888</span>
      </div>
      <div class="me-item">
        <span>常住地</span>
        <span><input type="text" v-model="userAddress"></span>
      </div>
      <div class="me-item">
        <span>生日</span>
        <span>188****8888</span>
      </div>
      <div class="me-item">
        <span>个性签名</span>
        <span><input type="text" v-model="userSign"></span>
      </div>
    </div>
    <button>修改</button>
  </div>
</template>

<script>
  export default {
    name: 'MeDetail',
    data() {
      return {
        meIcon: require('./images/me_icon.png')
      }
    },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .me-detail
    width 100%
    height 100%
    .me-detail-top
      width 100%
      height 60px
      line-height 60px
      padding-left 10px
      font-weight bold
    .me-detail-group
      div
        padding 0 10px
        height 60px
        background-color #fff
        border-bottom 1px solid #e0e0e0
        display flex
        justify-content space-between
        align-items center
      .me-icon
        img 
          width 50px
          border-radius 50%
      .me-item
        input 
          border none
          outline none
          text-align right
    button 
      width 90%
      height 40px
      line-height 40px
      background-color #e9232c
      text-align ceter
      margin 20px 5%
      border none
      font-size 16px
      color #fff
      border-radius 10px
</style>