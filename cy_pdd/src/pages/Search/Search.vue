<template>
  <div class="search-container">
    <!-- 搜索导航 -->
    <search-nav/>
    <!-- 商品列表 -->
    <div class="shop">
      <!-- 左侧 -->
      <div class="menu-wrapper">
        <ul>
          <li class="menu-item current">
            <span>女装</span>
          </li>
          <li class="menu-item">
            <span>鞋包</span>
          </li>
        </ul>
      </div>
      <!-- 右侧 -->
      <div class="shop-wrapper">
        <ul>
          <li class="shop-li">
            <div class="shop-title">
              <span>女装</span>
              <a href="">查看更多 ></a>
            </div>
            <ul class="shop-items">
              <li>
                <img src="./images/s1.png" alt="">
                <span>女装</span>
              </li>
              <li>
                <img src="./images/s1.png" alt="">
                <span>女装</span>
              </li>
              <li>
                <img src="./images/s1.png" alt="">
                <span>女装</span>
              </li>
              <li>
                <img src="./images/s1.png" alt="">
                <span>女装</span>
              </li>
              <li>
                <img src="./images/s1.png" alt="">
                <span>女装</span>
              </li>
              <li>
                <img src="./images/s1.png" alt="">
                <span>女装</span>
              </li>
            </ul>
          </li>
          <li class="shop-li">
            <div class="shop-title">
              <span>女装</span>
              <a href="">查看更多 ></a>
            </div>
            <ul class="shop-items">
              <li>
                <img src="./images/s1.png" alt="">
                <span>女装</span>
              </li>
              <li>
                <img src="./images/s1.png" alt="">
                <span>女装</span>
              </li>
              <li>
                <img src="./images/s1.png" alt="">
                <span>女装</span>
              </li>
              <li>
                <img src="./images/s1.png" alt="">
                <span>女装</span>
              </li>
              <li>
                <img src="./images/s1.png" alt="">
                <span>女装</span>
              </li>
              <li>
                <img src="./images/s1.png" alt="">
                <span>女装</span>
              </li>
            </ul>
          </li>
          <li class="shop-li">
            <div class="shop-title">
              <span>女装</span>
              <a href="">查看更多 ></a>
            </div>
            <ul class="shop-items">
              <li>
                <img src="./images/s1.png" alt="">
                <span>女装</span>
              </li>
              <li>
                <img src="./images/s1.png" alt="">
                <span>女装</span>
              </li>
              <li>
                <img src="./images/s1.png" alt="">
                <span>女装</span>
              </li>
              <li>
                <img src="./images/s1.png" alt="">
                <span>女装</span>
              </li>
              <li>
                <img src="./images/s1.png" alt="">
                <span>女装</span>
              </li>
              <li>
                <img src="./images/s1.png" alt="">
                <span>女装</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import SearchNav from './Children/SearchNav'
  export default {
    name: 'Search',
    components: {
      SearchNav
    }
  }
</script>

<style lang="stylus" scoped ref="stylesheet/stylus">
  .search-container
    background #F5F5F5
    .shop
      display flex 
      width 100%
      position absolute
      top 60px
      bottom 50px
      background #fff
      .menu-wrapper
        width 80px
        background #e0e0e0
        flex 0 0 80px
        // position relative
        .menu-item
          width 100%
          height 60px
          display flex
          justify-content center
          align-items center
          background #fafafa
          color #666
          font-weight lighter
        .current
          color #e02e24
        .current::before
          content ''
          width 4px
          height 30px
          background #e02e24
          position absolute
          left 0
      .shop-wrapper
        flex 1
        background #fff
        overflow hidden 
        .shop-li
          .shop-title
            display flex
            height 44px
            padding 0 10px
            justify-content space-between
            align-items center
            color #999
            a
              color #999
              text-decoration none
              font-weight lighter
          .shop-items
            display flex
            flex-wrap wrap
            li
              display flex
              flex-direction column
              width 33.3%
              height 90px
              justify-content center
              align-items center
              color #666
              font-size 14px
              font-weight lighter
              img
                width 60%
                height 60%
                margin-bottom 5px

            
</style>
