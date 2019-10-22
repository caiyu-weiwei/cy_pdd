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
    </ul>
  </div>
</template>

<script>
  export default {
    name: HotShopList,
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

</style>
