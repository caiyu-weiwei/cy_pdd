<template>
  <div class="select-login">
    <div class="login-img">
      <img :src="loginImg" />
    </div>
    <h4>选择登录方式</h4>
    <button>手机登录</button>
  </div>
</template>

<script>
  export default {
    name: 'SelectLogin',
    data() {
      return {
        loginImg: require('./images/cy_logo_sm.png')
      }
    },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .select-login
    width 100%
    height 100%
    position fixed
    top 0
    left 0
    z-index 1000
    background-color #F5F5F5
    display flex
    flex-direction column
    justify-content center
    align-items center
    .login-img
      position fixed
      top 130px
      left 50%
      margin-left -100px
      img
        width 200px
    button
      width 80%
      height 38px
      background-color purple
      border none
      border-radius 5px
      color #fff
      font-size 20px
      margin-top 30px
</style>