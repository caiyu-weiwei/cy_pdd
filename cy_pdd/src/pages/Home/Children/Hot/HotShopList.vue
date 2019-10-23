<template>
  <div class="shop-container">
    <ul class="shop-list">
      <li class="shop-list-item">
        <img :src="shopItemUrl" alt="" width="100%">
        <h4 class="list-item-title">【唐幂】整条刺绣民族风围巾女士秋东季中年妈妈羊绒羊毛披肩保暖【唐幂】整条刺绣民族风围巾女士秋东季中年妈妈羊绒羊毛披肩保暖【唐幂】整条刺绣民族风围巾女士秋东季中年妈妈羊绒羊毛披肩保暖</h4>
        <div class="list-item-bottom">
          <span class="item-price">￥26.9</span>
          <span class="item-counter">已拼5345件</span>
          <span class="item-user">
            <img :src="user1Url" alt="">
            <img :src="user2Url" alt="">
          </span>
          <span class="item-buy">
            <button>去拼单 ></button>
          </span>
        </div>
      </li>
      <li class="shop-list-item">
        <img :src="shopItemUrl" alt="" width="100%">
        <h4 class="list-item-title">【唐幂】整条刺绣民族风围巾女士秋东季中年妈妈羊绒羊毛披肩保暖【唐幂】整条刺绣民族风围巾女士秋东季中年妈妈羊绒羊毛披肩保暖【唐幂】整条刺绣民族风围巾女士秋东季中年妈妈羊绒羊毛披肩保暖</h4>
        <div class="list-item-bottom">
          <span class="item-price">￥26.9</span>
          <span class="item-counter">已拼5345件</span>
          <span class="item-user">
            <img :src="user1Url" alt="">
            <img :src="user2Url" alt="">
          </span>
          <span class="item-buy">
            <button>去拼单 ></button>
          </span>
        </div>
      </li>
      <li class="shop-list-item">
        <img :src="shopItemUrl" alt="" width="100%">
        <h4 class="list-item-title">【唐幂】整条刺绣民族风围巾女士秋东季中年妈妈羊绒羊毛披肩保暖【唐幂】整条刺绣民族风围巾女士秋东季中年妈妈羊绒羊毛披肩保暖【唐幂】整条刺绣民族风围巾女士秋东季中年妈妈羊绒羊毛披肩保暖</h4>
        <div class="list-item-bottom">
          <span class="item-price">￥26.9</span>
          <span class="item-counter">已拼5345件</span>
          <span class="item-user">
            <img :src="user1Url" alt="">
            <img :src="user2Url" alt="">
          </span>
          <span class="item-buy">
            <button>去拼单 ></button>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HotShopList',
    data() {
      return {
        shopItemUrl: require('../../imgs/shop_list/shop_item.png'),
        user1Url: require('../../imgs/shop_list/user1.jpg'),
        user2Url: require('../../imgs/shop_list/user2.jpg'),
      }
    },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .shop-container
    margin-bottom 50px
    background #f5f5f5
    .shop-list
      .shop-list-item
        background #fff
        display flex
        flex-direction column
        margin-bottom 10px
        .list-item-title
          width 94%
          height 44px
          line-height 22px
          margin-left 3%
          overflow hidden
          font-weight bolder
        .list-item-bottom
          display flex
          justify-content space-around
          align-items center
          margin 8px 0
          .item-price
            font-size 18px
            color red
            font-weight bolder
            text-align center
            flex 1
          .item-counter
            font-size 12px
            color #ccc
            flex 2
          .item-user
            display flex 
            flex 1
            img 
              width 30px
              border-radius 50%
            img:nth-child(2)
              margin-left -6px
          .item-buy
            flex 2
            button
              width 80%
              height 34px
              font-size 15px
              border none
              color #fff
              display flex
              justify-content center
              align-items center
              background red
              border-radius 8px
              margin-left 10px
</style>
