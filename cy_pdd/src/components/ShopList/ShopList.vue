<template>
  <a class="recommend-item">
    <img :src="item.thumb_url" alt="" style="100%">
    <h4 class="item-title">{{item.short_name}}</h4>
    <div class="item-bottom">
      <span class="item-price">￥{{item.price / 100}}</span>
      <span class="item-sales">{{item.sales_tip}}</span>
      <button class="item-btn">找相关</button>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'ShopList',
    props: ['item'],
    data() {
      return {}
    },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .recommend-item
    width 49.5%
    background-color #fff
    padding-bottom 15px
    margin-bottom 15px
    img 
      width 100%
    .item-title
      height 20px
      line-height 20px
      font-size 13px
      font-weight lighter
      overflow hidden
      margin 5px 0
      padding 0 5px
    .item-bottom
      display flex 
      align-items center
      padding 0 6px
      .item-price
        flex 2
        font-size 12px
        color red
        font-weight bolder
      .item-sales
        flex 4
        font-size 10px
        color #666
      .item-btn
        flex 2
        font-size 10px
        background-color transparent
        color red
        border 1px solid orangered
        border-radius 5px
  .recommend-item:nth-child(2n-1)
    margin-right 1%
</style>