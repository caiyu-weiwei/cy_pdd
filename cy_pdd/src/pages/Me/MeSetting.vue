<template>
  <div class="setting">
    <div class="setting-block">
      <me-common-cell leftTitle="免密支付设置" leftIcon="cy-uniE902" :cellClick="cellClick"></me-common-cell>
      <me-common-cell leftTitle="免拼卡设置" leftIcon="cy-5" :cellClick="cellClick"></me-common-cell>
      <me-common-cell leftTitle="消息接收设置" leftIcon="cy-1" :cellClick="cellClick"></me-common-cell>
    </div>
    <div class="setting-block">
      <me-common-cell leftTitle="常见问题" leftIcon="cy-2" :cellClick="cellClick"></me-common-cell>
      <me-common-cell leftTitle="意见反馈" leftIcon="cy-3" :cellClick="cellClick"></me-common-cell>
    </div>
    <div class="setting-block">
      <me-common-cell leftTitle="商家免费入驻" leftIcon="cy-4" :cellClick="cellClick"></me-common-cell>
    </div>
    <div class="logout" @click="handlerLogout">退出登录</div>
  </div>
</template>

<script>
  import MeCommonCell from './MeCommonCell'
  import {MessageBox} from 'mint-ui'
  import {mapActions} from 'vuex'
  export default {
    name: 'MeSetting',
    components: {
      MeCommonCell
    },
    methods: {
      ...mapActions(['logout']),
      cellClick(param) {
        console.log(param)
      },
      handlerLogout() {
        MessageBox
          .confirm('您确定要退出吗？')
          .then(action => {
            if ('confirm' === action) {
              console.log('action', action)
              this.logout()
              this.$router.replace('/home')
            }
          })
      }
    },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .setting
    height 100%
    background-color #fff
    .setting-block
      margin-bottom 10px
    .logout
      height 40px
      line-height 40px
      text-align center
      margin-top 20px
</style>