<template>
  <div class="me">
    <div v-if="userInfo.userId">
       用户已登录
    </div>
    <div v-else>
      <select-login></select-login>
    </div>
  </div>
</template>

<script>
  import SelectLogin from '@/pages/Login/SelectLogin'
  import {mapState} from 'vuex'
  export default {
    name: 'Me',
    components: {
      SelectLogin
    },
    computed: {
      ...mapState(['userInfo'])
    },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .me
    width 100%
    height 100%
    background-color #F5F5F5
</style>
