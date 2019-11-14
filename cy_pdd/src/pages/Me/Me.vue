<template>
  <div class="me">
    <select-login></select-login>
  </div>
</template>

<script>
  import SelectLogin from '@/pages/Login/SelectLogin'
  export default {
    name: 'Me',
    components: {
      SelectLogin
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .me
    width 100%
    height 100%
    background-color #F5F5F5
</style>
