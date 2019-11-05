<template>
  <div class="search-container">
    <!-- 搜索导航 -->
    <search-nav/>
    <!-- 商品列表 -->
    <div class="shop">
      <!-- 左侧 -->
      <div class="menu-wrapper">
        <ul>
          <li class="menu-item"
              v-for="(goods, index1) in dataSource"
              :key="index1"
              :class="{'current': index1 === currentIndex}">
            <span>{{goods.name}}</span>
          </li>
        </ul>
      </div>
      <!-- 右侧 -->
      <div class="shop-wrapper">
        <ul ref="shopUl">
          <li class="shop-li" v-for="(goods, index2) in dataSource" :key="index2">
            <div class="shop-title">
              <span>{{goods.name}}</span>
              <a href="">查看更多 ></a>
            </div>
            <ul class="phone-type" v-if="goods.tag === 'phone'">
              <li v-for="(category, index3) in goods.category" :key="index3">
                <img :src="category.icon" alt="">
              </li>
            </ul>
            <ul class="shop-items">
              <li v-for="(item, index4) in goods.items" :key="index4">
                <img :src="item.icon" alt="">
                <span>{{item.title}}</span>
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
  import BScroll from 'better-scroll'
  export default {
    name: 'Search',
    components: {
      SearchNav
    },
    data() {
      return {
        scrollY: '',
        rightLiTops: [],
        dataSource: [
          {
            name: '女装',
            items: [
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
            ]
          },
          {
            name: '鞋包',
            items: [
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
            ]
          },
          {
            name: '手机',
            tag: 'phone',
            category: [
              {icon: require('./images/s1.png')},
              {icon: require('./images/s1.png')},
              {icon: require('./images/s1.png')},
              {icon: require('./images/s1.png')},
              {icon: require('./images/s1.png')},
              {icon: require('./images/s1.png')},
              {icon: require('./images/s1.png')},
            ],
            items: [
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
            ]
          },
          {
            name: '鞋包',
            items: [
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
            ]
          },
          {
            name: '鞋包',
            items: [
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
            ]
          },
          {
            name: '鞋包',
            items: [
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
            ]
          },
          {
            name: '鞋包',
            items: [
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
            ]
          },
          {
            name: '鞋包',
            items: [
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
            ]
          },
          {
            name: '鞋包',
            items: [
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
            ]
          },
          {
            name: '鞋包',
            items: [
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
            ]
          },
          {
            name: '鞋包',
            items: [
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
            ]
          },
          {
            name: '鞋包',
            items: [
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
            ]
          },
          {
            name: '鞋包',
            items: [
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
            ]
          },
          {
            name: '鞋包',
            items: [
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
              {
                icon: require('./images/s1.png'),
                title: '女装'
              },
            ]
          },
        ]
      }
    },
    computed: {
      /**
       * 动态获取滑到顶部模块的索引
       */
      currentIndex() {
        const {scrollY, rightLiTops} = this
        return rightLiTops.findIndex((liTop, index) => {
          return scrollY >= liTop && scrollY < rightLiTops[index+1]
        })
      }
    },
    mounted() {
      this._initScrollEvent()
    },
    methods: {
      /**
       * 初始化
       */
      _initScrollEvent() {
        // 左侧滚动初始化
        this.leftScroll = new BScroll('.menu-wrapper', {})
        // 右侧滚动初始化
        this.rightScroll = new BScroll('.shop-wrapper', {probeType: 3})
        // 计算出右侧所有模块头部位置
        this._initRightLiTops()
        // 监听右侧模块滚动事件
        this.rightScroll.on('scroll', ({x, y}) => {
          console.log('this.rightScroll y', y)
          this.scrollY = Math.abs(y)
        })
      },
      /**
       * 计算出右侧所有模块头部位置
       */
      _initRightLiTops() {
        let lisArr = [], top = 0
        lisArr.push(top)
        const shopLis = this.$refs.shopUl.getElementsByClassName('shop-li')
        console.log('shopLis', shopLis)
        // li.clientHeight 为li元素的高度（height+padding）
        Array.prototype.slice.call(shopLis).forEach(li => {
          top += li.clientHeight
          lisArr.push(top)
        })
        this.rightLiTops = lisArr
        console.log('this.rightLiTops', this.rightLiTops)
      }
    },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
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
          .phone-type
            width 100%
            background #fff
            display flex
            flex-direction row
            flex-wrap wrap
            li
              width 33.3%
              display flex
              justify-content center
              align-items center
              img
                width 70%
                height 70%

            
</style>
