<template>
  <div class="me-top">
    <div class="me-info">
      <img :src="meImg" >
      <span>{{userInfo.userPhone | phoneFormat}}</span>
      <i class="cy-3"></i>
    </div>
    <div class="my-order">
      <div class="order-top">
        <h3>我的订单</h3>
        <span>查看全部 ></span>
      </div>
      <div class="order-bottom">
        <div class="bottom-item">
          <i class="cy-1"></i>
          <span>待付款</span>
        </div>
        <div class="bottom-item">
          <i class="cy-2"></i>
          <span>待分享</span>
        </div>
        <div class="bottom-item">
          <i class="cy-3"></i>
          <span>待发货</span>
        </div>
        <div class="bottom-item">
          <i class="cy-4"></i>
          <span>待收货</span>
        </div>
        <div class="bottom-item">
          <i class="cy-5"></i>
          <span>待评价</span>
        </div>
      </div>
    </div>
    <div class="setting">
      <div class="setting-item">
        <i class="cy-1"></i>
        <span>新人红包</span>
      </div>
      <div class="setting-item">
        <i class="cy-2"></i>
        <span>多多果园</span>
      </div>
      <div class="setting-item">
        <i class="cy-3"></i>
        <span>砍价免费拿</span>
      </div>
      <div class="setting-item">
        <i class="cy-4"></i>
        <span>边逛边赚</span>
      </div>
      <div class="setting-item">
        <i class="cy-5"></i>
        <span>天天领红包</span>
      </div>
      <div class="setting-item">
        <i class="cy-uniE902"></i>
        <span>收货地址</span>
      </div>
      <div class="setting-item">
        <i class="cy-1"></i>
        <span>我的评价</span>
      </div>
      <div class="setting-item">
        <i class="cy-3"></i>
        <span>官方客服</span>
      </div>
      <router-link class="setting-item" tag="div" to="/setting">
        <i class="cy-4"></i>
        <span>设置</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'MeTop',
    data() {
      return {
        meImg: require('./images/me_icon.png')
      }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    filters: {
      phoneFormat(phone) {
        let phoneArr = [...phone], arrVal = []
        phoneArr.forEach((item, index) => {
          if (index>2 && index<7) {
            arrVal.push('*')
          } else {
            arrVal.push(item)
          }
        })
        return arrVal.join('')
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .me-top
    width 100%
    height 100%
    font-size 14px
    .me-info
      display flex
      align-items center
      padding 20px
      background-color #fff
      margin-bottom 10px
      img 
        width 60px
        height 60px
        border-radius 50%
      span 
        margin 0 10px
      i 
        font-size 25px
    .my-order
      background-color #fff
      .order-top
        display flex
        flex-direction row
        justify-content space-between
        padding 0 10px
        height 44px
        line-height 44px
      .order-bottom
        display flex
        flex-direction row
        .bottom-item
          flex 1
          height 60px
          display flex 
          flex-direction column
          justify-content center
          align-items center
          i 
            font-size 30px
            color #E9232C
            margin-bottom 5px
    .setting
      background-color #fff
      display flex 
      flex-direction row
      flex-wrap wrap
      justify-content space-between
      padding-top 10px
      .setting-item
        width 90px
        height 70px
        display flex
        flex-direction column
        justify-content center
        align-items center
        i 
          font-size 30px
          color orange
          margin-bottom 5px

</style>