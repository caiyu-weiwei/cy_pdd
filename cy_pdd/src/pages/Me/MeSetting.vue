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
    <div class="logout" @click="logout">退出登录</div>
  </div>
</template>

<script>
  import MeCommonCell from './MeCommonCell'
  import {MessageBox} from 'mint-ui'
  export default {
    name: 'MeSetting',
    components: {
      MeCommonCell
    },
    methods: {
      cellClick(param) {
        console.log(param)
      },
      logout() {
        MessageBox
          .confirm('您确定要退出吗？')
          .then(action => {
            if ('confirm' === action) {
              console.log('action', action)
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