<template>
  <div class="me">
    <div v-if="userInfo.userId">
       <me-top/>
    </div>
    <select-login v-else></select-login>
  </div>
</template>

<script>
  import SelectLogin from '@/pages/Login/SelectLogin'
  import MeTop from './MeTop'
  import {mapState} from 'vuex'
  export default {
    name: 'Me',
    components: {
      SelectLogin,
      MeTop
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
